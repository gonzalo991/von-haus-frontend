import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import '../scss/Home.scss';

/**
 * Componente `LoggedIn` que gestiona la visualización del contenido para un usuario autenticado.
 * Muestra un mensaje de bienvenida y un botón de salida para cerrar sesión.
 * Utiliza datos de administrador recuperados del servidor mediante una solicitud GET.
 */
const LoggedIn: React.FC = () => {
    // Estado para almacenar los datos del administrador
    const [adminData, setAdminData] = useState<any[]>([]);
    // Estado para indicar si existe un token de autenticación
    const [isToken, setIsToken] = useState<boolean>(false);
    // Función de navegación proporcionada por `useNavigate` para redirigir a otras páginas
    const navigate = useNavigate();

    // Efecto secundario al montar el componente
    useEffect(() => {
        // Endpoint para obtener los datos del administrador
        const endpoint = "https://von-haus-data-backend.onrender.com/usuarios/panel";
        // Recupera el token de autenticación del almacenamiento local
        const token = localStorage.getItem('token');

        // Verifica si hay un token
        if (token) {
            setIsToken(true);
        }

        // Función asincrónica para realizar la solicitud GET al servidor
        const fetchData = async () => {
            try {
                // Realiza la solicitud GET con el token de autenticación en los encabezados
                const response = await axios.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Almacena los datos del administrador en el estado
                setAdminData(response.data);
            } catch (error) {
                // Muestra una alerta en caso de error
                window.alert(`Ocurrió un error al cargar los datos de administrador`);
            }
        };

        // Si hay un token, realiza la solicitud para obtener los datos del administrador
        if (isToken)
            fetchData();

    }, [isToken]);

    // Maneja el cierre de sesión al limpiar el almacenamiento local, redirigir al usuario y recargar la página
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
                        const { _id, name, surname } = data;
                        return (
                            <>
                                <div key={_id}>
                                    <h3 className='login-title ms-1 me-2'>Bienvenido {name} {surname}</h3>
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