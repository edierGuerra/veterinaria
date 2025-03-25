import React from 'react'
import OpcForm from '../Components/Login-Register/OpcForm'
import Carrusel from '../Components/Carrusel'
import "../styles/inicio.css"
import {useAuth} from '../Context/AuthProvider'// Importar useAuth para verificar si el usuario se encuentra logueado
import ftVeterinarios from '../assets/Home/veterinarios-ft.jpeg';
function Inicio() {
    const {isAuthenticated}= useAuth();
    return (
    <div className='container-home'>
        <div className='div-container-vet'>
            <div className='container-name-vet'>
                <h1>CJE Zootech</h1>
                <p className='description-vet'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore non adipisci beatae praesentium id dolorum quod in distinctio, maiores quibusdam. Illum velit, cumque unde a optio quidem est obcaecati recusandae inventore doloribus quasi! Amet quis quas at! Voluptatibus tempora ipsam, voluptates inventore perferendis dicta eligendi sit est, fuga asperiores fugit similique dolor, minus nobis voluptatem accusamus impedit obcaecati accusantium. Quae sunt neque nulla tempora omnis in accusamus recusandae, fuga voluptatem rerum consectetur, voluptatum explicabo aut dicta. Molestiae repudiandae minima error et explicabo molestias rerum dignissimos provident similique corrupti, veniam nulla. Accusamus animi sint dolores, suscipit, in totam tempore minima tempora harum voluptatibus voluptas facilis ad odio? Amet omnis atque accusantium ab odio. Nulla maxime consectetur ex cumque necessitatibus, beatae molestiae magnam, eum laboriosam consequatur deserunt, fugiat a porro nam nostrum.</p>
            </div>
            <div className='info-vet-img'>
                <img src={ftVeterinarios} alt="" />
                <p className='message'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi quae dignissimos totam, inventore accusamus, nam sit praesentium aperiam eius nisi laboriosam excepturi rerum non reprehenderit? Labore ipsum molestias dolorem!
                Atque porro quis at neque maiores, dolore itaque in, facilis vel, doloremque praesentium vitae sapiente reprehenderit officiis ullam eos obcaecati iure omnis aspernatur. Quae, ducimus qui at officiis architecto saepe!</p>

            </div>
        </div>
        <div className='container-carrusel-opc'>

            {<Carrusel/>}
            {/* !isAuthenticated &&(
                <OpcForm/>
                
            )  */}
        
        </div>
    
    </div>
    )
}

export default Inicio