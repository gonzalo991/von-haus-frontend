import React, { ContextType, useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { setLogin } = useContext(LoginContext)!;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const validatePassword = (inputPassword: string): boolean => {
        return inputPassword.length >= 6;
    };

    const handleChangeUsername = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(ev.target.value);
    };

    const handleChangePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const inputPassword = ev.target.value;
        setPassword(inputPassword);
        setIsValidPassword(validatePassword(inputPassword));
    };

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (isValidPassword) {
            try {
                const response = await axios.post('https://von-haus-data-backend.onrender.com/usuarios/login', {
                    username,
                    password,
                });

                const data = response.data;

                if (data) {
                    const { username, token } = data;
                    setLogin({ username, token });
                    navigate('/admin');
                } else {
                    console.error(`No se encontró el usuario: ${data}`);
                }
            } catch (error) {
                console.error(`Hubo un error al iniciar sesión: ${error}`);
                alert(`Ingreso denegado!`);
            }
        }
    };

    return (
        <>
            <button
                onClick={openModal}
                className='button is-primary is-hoverable me-3'
            >
                Ingresar
            </button>
            <hr />

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Ingreso de usuario</p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Username"
                                        name='username' id='username'
                                        value={username} onChange={handleChangeUsername} required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password"
                                        id="password" value={password}
                                        onChange={handleChangePassword} required
                                    />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            {!isValidPassword && (
                                <p style={{ color: 'red' }}>La contraseña debe tener al menos 6 caracteres.</p>
                            )}
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success" type='submit'>
                                        Iniciar Sesion
                                    </button>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Login;
