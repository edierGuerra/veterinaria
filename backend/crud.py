from sqlalchemy.orm import Session
from models import Mascota, Dueno, Veterinario
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

def update_veterinarian(db:Session,id_veterinarian:int, new_names:str = None, new_last_names:str = None, new_address:str = None, new_phone:str = None):
    veterinarian = db.query(Veterinario).filter(Veterinario.id == id_veterinarian).first()
    if new_names:
        veterinarian.nombres = new_names
    if new_last_names:
        veterinarian.apellidos = new_last_names
    if new_address:
        veterinarian.direccion = new_address
    if new_phone: 
        veterinarian.telefono = new_phone

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
def create_owner(db:Session, names:str, last_names:str, address:str, phone:str, email:str):
    owner = Dueno(nombres = names, apellidos = last_names, direccion = address, telefono = phone, correo_electronico = email)
    
    db.add(owner)
    db.commit()
    db.refresh(owner)
    return owner

def read_owner(db:Session, id_owner:int):
    owner = db.query(Dueno).filter(Dueno.id == id_owner).first()
    return owner

def update_owner(db:Session, id_owner:int, names:str = None, last_names:str = None, address:str = None, phone:str = None, email:str = None):
    updated_owner = db.query(Dueno).filter(Dueno.id == id_owner).first()
    db.commit()
    db.refresh(updated_owner)
    return updated_owner

def delete_owner(db:Session, id_owner:int):
    deleted_owner = db.query(Dueno).filter(Dueno.id == id_owner).first()

    db.delete(deleted_owner)
    db.commit()
    return {"message":"Dueño eliminada satisfactoriamente"}

