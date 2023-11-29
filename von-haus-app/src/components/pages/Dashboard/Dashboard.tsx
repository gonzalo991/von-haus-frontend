import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { token, logout } = useContext(LoginContext)!;
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        console.info(`Sesion terminada: ${token}`);
        navigate('/');
        alert("¡Cerraste sesión, hasta pronto!");
    }

    return (
        <>
            <h1>Bienvenido admin</h1>
            <button className='button is-danger mt-5 mb-5'
                onClick={handleLogout}>Salir</button>
        </>
    );
}

export default Dashboard;