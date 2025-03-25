import "../styles/Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMapComponent from "../../APIS/GoogleMapsComponent"
function Footer() {
    return (
        <>
            <footer>
                <div className="info proyect">
                    <h2>Mascota Feliz {<MdPets className="icon-pets"/>}</h2>
                    <p>Copyright © 2025 © Cje-Tecnology inc. Todos los derechos reservados </p>
                </div>
                <div className="info authors">
                    <h2>Authors</h2>
                    <ul >
                        <li><a href="https://github.com/junior-0731" target="_blank">Junior Herrera</a></li>
                        <li><a href="https://github.com/CamiloAndresV" target="_blank">Camilo Ospina</a></li>
                        <li><a href="https://github.com/edierGuerra" target="_blank">Edier Guerra</a></li>
                    </ul>
                </div>
                <div className="info redes">
                    <h2>Redes sociales</h2>
                    <ul>
                        <li className="link tiktok"><a href="#">{<FaTiktok className="icon tiktok" />}</a></li>
                        <li className="link github"><a href="https://github.com/edierGuerra/veterinaria" target="_blank">{<GrGithub className="icon github"/>}</a></li>
                        <li className="link facebook"><a href="#">{<FaFacebookF className="icon facebook"/>}</a></li>
                        <li className="link whatsaap"><a href="#">{<FaWhatsapp  className="icon whatsaap"/>}</a></li>
                    </ul>
                    <div className="div-ubicacion">
                        <GoogleMapComponent/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer