import React, { useState } from 'react';
import logo from '../img/logovonhaus.png';
import { Link, ScrollRestoration } from 'react-router-dom';
import '../scss/Header.scss';

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState('Inicio'); // Inicialmente establece "Inicio" como activo

    const handleLinkClick = (linkName: any) => {
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
                    </ul>
                    <button className="btn btn-outline-success me-3" type="button">Admin</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;