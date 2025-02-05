import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import "../../styles/Veterinario/Home.css";
import ColorBadge from './Notificaciones';
import { FaUserPen } from "react-icons/fa6";
import { RiListSettingsLine } from "react-icons/ri";
import { useState,useEffect } from "react";
import {updateVeterinario} from '../../apis';


function HomeVeterinario() {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
        });
    },[]);
    const user = JSON.parse(localStorage.getItem("userVeterinario"));//Obteniendo la informacion del usuario
    const nameveterinario = user.username;
    const idVeterinario =user.id;
    //mostrar formulario (estado)
    const [mostrarFormulario, setMostrarFormulario]=useState(false);
    //Estados para ocultar y mostrar opciones
    const[mostrarRegistrar, setmostrarRegistrar]=useState(false);
    const[mostrarConsultar, setmostrarConsultar]=useState(false);
    const[mostrarActualizar, setmostrarActualizar]=useState(false);
    //Estados de los inputs
    const [names, setNames]=useState(user.nombres);
    const [lastNames, setLastNames]=useState(user.apellidos);
    const [address, setAddress]=useState(user.direccion);
    const [phone, setPhone]=useState(user.telefono);
    const [professionalCard, setProfessionalCard]=useState(user.tarjeta_profesional);
    //Funcion del formulario que llama la API
    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(names);
        console.log(lastNames);
        console.log(address);
        console.log(phone);
        console.log(professionalCard);
        updateVeterinario(idVeterinario,names,lastNames,address,phone,professionalCard);
        //setMostrarFormulario(false);
    }
    return (
    <div className="container-home">
        <div className="container-info" onClick={()=>{
        setMostrarFormulario(false);
    }}>
            <h1> Bienvenido Veterinario {nameveterinario}</h1>
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
                    <summary onClick={()=>{
                        setmostrarRegistrar(true);
                        setmostrarConsultar(false);
                        setmostrarActualizar(false);
                    }} className="desplegable-registrar">Registrar</summary>
                    {mostrarRegistrar &&(
                        <ul className="opciones-registrar">
                            <li><a href="/registrarmascota">Registrar Mascota</a></li>
                            <li><a href="/registrarpropietario">Registrar Propietario</a></li>
                            <li>Registrar visita</li>
                        </ul>
                    )}
                </details>
                <details>
                    <summary onClick={()=>{
                        setmostrarConsultar(true);
                        setmostrarRegistrar(false);
                        setmostrarActualizar(false);
                    }} className="desplegable-consultar">Consultar</summary>
                    {mostrarConsultar &&(
                        <ul className="opciones-consultar">
                            <li>Consultar Mascota</li>
                            <li>Consultar Mascotas</li>
                            <li>Consultar Propietario</li>
                        </ul>
                    )}
                </details>
                <details>
                    <summary onClick={()=>{
                        setmostrarActualizar(true);
                        setmostrarConsultar(false);
                        setmostrarRegistrar(false);
                    }}  className="desplegable-actualizar">Actualizar</summary>
                    {mostrarActualizar &&(
                        <ul className="opciones-actualizar">
                            <li>Actualizar Mascota</li>
                            <li>Actualizar Propietario</li>
                        </ul>
                    )}
                </details>
            </div>
            <div data-aos="zoom-out" className="content-Settings">
                <details>
                    <summary>{<RiListSettingsLine className="icon-settings"/>}</summary>
                    <div className="opc-settings">
                        <h3 className="notificacion"><a href="#">{<ColorBadge  />}</a></h3>
                        <h3 onClick={()=>{
                            setMostrarFormulario(!mostrarFormulario);
                        }}><FaUserPen className="user-Settings"/></h3>
                    </div>
                    {mostrarFormulario &&(
                        <form data-aos="zoom-in-down" onSubmit={handleSubmit} className="form-update-veterinario">
                            <h2>Update Profile</h2>
                            <label htmlFor="username">Name</label>
                            <input id="username" className="input-update inputs-prohividos" type="text" value={names} readOnly onChange={(e)=>{
                                setNames(e.target.value);
                            }}/>

                            <label htmlFor="LastName">LastName</label>
                            <input id="LastName" className="input-update inputs-prohividos" type="text" value={lastNames} readOnly onChange={(e)=>{
                                setLastNames(e.target.value);
                            }}/>

                            <label htmlFor="Address">Address</label>
                            <input id="Address" className="input-update" type="text" value={address} onChange={(e)=>{
                                setAddress(e.target.value);
                            }}/>

                            <label htmlFor="Phone">Phone</label>
                            <input id="Phone" className="input-update" type="text" value={phone} onChange={(e)=>{
                                setPhone(e.target.value);
                            }}/>
                            
                            <label htmlFor="ProfessionalCard ">Professional card </label>
                            <input id="ProfessionalCard" className="input-update" type="text" value={professionalCard} onChange={(e)=>{
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