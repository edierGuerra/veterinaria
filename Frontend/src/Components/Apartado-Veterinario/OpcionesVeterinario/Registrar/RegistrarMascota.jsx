import {useEffect,useState} from 'react';
import '../../../../styles/Veterinario/Opciones/Register/RegisterMascota.css'
import {sendDataMascota} from '../../../../apis';

function RegistrarMascota() {
    const userVeterinario = JSON.parse(localStorage.getItem("userVeterinario")); //obteniendo informacion del veterinario
    const [idMascota, setIdMascota]=useState("");
    const [nameMascota, setNameMascota]=useState("");
    const [colorMascota, setColorMascota]=useState("");
    const [razaMascota, setRazaMascota]=useState("");
    const [idVeterinario, setIdVeterinario]=useState(userVeterinario.id);
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(idMascota)
        console.log(nameMascota)
        console.log(colorMascota)
        console.log(razaMascota)
        console.log(idVeterinario)
        sendDataMascota(idMascota,nameMascota,colorMascota,razaMascota,idVeterinario);
    }
    return (
        <div className="container-form-register-pet">
            <form className='form-register-pet' onSubmit={handleSubmit}>
                <h2>Registrar Mascotas</h2>
                <label className="label-register-pet" htmlFor="id">Id</label>
                <input type="text" id="id" required onChange={(e)=>{
                    setIdMascota(e.target.value);

                }}/>
                <label className="label-register-pet" htmlFor="name">Name</label>
                <input className='input-register-pet' type="text" id="name" required onChange={(e)=>{
                    setNameMascota(e.target.value);
                }}/>
                <label className="label-register-pet" htmlFor="color">Color</label> 
                <input className='input-register-pet' type="text" id="color" required onChange={(e)=>{
                    setColorMascota(e.target.value);
                }}/>
                <label className="label-register-pet" htmlFor="raza">Raza</label>
                <input className='input-register-pet' type="text" id="raza" required  onChange={(e)=>{
                    setRazaMascota(e.target.value);
                }}/>
                <label className="label-register-pet" htmlFor="idveterinario">Veterinario</label>
                <input className='input-register-pet' type="text" id="idveterinario" readOnly value={userVeterinario.id} onChange={(e)=>{
                    setIdVeterinario(e.target.value);
                }}/>
                <button className="btn-register-pet">Register</button>

            </form>
        </div>
    )
}

export default RegistrarMascota