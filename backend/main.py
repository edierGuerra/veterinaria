from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import create_db
from api.veterinario import router as veterinario_router
from api.propietario import router as dueño_router
from api.mascota import router as mascota_router
from api.visitas import router as visita_router

app = FastAPI()


# Lista de orígenes permitidos (React suele correr en localhost:3000 durante el desarrollo)
origins = [
    "http://localhost:5174",  # Origen del frontend en desarrollo
]

# Agregar el middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Lista de orígenes permitidos
    allow_credentials=True,  # Permitir cookies y credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permitir todos los headers
)

@app.get("/")
def root():
    return "Hola, FastAPI"


if __name__ == "__main__":
    create_db()

app.include_router(veterinario_router)
app.include_router(dueño_router)
app.include_router(mascota_router)
app.include_router(visita_router)