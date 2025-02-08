import '../styles/NavBar.css'
import { GoHome } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { SiFurrynetwork } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

//Importar esto para agregar avatares al navbar
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useAuth} from '../Context/AuthProvider'// Importar useAuth para verificar si el usuario se encuentra logueado
//se importaran los avatares
import catAvatar from '../assets/Avatars/cat.jpg'
import chiguaguaAvatar from '../assets/Avatars/dog_chiguagua.jpg'
import dogVetAvatar from '../assets/Avatars/dog_Vet.jpg'
import logoCentral from '../assets/Navbar/logo_central_nav.png'
import {Link, Navigate} from 'react-router-dom' //Esto sirve para agregar los apartados de la pagina
function Navbar() {
    const {isAuthenticated,setIsAuthenticated} =useAuth();

    const handleLogout = () => {
        setIsAuthenticated(false); // Marcar usuario como no autenticado
        localStorage.removeItem("token"); // Eliminar token almacenado
        alert("token eliminado")
    };

    return <nav>
        <img src={logoCentral} alt="Logo Veterinaria" className='logocentral'/>
        <Stack direction="row" spacing={2} className='container-avatars'>
            <Avatar alt="Remy Sharp" src={catAvatar}  className='avatar'/>
            <Avatar alt="Travis Howard" src={chiguaguaAvatar}  className='avatar'/>
            <Avatar alt="Cindy Baker" src={dogVetAvatar} className='avatar'/>
        </Stack>
        <div className="container-opc">
            <Link to={"/"}>
                <span title='Home'>
                    {<GoHome  className='opc home'/>}
                </span>
            </Link>

                
            {isAuthenticated &&(
                <Link to={'/homeveterinario'}>
                    <span title='Home Veterinario'>
                        {<CgProfile className='opc home-veterinario' />}
                    </span>
                </Link>
            )}
            
            <Link to={"/about"} >
                <span title='About'>
                    <GrContactInfo className='opc about'/>
                </span>
            
            </Link>
            {isAuthenticated ? ( // en caso de estar autenticado
                <Link onClick={handleLogout} >
                    <span title='Logout'>
                        <AiOutlineLogout className='opc logout'/>
                    </span>
                </Link>
            ) : (
                <Link to="/login">
                    <span title='Login'>
                        <AiOutlineLogin className='opc login' />
                    </span>
                </Link>
            )}
            
        </div>
    </nav>
        
    };
    
        


export default Navbar