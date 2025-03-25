import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/Veterinario/Opciones/Consultar/ConsultarMascota.css"
function ConsultarMascota() {
    const [mascotas, setMascotas] = useState([]);
    const [error, setError] = useState(""); // Se añade el estado para errores

    // Función para obtener los datos
    const fetchMascotas = async () => {
        try {
            const response = await axios.get("http://localhost:3000/pets/reads");
            setMascotas(response.data); // Guardar datos en el estado
        } catch (err) {
            console.error("Error al obtener mascotas:", err);
            setError("No se pudieron cargar los datos"); // Se actualiza el estado de error
        }
    };

    // useEffect para llamar a la API cuando el componente se monta
    useEffect(() => {
        fetchMascotas();
    }, []);

    return (
        <div className="containerMascotasBusqueda">
            <div className="containerMascotas">
                {/* <h3>MASCOTAS</h3> */}
                {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra error si existe */}
                {mascotas.map((mascota) => (
                    <div className="cardMascota" key={mascota.id}> {/* Se agrega la key única */}
                        <h3>{mascota.nombre}</h3>
                        <p>Id: {mascota.id}</p>
                        <p>Color: {mascota.color}</p>
                        <p>Especie: {mascota.especie}</p>
                        <p>Raza: {mascota.raza}</p>
                        <p>Id Dueño: {mascota.id_dueno}</p>
                        <p>Id Veterinario: {mascota.id_veterinario}</p>
                        {/* opciones de mascota */}
                            <ul className="opcCardMascota">
                                <li className="delete">Eliminar</li>
                                <li className="update">Actualizar</li>
                                <li className="visit">Realizar Visita</li>
                            </ul>


                    </div>
                ))}
            </div>
            <div className="containerBusquedaMascota">
                <h2>Buscar Mascota</h2>
                <label htmlFor="namePet">Mascota</label>
                <input id="namePet" type="text" placeholder="Ingresa el nombre"/>
                <label htmlFor="namePropietario">Propietario</label>
                <input id="namePropietario" type="text" placeholder="Ingresa el nombre"/>
                <button>Buscar</button>

            </div>
        </div>
    );
}

export default ConsultarMascota;
