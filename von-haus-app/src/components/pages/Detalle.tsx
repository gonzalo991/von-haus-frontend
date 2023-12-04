import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../types/Types';
import { Link, useLocation } from 'react-router-dom';

const Detalle: React.FC = () => {
    const location = useLocation();
    let query = new URLSearchParams(location.search);
    let _id = query.get('id_articulo');
    const [articulo, setArticulo] = useState<Article>();

    useEffect(() => {
        const endpoint = `https://von-haus-data-backend.onrender.com/articulos/${_id}`;
        const fetchData = async () => {
            await axios.get(endpoint).then((response) => {
                const data = response.data;
                setArticulo(data);
            }).catch((err) => {
                console.error(`Ocurrió un error al cargar los detalles del articulo: ${err}`);
            })
        }

        fetchData();
    }, [_id]);


    return (
        <>
            {articulo ? (
                <section className='text-center mt-6'>
                    <article className='mt-5'>
                        <h1 className='display-4 fw-bold'>{articulo.titulo}</h1>
                        <p className='container text-center mt-2 mb-3'>
                            <small className='noticia_hour'>{new Date(articulo.createdAt).toLocaleDateString()}</small> - {articulo.subtitulo}
                        </p>
                        <img
                            className='img-fluid mt-3 mb-3'
                            alt={`imagen de la noticia ${articulo.titulo.substring(0, 100)}`}
                            src={`data:image/jpeg;base64,${articulo.image}`}
                        />
                    </article>

                    <div dangerouslySetInnerHTML={{ __html: articulo.texto }} />

                    <Link to='/blog' className='button is-link mt-5 mb-5'>
                        Volver
                    </Link>
                </section>
            ) : (
                <div className='container text-center'>
                    <h2 className='mt-5'>Cargando...</h2>
                    <Link to='/blog' className='button is-link mt-5'>
                        Volver
                    </Link>
                </div>
            )}
        </>
    )
}

export default Detalle;
