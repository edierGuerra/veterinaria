import { useState } from 'react'
//Se usara react-router-dom para la manipulacion de rutas y reutilizacion del Navbar
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavBar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
//OPCIONES
import Inicio from './Components/Inicio'
import About from './Components/About'
import Register from './Components/Login-Register/Register'
import Login from './Components/Login-Register/Login'
// FUNCIONES PROTECCION DE RUTAS
import { RequireAuth } from "./ProteccionRutas";
//OPCIONES VETERINARIO
import HomeVeterinario from './Components/Apartado-Veterinario/HomeVeterinario'
import RegistrarMascota from './Components/Apartado-Veterinario/OpcionesVeterinario/Registrar/RegistrarMascota'
import RegistrarPropietario from './Components/Apartado-Veterinario/OpcionesVeterinario/Registrar/RegistrarPropietario'


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/homeveterinario' element={<RequireAuth><HomeVeterinario/></RequireAuth>}/>
          <Route path='/registrarmascota' element={<RequireAuth><RegistrarMascota/></RequireAuth>}/>
          <Route path='/registrarpropietario' element={<RequireAuth><RegistrarPropietario/></RequireAuth>}/>



        </Routes>
      </div>

      <Footer/>
    </Router>



    
    </>
  )
}

export default App
