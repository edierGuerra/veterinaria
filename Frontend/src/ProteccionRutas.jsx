import { Navigate } from 'react-router-dom';
import {useAuth} from './Context/AuthProvider';

export const RequireAuth = ({ children }) => {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    return children;
};
