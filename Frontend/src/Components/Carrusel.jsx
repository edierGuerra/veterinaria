import React from 'react'
import fotoPastor from '../assets/Carrusel/FotosPerros/foto_pastorAleman.jpg'
import fotoPitbull from '../assets/Carrusel/FotosPerros/foto_pitbull.jpg'
import fotoCriollo from '../assets/Carrusel/FotosPerros/foto_criollo.jpg'
import fotoVeterinaria from '../assets/Carrusel/FotosVeterinaria/veterinariaft.jpg'
import "../styles/Carrusel/Carrusel.css"

function Carrusel() {
    return (
        <>
            <h2 className='titulo'>Pets CJE</h2>
            <div className='container-carrusel'>
                <ul>
                    <li>
                        <img src={fotoPastor} alt="" />
                        <div className="texto">
                            <h2>Pastor Aleman</h2>
                            <p>El pastor alemán es un perro inteligente, leal y protector, ideal tanto para el trabajo como para la compañía. Su gran capacidad de aprendizaje lo hace destacar en tareas de rescate, seguridad y entrenamiento. Es un perro fuerte y ágil, pero también cariñoso con su familia, especialmente con los niños. Además, necesita ejercicio y estimulación mental para mantenerse feliz y saludable.</p>
                        </div>
                    </li>
                    <li>
                        <img src={fotoPitbull} alt="" />
                        <div className="texto">
                            <h2>Pitbull</h2>
                            <p>Origen de Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorem.</p>
                        </div>
                    </li>
                    <li>
                        <img src={fotoCriollo} alt="" />
                        <div className="texto">
                            <h2>Perros Criollos</h2>
                            <p>Origen de Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorem.</p>
                        </div>
                    </li>
                    <li>
                        <img src={fotoVeterinaria} alt="" />
                        <div className="texto">
                            <h2>Veterinaria C J E</h2>
                            <h3>Profesionales</h3>
                            <p>Ser veterinario es una profesión apasionante que combina ciencia, paciencia y dedicación. Permite cuidar la salud de los animales, prevenir enfermedades y mejorar su bienestar. Es un trabajo lleno de aprendizaje, desafíos y una conexión especial con cada especie.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>

    
    
    )
}

export default Carrusel