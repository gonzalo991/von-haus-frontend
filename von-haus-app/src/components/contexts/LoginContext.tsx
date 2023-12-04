import React, { useState, createContext, ReactNode } from "react";

/**
 * Tipo para el contexto de login.
 * Es un array que contiene un booleano y una función para actualizar el booleano.
 */
type LoginContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

/**
 * Contexto de Login.
 * 
 * Este contexto proporciona información sobre el estado de inicio de sesión en la aplicación.
 * 
 * @context
 * @example
 * // Uso en otro componente
 * import { useContext } from 'react';
 * import { LoginContext } from './LoginContext';
 * // ...
 * const [isLoggedIn, setLoggedIn] = useContext(LoginContext);
 */
export const LoginContext = createContext<LoginContextType | null>(null);

/**
 * Propiedades para el componente LoginProvider.
 */
interface LoginProviderProps {
    children: ReactNode;
}

/**
 * Proveedor de Login.
 * 
 * Este componente provee el contexto de login a sus componentes hijos.
 * 
 * @component
 * @example
 *  Uso en otro componente
 * import { LoginProvider } from './LoginProvider';
 * 
 * <LoginProvider>
 * Componentes hijos aqui
 * </LoginProvider >
 * 
 * @param { LoginProviderProps } props - Propiedades del componente LoginProvider.
 * @returns { JSX.Element } El componente LoginProvider que provee el contexto de login.
 */

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    // Estado que indica si el usuario está autenticado
    const [login, setLogin] = useState<boolean>(false);

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    );
};