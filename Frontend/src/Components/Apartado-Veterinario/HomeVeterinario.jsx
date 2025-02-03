import { useSearchParams } from "react-router-dom"; // usar esto para extraer correctamente el prop enviado, pero no es seguro como para mandar tokens

function HomeVeterinario() {
    const [params]=useSearchParams();
    const nameveterinario = params.get("nameveterinario");
    return (
    <div className="container-home">
        <div className="container-info">
            <h1>Bienvenido Veterinario {nameveterinario}</h1>
            <p>Tarjeta Profesional</p>
            <ul>
                <li>###</li>
                <li>###</li>
                <li>###</li>
            </ul>
        </div>
        <div className="container-opciones">
            <h2>¿Que deseas hacer hoy?</h2>
            <h3>Registrar Mascota</h3>
            <h3>Registrar Propietario</h3>
            <h3>Realizar visita</h3>
        </div>


        
    </div>
    )
}

export default HomeVeterinario