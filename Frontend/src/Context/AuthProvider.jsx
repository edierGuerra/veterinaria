import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Intentar recuperar el estado de autenticación del localStorage
        return localStorage.getItem("isAuthenticated") === "true";
    });

    useEffect(() => {
        // Guardar en localStorage cada vez que cambie el estado de autenticación
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
