from fastapi import APIRouter, Depends
from schemas import DuenoCreate, DuenoResponse
from sqlalchemy.orm import Session
from database import get_db
from crud import create_owner

router = APIRouter(prefix = "/api/v1/propietario", tags = ["propietario"])

@router.post("/register", response_model = DuenoResponse)
def registrar_propietario(form_data:DuenoCreate, db:Session = Depends(get_db)):
    dueño = create_owner(
        db,
        names=form_data.nombres,
        last_names=form_data.apellidos,
        address=form_data.direccion,
        phone=form_data.telefono,
        email = form_data.correo_electronico
        )
    return dueño 