import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthProvider'
//Funcion que se encarga de ejecutar las acciones que se deben de realizar segun el estado anterior

export const RequireAuth = ({ children }) => {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    return children;
};
