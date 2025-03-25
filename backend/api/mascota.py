from fastapi import APIRouter, Depends
from schemas import MascotaCreate, MascotaResponse
from crud import create_pet, read_pet, read_pets
from sqlalchemy.orm import Session
from database import get_db


router = APIRouter(prefix="/api/v1/pets",tags=["mascotas"])

@router.post("/register", response_model=MascotaResponse)
def registrar_mascota(data_form:MascotaCreate, db:Session = Depends(get_db)):
    mascota = create_pet(
        db = db,
        name=data_form.nombre,
        species=data_form.especie,
        race=data_form.raza,
        color=data_form.color,
        id_owner=data_form.id_dueno,
        id_veterinarian=data_form.id_veterinario
    )

    return mascota 

@router.get("/read")
def consultar_mascota(nombre_mascota:str, db:Session = Depends(get_db)):
    mascota = read_pet(db,nombre_mascota)

    return mascota 

@router.get("/reads")
def consultar_mascotas(db:Session = Depends(get_db)):
    mascota = read_pets(db)

    return mascota 