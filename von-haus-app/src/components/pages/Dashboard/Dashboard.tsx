import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgAdd from '../../img/agregararticulo.jfif';
import '../../scss/Home.scss';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token)
            navigate("/");
    }, []);

    return (
        <>
            <h1 className='text-center px-auto dashboard-title'>Panel de Administrador</h1>

            <div className="container contenedor mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="card col-md-6 col-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgAdd} className="card-img-top" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/publicar" className="button is-primary">Publicar un Artículo</Link>
                        </div>
                    </div>

                    <div className="card col-md-6 col-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgAdd} className="card-img-top" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/listar" className="button is-warning">Listado de Artículos</Link>
                        </div>
                    </div>

                    <div className="card col-md-6 col-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgAdd} className="card-img-top" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/galeria" className="button is-success">Agregar en Galeria</Link>
                        </div>
                    </div>

                    <div className="card col-md-6 col-12 tarjetas mb-3" style={{ border: "none" }}>
                        <img src={imgAdd} className="card-img-top" alt="agregar imagen" />
                        <div className="card-body text-center">
                            <Link to="/admin/eliminar" className="button is-danger">Eliminar Contenido</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Dashboard;