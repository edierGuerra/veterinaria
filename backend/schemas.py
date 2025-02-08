from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import List, Optional

### 📌 ESQUEMA DUEÑO ###
class DuenoBase(BaseModel):
    id:int #= Field(..., description="numero de documento del propietario")
    nombres: str #= Field(..., min_length=1, max_length=100, description="Nombres del dueño")
    apellidos: str #= Field(..., min_length=1, max_length=100, description="Apellidos del dueño")
    direccion: Optional[str] #= Field(None, max_length=150, description="Dirección del dueño")
    telefono: Optional[str] #= Field(None, min_length=7, max_length=15, description="Teléfono del dueño")
    correo_electronico: EmailStr #= Field(..., description="Correo electrónico válido")

class DuenoCreate(DuenoBase):
    pass  # Usa los mismos atributos para crear un dueño

class DuenoResponse(DuenoBase):
    class Config:
        from_attributes = True

### 📌 ESQUEMA VETERINARIO ###
class VeterinarioBase(BaseModel):
    username: str = Field(max_length=10, min_length=5)
    nombres: str = Field(..., min_length=1, max_length=100, description="Nombres del veterinario")
    apellidos: str = Field(..., min_length=1, max_length=100, description="Apellidos del veterinario")
    direccion: Optional[str] = Field(None, max_length=150, description="Dirección del veterinario")
    telefono: Optional[str] = Field(None, min_length=7, max_length=15, description="Teléfono del veterinario")
    tarjeta_profesional: str = Field(..., min_length=5, max_length=50, description="Número de tarjeta profesional")

class VeterinarioCreate(VeterinarioBase):
    password: str = Field(max_length=15, min_length=10)

class VeterinarioUpdate(BaseModel):
    id: int 
    nombres: Optional[str] 
    apellidos: Optional[str] 
    direccion: Optional[str] 
    telefono: Optional[str] 
    tarjeta_profesional: Optional[str] 

class VeterinarioResponse(VeterinarioBase):
    id: int #= Field(..., description="ID del veterinario")
    username: str #= Field(max_length=10, min_length=5)

    class Config:
        from_attributes = True
# Login 
class Login(BaseModel):
    username: str 
    password: str 
### 📌 ESQUEMA MASCOTA ###
class MascotaBase(BaseModel):
    nombre: str #= Field(..., min_length=1, max_length=50, description="Nombre de la mascota")
    color: Optional[str] #= Field(None, max_length=30, description="Color de la mascota")
    especie: str #= Field(..., min_length=1, max_length=50, description="Especie de la mascota")
    raza: Optional[str] #= Field(None, max_length=50, description="Raza de la mascota")

class MascotaCreate(MascotaBase):
    id_dueno: int #= Field(..., description="ID del dueño")
    id_veterinario: Optional[int] #= Field(None, description="ID del veterinario (opcional)")

class MascotaResponse(MascotaBase):
    id: int #= Field(..., description="ID de la mascota")
    id_dueno: int #= Field(..., description="ID del dueño")
    id_veterinario: Optional[int] #= Field(None, description="ID del veterinario (opcional)")

    class Config:
        from_attributes = True

### 📌 ESQUEMA VISITA ###
class VisitaBase(BaseModel):
    temperatura: float = Field(..., gt=0, description="Temperatura en grados Celsius")
    peso: float = Field(..., gt=0, description="Peso en kilogramos")
    frecuencia_respiratoria: int = Field(..., gt=0, description="Frecuencia respiratoria en respiraciones por minuto")
    frecuencia_cardíaca: int = Field(..., gt=0, description="Frecuencia cardíaca en latidos por minuto")
    estado_de_animo: Optional[str] = Field(None, max_length=50, description="Estado de ánimo de la mascota")
    fecha_de_registro: Optional[datetime] = Field(default_factory=datetime.utcnow, description="Fecha y hora de la visita")
    recomendaciones: Optional[str] = Field(None, max_length=255, description="Recomendaciones médicas")

class VisitaCreate(VisitaBase):
    mascota_id: int = Field(..., description="ID de la mascota")
    id_profesional: int = Field(..., description="ID del veterinario")
    #historial_clinico_id: int = Field(..., description="ID del historial clínico")

class VisitaResponse(VisitaBase):
    id: int = Field(..., description="ID de la visita")
    mascota_id: int = Field(..., description="ID de la mascota")
    id_profesional: int = Field(..., description="ID del veterinario")
    historial_clinico_id: int = Field(..., description="ID del historial clínico")

    class Config:
        from_attributes = True

### 📌 ESQUEMA HISTORIAL CLÍNICO ###
class HistorialClinicoBase(BaseModel):
    mascota_id: int = Field(..., description="ID de la mascota asociada")

class HistorialClinicoCreate(HistorialClinicoBase):
    pass

class HistorialClinicoResponse(HistorialClinicoBase):
    id: int = Field(..., description="ID del historial clínico")
    visitas: List[VisitaResponse] = Field([], description="Lista de visitas asociadas")

    class Config:
        from_attributes = True

