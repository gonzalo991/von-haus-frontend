import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../types/Types';
import { Link } from 'react-router-dom';

const Detalle: React.FC = () => {
    let query = new URLSearchParams(window.location.search);
    let id_articulo = query.get('id_articulo');
    const [articulo, setArticulo] = useState<Article>();

    useEffect(() => {
        const endpoint = `https://von-haus-data-backend.onrender.com/articulos/${id_articulo}`;
        const fetchData = async () => {
            axios.get(endpoint).then((response) => {
                const data = response.data;
                setArticulo(data);
                console.info(`Articulo con el id: ${data._id} cargado!`);
            }).catch((err) => {
                console.error(`Ocurrió un error al cargar los detalles del articulo: ${err}`);
            })
        }

        fetchData();
    }, []);


    return (
        <>
            {
                articulo ?
                    <section className='text-center mt-6'>

                        <article className='mt-5'>
                            <h1 >{articulo.titulo}</h1>
                            <p className='container text-center mt-2 mb-3'><small className='noticia_hour'>{new Date(articulo.createdAt).toLocaleDateString()}</small> - {articulo.subtitulo}</p>
                            <img className='nmt-3 mb-3' src={`https://von-haus-data-backend.onrender.com/uploads/${articulo.image}`} alt={`imagen de la noticia ${articulo.titulo.substring(0, 100)}`} />
                        </article>

                        <article className='container text-center'>
                            <p className='mt-4 mb-5'>{articulo.texto}</p>
                        </article>

                        <Link to='/' className='button is-link mt-5 mb-5'>Volver</Link>

                    </section> :
                    <div className='container text-center'>
                        <h2 className='mt-5'>Cargando...</h2>
                        <Link to='/' className='button is-link mt-5'>Volver</Link>
                    </div>
            }
        </>
    )
}

export default Detalle;
