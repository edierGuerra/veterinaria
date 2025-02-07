import {useState,useEffect} from 'react';
import '../../../../styles/Veterinario/Opciones/Register/RegisterPropietario.css'
import {sendDataPropietario} from '../../../../apis';
function RegistrarPropietario() {
    const [idPropietario, setIdPropietario]=useState("");
    const [nombresPropietario, setNombresPropietario]=useState("");
    const [direccionPropietario,setDireccionPropietario]=useState("");
    const [telefonoPropietario,setTelefonoPropietario]=useState("");
    const [correoPropietario,setCorreoPropietario]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(idPropietario)
        console.log(nombresPropietario)
        console.log(direccionPropietario)
        console.log(telefonoPropietario)
        console.log(correoPropietario)
        sendDataPropietario(idPropietario, nombresPropietario, direccionPropietario, telefonoPropietario, correoPropietario);
        //llamar la api para enviar datos del propietario
         //si el registro es exitoso, debemos redirigirlo al register de mascota, con el id del propietario puesto por defecto
    }


    return (
    <div className='container-form-register-owner'>
        <form onSubmit={handleSubmit} className='form-register-owner'>
            <h2>Register Owner</h2>
            
            <div className="div-input-label-group">
                <label className="label-register-owner" htmlFor="id"></label>
                <input className='input-register-owner' placeholder='Id Propietario' type="text" id="id" pattern='[0-9]+' title='Por favor ingresar numeros.' required onChange={(e)=>{
                    setIdPropietario(e.target.value);
                }}/>

            </div>
            <div className="div-input-label-group">
                <label className="label-register-owner" htmlFor="names"></label>
                <input className='input-register-owner' 
                    placeholder='Nombres' type="text" id="names" required onChange={(e)=>{
                    setNombresPropietario(e.target.value);
                }}/>

            </div>
            <div className="div-input-label-group">
                <label className="label-register-owner" htmlFor="address"></label> 
                <input className='input-register-owner' 
                    placeholder='Direccion' type="text" id="address" required onChange={(e)=>{
                    setDireccionPropietario(e.target.value);
                }}/>
            </div>

            <div className="div-input-label-group">
                <label className="label-register-owner" 
                    htmlFor="phone"></label>
                <input className='input-register-owner' 
                    placeholder='Telefono' type="text" id="phone"  pattern='[0-9]+' title='Por favor ingresar numeros.' required  onChange={(e)=>{
                    setTelefonoPropietario(e.target.value);
                }}/>
            </div>
            <div className="div-input-label-group">
                <label className="label-register-owner" 
                    htmlFor="correo"></label>
                <input className='input-register-owner' 
                    placeholder='Correo Electronico' type="email" id="correo" required  onChange={(e)=>{
                    setCorreoPropietario(e.target.value);
                }}/>
            </div>
            <button className="btn-register-owner">Register</button>
        </form>

    </div>
    )
}

export default RegistrarPropietario