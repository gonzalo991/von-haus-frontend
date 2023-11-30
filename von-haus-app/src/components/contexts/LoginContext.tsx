import React, { useState, createContext, ReactNode } from "react";

type LoginContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const LoginContext = createContext<LoginContextType | null>(null);

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [login, setLogin] = useState<boolean>(false);

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    );
};