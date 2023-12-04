import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../contexts/LoginContext';

/**
 * Componente funcional para gestionar la autenticación del usuario.
 * Proporciona una interfaz de usuario para iniciar sesión mediante un modal.
 */
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [login, setLogin] = useContext(LoginContext)!;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

    /**
     * Abre el modal de inicio de sesión.
     */
    const openModal = () => {
        setIsOpen(true);
    };

    /**
     * Cierra el modal de inicio de sesión.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    /**
     * Valida la contraseña ingresada.
     * @param inputPassword - Contraseña ingresada por el usuario.
     * @returns Verdadero si la contraseña es válida, falso de lo contrario.
     */
    const validatePassword = (inputPassword: string): boolean => {
        return inputPassword.length >= 6;
    };

    /**
     * Maneja cambios en el campo de entrada de nombre de usuario.
     * @param ev - Evento de cambio.
     */
    const handleChangeUsername = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(ev.target.value);
    };

    /**
     * Maneja cambios en el campo de entrada de contraseña y valida la contraseña.
     * @param ev - Evento de cambio.
     */
    const handleChangePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const inputPassword = ev.target.value;
        setPassword(inputPassword);
        setIsValidPassword(validatePassword(inputPassword));
    };

    /**
     * Maneja la presentación del formulario, enviando una solicitud de inicio de sesión al servidor
     * y actualizando el estado de autenticación del usuario.
     * @param ev - Evento de envío del formulario.
     */
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (isValidPassword) {
            try {
                const response = await axios.post('https://von-haus-data-backend.onrender.com/usuarios/login', {
                    username,
                    password,
                });

                const data = response.data;

                if (data && data.token && data.username) {
                    const { token, username } = data;

                    // Guardar los datos en localStorage
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username);

                    setLogin(true);
                    navigate('/admin');  // Navegamos al panel de administrador
                    setIsOpen(false); // Cerramos el modal

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }

            } catch (error) {
                alert('Ingreso denegado');
            }
        }
    };

    return (
        <>
            {/* Botón para abrir el modal de inicio de sesión */}
            <button
                onClick={openModal}
                className='button is-primary is-hoverable me-3'
            >
                Ingresar
            </button>
            <hr />

            {/* Modal de inicio de sesión */}
            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Ingreso de usuario</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {/* Formulario de inicio de sesión */}
                        <form onSubmit={handleSubmit}>
                            {/* Campo de nombre de usuario */}
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Username"
                                        name='username'
                                        id='username'
                                        value={username}
                                        onChange={handleChangeUsername}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            {/* Campo de contraseña */}
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input
                                        className="input"
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={handleChangePassword}
                                        required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            {/* Mensaje de error si la contraseña no es válida */}
                            {!isValidPassword && (
                                <p style={{ color: 'red' }}>La contraseña debe tener al menos 6 caracteres.</p>
                            )}
                            {/* Botón para enviar el formulario */}
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success" type='submit'>
                                        Iniciar Sesión
                                    </button>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Login;