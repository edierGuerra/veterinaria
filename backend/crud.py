from sqlalchemy.orm import Session
from models import Mascota, Dueno, Veterinario, HistorialClinico
from typing import Optional
from datetime import datetime
from database import SessionLocal
# CRUD veterinarios
def create_veterinarian(db:Session,username:str, password:str, names:str, last_names:str, address:str, phone:str, professional_card:str):
    veterinarian = Veterinario(username = username, password = password, nombres = names, apellidos = last_names, direccion = address, telefono = phone, tarjeta_profesional = professional_card)
    
    db.add(veterinarian)
    db.commit()
    db.refresh(veterinarian)
    return veterinarian

""" def read_veterinarian(id_veterinarian:int):
    pass """

def update_veterinarian(db:Session,id_veterinarian:int, new_names:str = None, new_last_names:str = None, new_address:str = None, new_phone:str = None, profesional_target:str = None):
    veterinarian = db.query(Veterinario).filter(Veterinario.id == id_veterinarian).first()
    if new_names:
        veterinarian.nombres = new_names
    if new_last_names:
        veterinarian.apellidos = new_last_names
    if new_address:
        veterinarian.direccion = new_address
    if new_phone: 
        veterinarian.telefono = new_phone
    if profesional_target: 
        veterinarian.tarjeta_profesional = profesional_target

    db.commit()
    db.refresh(veterinarian)
    return veterinarian

def delete_veterinarian(db:Session,id_veterinarian:int):
    veterinarian = db.query(Veterinario).filter(Veterinario.id == id_veterinarian).first()

    db.delete(veterinarian)
    db.commit()
    return {"message":"Veterinario eliminado exitosamente"}

# CRUD mascotas
def create_pet(db:Session,id_owner:int, id_veterinarian:int, name:str, color:str, species:str, race:str):
    pet = Mascota(nombre = name, color = color, especie = species, raza = race, id_dueno = id_owner, id_veterinario = id_veterinarian)
    db.add(pet)
    db.commit()
    db.refresh(pet)
    return pet

def read_pet():
    pass

def update_pet(db:Session, id_pet:int, name:str = None, id_veterinarian:int = None):
    updated_pet = db.query(Mascota).filter(Mascota.id == id_pet).first()

    db.commit()
    db.refresh(updated_pet)
    if name:
        updated_pet.nombre = name
    if id_veterinarian:
        updated_pet.id_veterinario = id_veterinarian
    return updated_pet

def delete_pet(db:Session, id_pet:int):
    deleted_pet = db.query(Mascota).filter(Mascota.id == id_pet).first()
    db.delete(deleted_pet)
    db.commit()
    return {"message":"Mascota eliminada satisfactoriamente"}

# CRUD propietarios
def create_owner(db:Session,n_documento:int, names:str, last_names:str, address:str, phone:str, email:str):
    owner = Dueno(id = n_documento, nombres = names, apellidos = last_names, direccion = address, telefono = phone, correo_electronico = email)
    
    db.add(owner)
    db.commit()
    db.refresh(owner)
    return owner

def read_owner(db:Session, id_owner:int):
    owner = db.query(Dueno).filter(Dueno.id == id_owner).first()
    return owner

def update_owner(db:Session, id_owner:int, names:str = None, last_names:str = None, address:str = None, phone:str = None, email:str = None):
    """ updated_owner = db.query(Dueno).filter(Dueno.id == id_owner).first()
    db.commit()
    db.refresh(updated_owner)
    return updated_owner """
    pass

def delete_owner(db:Session, id_owner:int):
    deleted_owner = db.query(Dueno).filter(Dueno.id == id_owner).first()

    db.delete(deleted_owner)
    db.commit()
    return {"message":"Dueño eliminada satisfactoriamente"}

# VISITAS 
# Registrar una nueva visita o historial clinico en caso de no tener
def create_visit(
    db:Session,
    id_veterinarian:int,
    id_pet:int,
    mood:str,
    heart_rate:int,
    respiratory_rate:int,
    weight:float,
    recommendations:str,
    temperature:float,
    ):
    """
    Crea una nueva visita con los datos proporcionados.
    """
    #Comprobar el veterinario
    veterinarian = db.query(Veterinario).filter(Veterinario.id == id_veterinarian).first()
    #Comprobar la mascota
    pet = db.query(Mascota).filter(Mascota.id == id_pet).first()
    #Comprobar el historial clinico
    historial_clinico = db.query(HistorialClinico).filter(HistorialClinico.mascota_id == pet.id).first()
    #Instancia de la visita
    visit = veterinarian.registrar_visita(
        mascota_id=id_pet,
        estado_animo=mood,
        frecuencia_cardiaca=heart_rate,
        frecuencia_respiratoria=respiratory_rate,
        peso=weight,
        recomendaciones=recommendations,
        temperatura=temperature
    )
    #Asignar nueva visita al historial clinico en caso de que si exista
    if historial_clinico:
        historial_clinico.visitas.append(visit)
        db.add(historial_clinico)
        db.refresh(historial_clinico)
    #Crear historial clinico en caso de que este no exista
    if not historial_clinico:
        nuevo_historial_clinico = HistorialClinico(
            mascota_id = pet.id
        )
        #Asignar nueva visita al nuevo historial 
        nuevo_historial_clinico.visitas.append(visit)
        db.add(nuevo_historial_clinico)
        db.refresh(nuevo_historial_clinico)
    #Asignar visita al veterinario
    veterinarian.visitas.append(visit)
    db.add(veterinarian)
    db.commit()# Guardar cambios
    db.refresh(veterinarian)
    return visit

# Eliminar un historial clinico por id
def eliminar_historial_clinico(id_mascota:int,db:Session):
    historial = db.query(HistorialClinico).filter(HistorialClinico.mascota_id == id_mascota).first()
    db.delete(historial)
    db.commit()
    return "historial eliminado exitosamente"