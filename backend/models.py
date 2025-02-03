from sqlalchemy.orm import declarative_base, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, Float, DateTime, ForeignKey
from datetime import datetime
from typing import List

Base = declarative_base()

### 📌 MODELO DUEÑO ###
class Dueno(Base):
    __tablename__ = "duenos"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False)
    nombres: Mapped[str] = mapped_column(String(100), nullable=False)
    apellidos: Mapped[str] = mapped_column(String(100), nullable=False)
    direccion: Mapped[str] = mapped_column(String(150), nullable=True)
    telefono: Mapped[str] = mapped_column(String(15), nullable=True)
    correo_electronico: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)

    # Relación con Mascotas (1 dueño puede tener muchas mascotas)
    mascotas = relationship("Mascota", back_populates="dueno")

### 📌 MODELO VETERINARIO ###
class Veterinario(Base):
    __tablename__ = "veterinarios"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False)
    username:Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    password:Mapped[str] = mapped_column(String(250), unique=True, nullable=False)
    nombres: Mapped[str] = mapped_column(String(100), nullable=False)
    apellidos: Mapped[str] = mapped_column(String(100), nullable=False)
    direccion: Mapped[str] = mapped_column(String(150), nullable=True)
    telefono: Mapped[str] = mapped_column(String(15), nullable=True)
    tarjeta_profesional: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)  # Identificación única

    # Relación con Mascotas (1 veterinario atiende muchas mascotas)
    mascotas = relationship("Mascota", back_populates="veterinario")

    # Relación con Visitas (1 veterinario registra muchas visitas)
    visitas = relationship("Visita", back_populates="veterinario")

    def registrar_visita(self, mascota_id, temperatura, peso, frecuencia_respiratoria, frecuencia_cardiaca, estado_animo, recomendaciones):
        """ Método para registrar una visita """
        nueva_visita = Visita(
            mascota_id=mascota_id,
            temperatura=temperatura,
            peso=peso,
            frecuencia_respiratoria=frecuencia_respiratoria,
            frecuencia_cardíaca=frecuencia_cardiaca,
            estado_de_animo=estado_animo,
            fecha_de_registro=datetime.utcnow(),
            id_profesional=self.id,
            recomendaciones=recomendaciones
        )
        return nueva_visita  # Esto luego se guardaría en la sesión de la DB.

### 📌 MODELO MASCOTA ###
class Mascota(Base):
    __tablename__ = "mascotas"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False)
    nombre: Mapped[str] = mapped_column(String(50), nullable=False)
    color: Mapped[str] = mapped_column(String(30), nullable=True)
    especie: Mapped[str] = mapped_column(String(50), nullable=False)  
    raza: Mapped[str] = mapped_column(String(50), nullable=True)  

    # Claves foráneas
    id_dueno: Mapped[int] = mapped_column(Integer, ForeignKey("duenos.id"), nullable=False)
    id_veterinario: Mapped[int] = mapped_column(Integer, ForeignKey("veterinarios.id"), nullable=True)

    # Relaciones
    dueno = relationship("Dueno", back_populates="mascotas")  # Relación con Dueño
    veterinario = relationship("Veterinario", back_populates="mascotas")  # Relación con Veterinario
    visitas:Mapped[List["Visita"]] = relationship(back_populates="mascota")  # Relación con Visitas

### 📌 MODELO VISITA ###
class Visita(Base):
    __tablename__ = "visitas"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False)
    temperatura: Mapped[float] = mapped_column(Float, nullable=False)
    peso: Mapped[float] = mapped_column(Float, nullable=False)
    frecuencia_respiratoria: Mapped[int] = mapped_column(Integer, nullable=False)
    frecuencia_cardíaca: Mapped[int] = mapped_column(Integer, nullable=False)
    estado_de_animo: Mapped[str] = mapped_column(String(50), nullable=True)
    fecha_de_registro: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    recomendaciones: Mapped[str] = mapped_column(String(255), nullable=True)

    # Claves foráneas
    mascota_id: Mapped[int] = mapped_column(Integer, ForeignKey("mascotas.id"), nullable=False)
    id_profesional: Mapped[int] = mapped_column(Integer, ForeignKey("veterinarios.id"), nullable=False)
    historial_clinico_id: Mapped[int] = mapped_column(Integer, ForeignKey("historiales_clinicos.id"), nullable=False)

    # Relaciones
    mascota = relationship("Mascota", back_populates="visitas")  # Relación con Mascota
    veterinario = relationship("Veterinario", back_populates="visitas")  # Relación con Veterinario
    historial_clinico = relationship("HistorialClinico", back_populates="visitas")  # Relación con Historial Clínico

### 📌 MODELO HISTORIAL CLÍNICO ###
class HistorialClinico(Base):
    __tablename__ = "historiales_clinicos"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False)

    # Clave foránea
    mascota_id: Mapped[int] = mapped_column(Integer, ForeignKey("mascotas.id"), nullable=False)

    # Relación con visitas
    visitas:Mapped[List["Visita"]] = relationship(back_populates="historial_clinico", cascade="all, delete-orphan")