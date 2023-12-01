import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const LoggedIn: React.FC = () => {
    const [adminData, setAdminData] = useState<any[]>([]);
    const [isToken, setIsToken] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const endpoint = "https://von-haus-data-backend.onrender.com/usuarios/panel";
        const token = localStorage.getItem('token');

        if (token) {
            setIsToken(true);
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAdminData(response.data);
            } catch (error) {
                console.error(`Ocurrió un error al cargar los datos de administrador: ${error}`);
            }
        };

        if (isToken)
            fetchData();

    }, [isToken]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        alert("¡Cerraste Sesión!");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    return (
        <>
            {
                isToken ?
                    adminData.map((data) => {
                        const { name, surname } = data
                        return (
                            <>
                                <div>
                                    <h3 className='text-primary ms-1 me-2'>Bienvenido {name} {surname}</h3>
                                </div>
                                <button onClick={handleLogout} className='button is-danger ms-2'>Salir</button>
                            </>
                        )
                    })
                    :
                    <Login />
            }
        </>
    )
}

export default LoggedIn;