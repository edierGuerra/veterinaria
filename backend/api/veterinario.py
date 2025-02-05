from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import Login,VeterinarioResponse,VeterinarioCreate,VeterinarioUpdate
from models import Veterinario
from crud import create_veterinarian, update_veterinarian

router = APIRouter(prefix="/api/v1/veterinario",tags=["veterinario"])

@router.post("/",response_model=VeterinarioResponse)
def login_veterinarian(form_data:Login, db:Session = Depends(get_db)):
    user = db.query(Veterinario).filter(Veterinario.username == form_data.username, Veterinario.password == form_data.password).first()
    if not user: 
        return {"message":"nombre de usuario o contraseña incorrectos"}
    return user

@router.post("/create",response_model=VeterinarioResponse)
def create_veterinarians(form_data:VeterinarioCreate,db:Session = Depends(get_db)):
    veterinarian = create_veterinarian(
        db = db,
        username = form_data.username,
        password = form_data.password,
        names = form_data.nombres, 
        last_names = form_data.apellidos,
        address = form_data.direccion, 
        phone = form_data.telefono,
        professional_card=form_data.tarjeta_profesional
    )
    return veterinarian

@router.put("/update", response_model=VeterinarioResponse)
def update_veterinarians(form_data:VeterinarioUpdate,db:Session = Depends(get_db)): 
    veterinarian = update_veterinarian(
        db = db,
        id_veterinarian=form_data.id,
        new_names=form_data.nombres,
        new_last_names=form_data.apellidos,
        new_phone=form_data.telefono,
        new_address=form_data.direccion
    )
    return veterinarian