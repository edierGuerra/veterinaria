//Archivo que se encargara de realizar la conexion con las APIS necesarias
import { useAuth } from "./Context/AuthProvider"; // ✅ Importamos el contexto
import homeveterinario from './Components/Apartado-Veterinario/HomeVeterinario'
import axios from 'axios'; //Libreria que permite realizar solicitudees HTTP
// Funcion que realiza peticiones a la api
export const sendDataRegister=async(correo,password1)=>{
    try{
        const response = await axios.post("http://localhost:3000/register",{
            username:correo,
            password:password1
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(response)//obtener respuesta de api
        if (response.data.message === "User created and validated successfully" ){
            alert("Has sido registrado exitosamente")
            alert("mira el token bro: " + response.data.token)
            const infoUser = response.data.userData;
            const infoPets = infoUser.pets[0];

            alert("Mira tus pinches datos "+ infoUser.name + " edad: " + infoUser.age + " Tienes un "+ infoPets.type + " y se llama " + infoPets.name);
        }
    }catch(error){
        console.log('Error: ',error);
    }
};
export const sendDataLogin= async (userName, password,setIsAuthenticated,navigate)=>{
    try{
        const response = await axios.post("http://localhost:3000/login",{
            username:userName,
            password:password
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(response)
        if(response.status ===200){
            alert("Veterinario Existente")
            console.log((response))
            // Almacenar token en localStorage
            localStorage.setItem("token",response.data.access_token);
            //Mandar true ya que se encuentra logueado
            setIsAuthenticated(true);
            console.log(response.data.userData)
            localStorage.setItem("userVeterinario", JSON.stringify(response.data.userData));  // Almacena como cadena JSON
            navigate(`/homeveterinario`);  // Usamos navigate para redirigir
        }else{
            alert("Veterinario no encontrado ")
        } 
    }catch(error){
        console.log('error',error);
    }
};
export const updateVeterinario = async(idVeterinario,names,lastNames,address,phone,professionalCard)=>{
    try{
        const response = await axios.put("http://localhost:3000/actualizarVeterinario",{
            id:idVeterinario,
            names:names,
            lastNames:lastNames,
            address: address,
            phone:phone,
            professionalCard:professionalCard
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(response.status ===200){
            alert("Datos actualizados Exitosamente");
            localStorage.setItem("userVeterinario", JSON.stringify(response.data.userData));
        }
        else{
            alert("ups, Ocurrio un error, Vuelve a intentarlo mas tarde");
        }
    }catch(error){
        console.log('error',error)
    }
};
export const sendDataMascota = async (idMascota,nameMascota,colorMascota,razaMascota,idVeterinario)=>{
    try{
        const responde = await axios.post("url",{
            idMascota:idMascota,
            nameMascota:nameMascota,
            colorMascota:colorMascota,
            razaMascota:razaMascota,
            idVeterinario:idVeterinario
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(responde.status=== 200){
            alert("Mascota creada exitosamente")
        }else{
            alert("Ups. Ha ocurrido un error inesperado")
        };
    }catch(error){
        console.log('error',error)
    }
};

export const sendDataPropietario = async(idPropietario, nombresPropietario, direccionPropietario, telefonoPropietario, correoPropietario
)=>{
    try{
        const response = await axios.post("url",{
            idPropietario:idPropietario, 
            nombresPropietario:nombresPropietario, 
            direccionPropietario:direccionPropietario, 
            telefonoPropietario:telefonoPropietario, 
            correoPropietario:correoPropietario
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(response.status === 200){
            alert("Propietario Creado Exitosamente")
        }else{
            alert("Ups! ha ocurrido un error")
        }
    }catch(error){
        console.log('error',error)

    }
};