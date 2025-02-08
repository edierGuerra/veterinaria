import {useEffect,useState} from 'react';
import '../../../../styles/Veterinario/Opciones/Register/RegisterMascota.css'
import {sendDataMascota} from '../../../../apis';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPersonHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";  // Importa useNavigat

function RegistrarMascota() {
    const navigate = useNavigate();  // Usamos el hook para obtener la función de navegación
    const userVeterinario = JSON.parse(localStorage.getItem("userVeterinario")); //obteniendo informacion del veterinario
    const [nameMascota, setNameMascota]=useState("");
    const [colorMascota, setColorMascota]=useState("");
    const [especieMascota, setEspecieMascota]=useState("");
    const [razaMascota, setRazaMascota]=useState("");
    const [idPropietario, setIdPropietario]=useState("");
    const [idVeterinario, setIdVeterinario]=useState(userVeterinario.id);
    const handleSubmit =(e)=>{
        e.preventDefault();
        //Control de excepciones
        console.log(nameMascota)
        console.log(colorMascota)
        console.log(razaMascota)
        console.log(idPropietario)
        console.log(idVeterinario)
        sendDataMascota(nameMascota,colorMascota,especieMascota,razaMascota,idPropietario,idVeterinario,navigate);
        //EN caso tal de que el id del propietario no exista, mostraremos el siguiente aviso ---> "Al parecer ese propietario no existe, deseas registrar un propietario si no"
        //En caso de que diga que si, redirgir a register propietario
        //EN caso de que diga que no quedarse en register mascota hasta que ingrese un id de propietario correcto
    }
    return (
        <div className="container-form-register-pet">
            <form className='form-register-pet' onSubmit={handleSubmit}>
                <h2>Registrar Mascotas</h2>
                <div className="div-input-label-group">
                    <label className="label-register-pet" htmlFor="name">{<MdDriveFileRenameOutline />}</label>
                    <input className='input-register-pet' 
                    placeholder='Nombre' type="text" id="name" required onChange={(e)=>{
                        setNameMascota(e.target.value);
                    }}/>

                </div>
                <div className="div-input-label-group">
                    <label className="label-register-pet" 
                    htmlFor="especie">{<MdOutlinePets />}</label>
                    <input className='input-register-pet' 
                    placeholder='Especie' type="text" id="especie" required  onChange={(e)=>{
                        setEspecieMascota(e.target.value);
                    }}/>
                </div>
                <div className="div-input-label-group">
                    <label className="label-register-pet" 
                    htmlFor="raza">{<MdOutlinePets />}</label>
                    <input className='input-register-pet' 
                    placeholder='Raza' type="text" id="raza" required  onChange={(e)=>{
                        setRazaMascota(e.target.value);
                    }}/>
                </div>
                <div className="div-input-label-group">
                    <label className="label-register-pet" htmlFor="color">{<IoIosColorPalette />}</label> 
                    <input className='input-register-pet' 
                    placeholder='Color' type="text" id="color" required onChange={(e)=>{
                        setColorMascota(e.target.value);
                    }}/>
                </div>
                <div className="div-input-label-group">
                    <label className="label-register-pet" 
                    htmlFor="idpropietario">{<BsPersonHeart />}</label>
                    <input className='input-register-pet' 
                    placeholder='Id Propietario' type="text" id="idpropietario" pattern='[0-9]+' title='Por favor ingresar numeros.' required  onChange={(e)=>{
                        setIdPropietario(e.target.value);
                    }}/>
                </div>
                <div className="div-input-label-group">
                    <label className="label-register-pet" htmlFor="idveterinario">{<FaUserDoctor />}</label>
                    <input className='input-register-pet' type="text" id="idveterinario" readOnly value={userVeterinario.id} onChange={(e)=>{
                        setIdVeterinario(e.target.value);
                    }}/>
                </div>
                <button className="btn-register-pet">Register</button>

            </form>
        </div>
    )
}

export default RegistrarMascota