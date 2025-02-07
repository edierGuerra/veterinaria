from fastapi import APIRouter, Depends
from database import get_db
from sqlalchemy.orm import Session
from crud import create_visit
from schemas import VisitaCreate, VisitaResponse

router = APIRouter(prefix="/api/v1/visitas",tags=["visitas"])

@router.post("/register", response_model=VisitaResponse)
def register_visit(data_form:VisitaCreate, db:Session = Depends(get_db)):
    visita = create_visit(
        db=db,
        heart_rate=data_form.frecuencia_cardíaca,
        id_pet=data_form.mascota_id,
        id_veterinarian=data_form.id_profesional,
        mood=data_form.estado_de_animo,
        recommendations=data_form.recomendaciones,
        respiratory_rate=data_form.frecuencia_respiratoria,
        temperature=data_form.temperatura,
        weight=data_form.temperatura,
    )
    return visita