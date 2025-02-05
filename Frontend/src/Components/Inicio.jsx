import React from 'react'
import OpcForm from '../Components/Login-Register/OpcForm'
import "../styles/inicio.css"
import {useAuth} from '../Context/AuthProvider'// Importar useAuth para verificar si el usuario se encuentra logueado

function Inicio() {
    const {isAuthenticated}= useAuth();
    return (
    <div className='div-container'>
        <h1>Inicio</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore non adipisci beatae praesentium id dolorum quod in distinctio, maiores quibusdam. Illum velit, cumque unde a optio quidem est obcaecati recusandae inventore doloribus quasi! Amet quis quas at! Voluptatibus tempora ipsam, voluptates inventore perferendis dicta eligendi sit est, fuga asperiores fugit similique dolor, minus nobis voluptatem accusamus impedit obcaecati accusantium. Quae sunt neque nulla tempora omnis in accusamus recusandae, fuga voluptatem rerum consectetur, voluptatum explicabo aut dicta. Molestiae repudiandae minima error et explicabo molestias rerum dignissimos provident similique corrupti, veniam nulla. Accusamus animi sint dolores, suscipit, in totam tempore minima tempora harum voluptatibus voluptas facilis ad odio? Amet omnis atque accusantium ab odio. Nulla maxime consectetur ex cumque necessitatibus, beatae molestiae magnam, eum laboriosam consequatur deserunt, fugiat a porro nam nostrum.</p>
        {!isAuthenticated &&(
            <OpcForm/>
            
        ) }
    </div>
    )
}

export default Inicio