import React, { useEffect, useState } from 'react';
import '../scss/Blog.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Article } from '../types/Types';
import Pagination from '../utilities/Paginacion';

/**
 * Componente funcional que representa la página principal del blog.
 * Muestra una lista paginada de artículos con información resumida.
 */
const Blog: React.FC = () => {
    // Estado local que almacena la lista de artículos.
    const [article, setArticle] = useState<Article[]>([]);

    // Estado local que almacena el número de la página actual.
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Datos de la paginación
    const articulosPorPagina: number = 8;
    const totalDePaginas: number = Math.ceil(article.length / articulosPorPagina);
    const startIndex: number = (currentPage - 1) * articulosPorPagina;
    const endIndex: number = (startIndex + articulosPorPagina) - 1;
    const articulosActuales = article.slice(startIndex, endIndex + 1);

    // Función para cambiar de página
    const handleGoToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Funciones para manejar eventos de los botones "Anterior" y "Siguiente".
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalDePaginas) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Efecto que carga los artículos al montar el componente.
    useEffect(() => {
        (async () => {
            const endpoint = 'https://von-haus-data-backend.onrender.com/articulos/getArticles';
            try {
                const response = await axios.get<Article[]>(endpoint);
                const data = response.data;
                setArticle(data);
            } catch (error) {
                alert("No se pudo cargar los datos");
            }
        })();
    }, []);

    // Renderiza la interfaz de la página principal del blog.
    return (
        <>
            <main className="container mt-5">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark blog-img">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">Aquí encontrarás articulos y consejos sobre Pastores Alemanes</h1>
                        <p className="lead my-3">Hemos creado este blog para ayudar a nuestros clientes y amigos a recordar las consideraciones y cuidados básicos a tener en cuenta con su Pastor Aleman.</p>
                    </div>
                </div>

                <div className="row mb-2">
                    {
                        articulosActuales.map(articlePops => {
                            const { _id, titulo, subtitulo, texto, image, createdAt } = articlePops;
                            const dateString = new Date(createdAt).toLocaleDateString();

                            return (
                                <div className="col-md-6" key={_id}>
                                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                                        <div className="col p-4 d-flex flex-column position-static">
                                            <strong className="d-inline-block mb-2 text-primary">{titulo}</strong>
                                            <div className="mb-2 mt-1 text-muted">Fecha: {dateString}</div>
                                            <h3 className="mb-1">{subtitulo.substring(0, 200) + "..."}</h3>
                                            <div className='card-text' dangerouslySetInnerHTML={{ __html: texto.substring(0, 150) + "..." }} />
                                            <Link className='button is-link' to={`/detalle?id_articulo=${articlePops._id}`}>Leer +</Link>
                                        </div>

                                        <div className="col-auto d-none d-lg-block">
                                            <img className='bd-placeholder-img' style={{ width: 200, height: 250 }}
                                                src={`data:image/jpeg;base64,${image}`}
                                            />
                                        </div>

                                    </div>

                                </div>
                            );
                        })
                    }
                </div>

            </main>

            <Pagination totalDePaginas={totalDePaginas}
                currentPage={currentPage} handleGoToPage={handleGoToPage}
                handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} />
        </>
    )
}

export default Blog;