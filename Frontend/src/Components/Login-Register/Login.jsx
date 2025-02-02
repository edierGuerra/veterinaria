import '../../styles/Login-Register/Login.css'
import {useState,useEffect} from 'react'
import {sendDataLogin} from '../../apis'
import {useAuth} from '../../Context/AuthProvider'
import { useNavigate } from "react-router-dom";  // Importa useNavigat

function Login() {
    const navigate = useNavigate();  // Usamos el hook para obtener la función de navegación
    //estado de autenticacion
    const { setIsAuthenticated }=useAuth()

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        //LLAMAR API LOGIN
        sendDataLogin(userName,password,setIsAuthenticated,navigate);

    }

    return (

        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' id='userName' required onChange={(e)=>{
                            setUserName(e.target.value)

                        }} />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='password' id='password' required onChange={(e)=>{
                            setPassword(e.target.value)
                        }}  />
                        <i className="bx bxs-lock-alt"></i>
                    </div>

                    <button type='submit' className='button'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account <a href="/register">Register</a></p>
                    </div>

                </form>

            </div>

        
        </div>
    )
}

export default Login