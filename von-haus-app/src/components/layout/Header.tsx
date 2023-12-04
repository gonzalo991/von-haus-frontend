import React, { useEffect, useState } from 'react';
import logo from '../img/logovonhaus.png';
import { Link } from 'react-router-dom';
import LoggedIn from '../fragments/LoggedIn';
import '../scss/Header.scss';

/**
 * Componente funcional que representa la barra de navegación superior (header) de la aplicación.
 * 
 * Este componente incluye la navegación principal, enlaces a secciones clave y un área de inicio de sesión.
 *
 * @component
 * @example
 * // Uso en otro componente
 * import Header from './Header';
 * // ...
 * <Header />
 *
 * @returns {JSX.Element} El elemento JSX que representa la barra de navegación superior.
 */

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState('Inicio'); // Inicialmente establece "Inicio" como activo
    const [isLogin, setIsLogin] = useState<boolean>(false);

    // Obtenemos el token usando el hook useEffect
    useEffect(() => {
        const token = localStorage.getItem('token'); // obtenemos el token desde el localstorage
        if (token) { // Evaluamos si existe
            setIsLogin(true); // Seteamos el estado booleano a true
        }
    }, []);

    /**
     * Maneja el clic en un enlace y actualiza el estado del enlace activo.
     * @param {string} linkName - El nombre del enlace que se hizo clic.
     * @returns {void}
     */
    const handleLinkClick = (linkName: string): void => {
        setActiveLink(linkName);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="90" height="32" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className={`nav-item ${activeLink === 'Inicio' ? 'active' : ''}`}>
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={() => handleLinkClick('Inicio')}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className={`nav-item ${activeLink === 'Galeria' ? 'active' : ''}`}>
                            <Link
                                className="nav-link"
                                to="/galeria"
                                onClick={() => handleLinkClick('Galeria')}
                            >
                                Galeria
                            </Link>
                        </li>
                        <li className={`nav-item ${activeLink === 'Blog' ? 'active' : ''}`}>
                            <Link
                                className="nav-link"
                                to="/blog"
                                onClick={() => handleLinkClick('Blog')}
                            >
                                Blog
                            </Link>
                        </li>
                        {
                            isLogin ?
                                <li className={`nav-item ${activeLink === 'Panel' ? 'active' : ''}`}>
                                    <Link
                                        className="nav-link-panel button is-active is-hoverable is-primary"
                                        to="/admin"
                                        onClick={() => handleLinkClick('Panel')}
                                    >
                                        Panel
                                    </Link>
                                </li>
                                :
                                <p></p>
                        }
                    </ul>
                    <LoggedIn />
                </div>
            </div>
        </nav>
    );
};

export default Header;