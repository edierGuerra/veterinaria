from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import Login,VeterinarioResponse,VeterinarioCreate
from models import Veterinario
from crud import create_veterinarian

router = APIRouter(prefix="/api/v1/veterinario",tags=["veterinario"])

@router.post("/",response_model=VeterinarioResponse)
def valide_veterinarian(form_data:Login, db:Session = Depends(get_db)):
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
    print(veterinarian)
    return veterinarian