import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgAdd from '../../img/escribir.jpg';
import imgListas from '../../img/listas.jpg';
import imgGaleria from '../../img/galeria.jpg';
import '../../scss/Home.scss';

/**
 * Componente funcional que representa el panel de administrador.
 * Redirige al inicio si no hay un token de autenticación.
 */
const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    // Verifica la autenticación al cargar el componente
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token)
            navigate("/");
    }, []);

    return (
        <>
            <h1 className='text-center px-auto dashboard-title'>Panel de Administrador</h1>

            <div className="container contenedor mt-5 mx-auto">
                <div className="row d-flex justify-content-center me-2">
                    {/* Sección: Publicar un Artículo */}
                    <div className="card col-lg-6 col-md-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgAdd} className="card-img-top img-fluid" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/publicar" className="button is-primary">Publicar un Artículo</Link>
                        </div>
                    </div>

                    {/* Sección: Listado de Artículos */}
                    <div className="card col-lg-6 col-md-12 tarjetas mb-3" style={{ border: "none;" }}>
                        <img src={imgListas} className="card-img-top img-fluid" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/listar" className="button is-warning">Listado de Artículos</Link>
                        </div>
                    </div>

                    {/* Sección: Agregar en Galería */}
                    <div className="card col-lg-6 col-md-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgGaleria} className="card-img-top img-fluid" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/galeria" className="button is-success">Agregar en Galería</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;