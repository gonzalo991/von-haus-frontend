import React, { useState, createContext, ReactNode } from "react";
import { LoginProviderProps } from "../types/Types";

type LoginContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [login, setLogin] = useState<string>('');

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {children}
        </LoginContext.Provider>
    );
};