import React, { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

type LoginContextType = {
    username: string;
    token: string;
    setLogin: Dispatch<SetStateAction<{ username: string; token: string }>>;
};

export const LoginContext = createContext<LoginContextType | null>(null);

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [login, setLogin] = useState<{ username: string; token: string }>({ username: '', token: '' });

    return (
        <LoginContext.Provider value={{ ...login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
};