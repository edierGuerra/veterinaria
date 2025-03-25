import { useEffect } from "react";

function GoogleMapComponent() {
    useEffect(() => {
        const iniciarMap = () => {
            const coord = { lat: 6.2760319, lng: -75.5814383 }; // Coordenadas de Medellín
            const map = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: coord,
            });
            new window.google.maps.Marker({
                position: coord,
                map: map,
            });
        };

        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`;
            script.async = true;
            document.body.appendChild(script);
            script.onload = iniciarMap;
        } else {
            iniciarMap();
        }
    }, []);

    return <div id="map" style={{ width: "230px", height: "180px", borderRadius: "10px" }}></div>;
}

export default GoogleMapComponent;
