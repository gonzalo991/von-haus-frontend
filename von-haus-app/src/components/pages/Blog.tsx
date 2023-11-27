import React, { useEffect, useState } from 'react';
import '../scss/Blog.scss';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { Article } from '../types/Types';

const Blog: React.FC = () => {
    const [article, setArticle] = useState<Article[]>([]);

    useEffect(() => {
        (async () => {
            const endpoint = 'https://von-haus-data-backend.onrender.com/articulos/getArticles';
            await axios.get<Article[]>(endpoint).then(response => {
                const data = response.data;
                setArticle(data);
            }).catch((err) => {
                console.error(`Ocurrio un error al cargar los articulos: ${err}`)
                alert("No se pudo cargar los datos");
            })

        })();
    }, []);

    console.log(article);

    return (
        <>
            <main className="container">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div className="row mb-2">
                    {
                        article.map(articlePops => {
                            const { _id, titulo, subtitulo, texto, image, createdAt } = articlePops;
                            const imgUrl = `https://von-haus-data-backend.onrender.com/uploads/${image}`;
                            const dateString = new Date(createdAt).toLocaleDateString();

                            return (
                                <div className="col-md-6" key={_id}>
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">{titulo}</strong>
                                            <h3 className="mb-0">{subtitulo}</h3>
                                            <div className="mb-1 mt-1 text-muted">Fecha: {dateString}</div>
                                            <p className="card-text mb-auto">{texto.substring(0, 150) + "..."}</p>
                                            <Link className='button is-link' to={`/detalle?id_articulo=${articlePops._id}`}>Leer +</Link>
                                        </div>

                                        <div className="col-auto d-none d-lg-block">
                                            <img className='bd-placeholder-img' style={{ width: 200, height: 250 }} src={imgUrl} />
                                        </div>

                                    </div>

                                </div>
                            );
                        })
                    }
                </div>

            </main>

            <Pagination />
        </>
    )
}

export default Blog;