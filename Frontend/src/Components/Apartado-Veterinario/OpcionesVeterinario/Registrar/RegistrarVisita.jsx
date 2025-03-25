import '../../../../styles/Veterinario/Opciones/Register/RegisterVisita.css'
import React from 'react'
import {useState,useEffect} from 'react';
function RegistrarVisita() {

    const [idPropietario, setIdPropietario]=useState("");


    const handleSubmit=(e)=>{

    }

    return (
    <div className='container-form-register-visit'>
        <form onSubmit={handleSubmit} className='form-register-visit'>
            <h2>Visit Register</h2>

            <div className="div-input-label-group">
                <label className="label-register-visit" htmlFor="idMascota"></label>
                <input className='input-register-visit' placeholder='' type="text" id="idMascota" pattern='[0-9]+' title='Por favor ingresar numeros.' required onChange={(e)=>{
                    setIdPropietario(e.target.value);
                }}/>

            </div>
        </form>
    </div>
    )
}

export default RegistrarVisita