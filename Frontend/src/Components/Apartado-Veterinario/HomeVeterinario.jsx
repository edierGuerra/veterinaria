import { useSearchParams } from "react-router-dom"; // usar esto para extraer correctamente el prop enviado, pero no es seguro como para mandar tokens
import "../../styles/Veterinario/Home.css";
import ColorBadge from './Notificaciones';
import { FaUserPen } from "react-icons/fa6";
import { RiListSettingsLine } from "react-icons/ri";
import { useState } from "react";
import {updateVeterinario} from '../../apis';


function HomeVeterinario() {
    const user = JSON.parse(localStorage.getItem("user"));//Obteniendo la informacion del usuario
    const nameveterinario = user.username;
    //mostrar formulario (estado)
    const [mostrar, setMostrar]=useState(false)

    //Estados de los inputs
    const [names, setNames]=useState(user.nombres);
    const [lastNames, setLastNames]=useState(user.apellidos);
    const [address, setAddress]=useState(user.direccion);
    const [phone, setPhone]=useState(user.telefono);
    const [professionalCard, setProfessionalCard]=useState(user.tarjeta_profesional);
    
    //Funcion del forumario que llama la API
    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(names);
        console.log(lastNames);
        console.log(address);
        console.log(phone);
        console.log(professionalCard);
        updateVeterinario(names,lastNames,address,phone,professionalCard);
        alert('informacion actualizada correctamente');
        setMostrar(false);




    }

    return (
    <div className="container-home" >
        <div className="container-info" onClick={()=>{
        setMostrar(false);
    }}>
            <h1>Bienvenido Veterinario {nameveterinario}</h1>
            <p>Tarjeta Profesional</p>
            <ul>
                <li>###</li>
                <li>###</li>
                <li>###</li>
            </ul>
        </div>
        <div className="container-opciones">
            <h2>¿Qué deseas hacer hoy?</h2>
            <div className="container-desplegables">
                <details>
                    <summary className="desplegable-registrar">Registrar</summary>
                    <ul className="opciones-registrar">
                        <li>Registrar Mascota</li>
                        <li>Registrar Propietario</li>
                        <li>Registrar visita</li>
                    </ul>
                </details>
                <details>
                    <summary className="desplegable-consultar">Consultar</summary>
                    <ul className="opciones-consultar">
                        <li>Consultar Mascota</li>
                        <li>Consultar Mascotas</li>
                        <li>Consultar Propietario</li>
                    </ul>
                </details>
                <details>
                    <summary className="desplegable-actualizar">Actualizar</summary>
                    <ul className="opciones-actualizar">
                        <li>Actualizar Mascota</li>
                        <li>Actualizar Propietario</li>
                    </ul>
                </details>
            </div>
            <div className="content-Settings">
                <details>
                    <summary>{<RiListSettingsLine className="icon-settings"/>}</summary>
                    <div className="opc-settings">
                        <h3 className="notificacion"><a href="#">{<ColorBadge  />}</a></h3>
                        
                        <h3 onClick={()=>{
                            setMostrar(!mostrar);
                        }}><FaUserPen className="user-Settings"/></h3>
                    </div>
                    {mostrar &&(
                        
                        <form onSubmit={handleSubmit} className="form-update-veterinario">
                            <h2>Update Profile</h2>

                            <label htmlFor="username">Username</label>
                            <input id="username" className="input-register" type="text" value={names} readOnly onChange={(e)=>{
                                setNames(e.target.value);
                            }}/>


                            <label htmlFor="LastName">LastName</label>
                            <input id="LastName" className="input-register" type="text" value={lastNames} readOnly onChange={(e)=>{
                                setLastNames(e.target.value);
                            }}/>

                            <label htmlFor="Address">Address</label>
                            <input id="Address" className="input-register" type="text" value={address} onChange={(e)=>{
                                setAddress(e.target.value);
                            }}/>

                            <label htmlFor="Phone">Phone</label>
                            <input id="Phone" className="input-register" type="text" value={phone} onChange={(e)=>{
                                setPhone(e.target.value);
                            }}/>

                            
                            <label htmlFor="ProfessionalCard ">Professional card </label>
                            <input id="ProfessionalCard" className="input-register" type="text" value={professionalCard} onChange={(e)=>{
                                setProfessionalCard(e.target.value);
                            }}/>

                            <button className="btn-update">Update</button>
                        </form>
                        )
                    }

                </details>
            </div>

        </div>


        
    </div>
    )
}

export default HomeVeterinario