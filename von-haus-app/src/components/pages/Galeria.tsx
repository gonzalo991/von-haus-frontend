import React, { useEffect, useState } from 'react';
import '../scss/Album.scss';
import Pagination from '../utilities/Paginacion';
import Slider from '../layout/Slider';
import { Gallery } from '../types/Types';
import axios from 'axios';

/**
 * Componente funcional React para la sección de Galería.
 * Muestra una galería de fotos con paginación y una presentación de diapositivas.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa la sección de Galería.
 */
const Galeria: React.FC = () => {

    // Estado local para almacenar los datos de la galería.
    const [galeria, setGaleria] = useState<Gallery[]>([]);

    // Estado local para el número de la página actual en la paginación.
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Datos de la paginación.
    const tarjetasPorPagina: number = 9;
    const totalDePaginas: number = Math.ceil(galeria.length / tarjetasPorPagina);

    // Calcula el índice inicial y final de las tarjetas a mostrar en la página actual.
    const startIndex: number = (currentPage - 1) * tarjetasPorPagina;
    const endIndex: number = (startIndex + tarjetasPorPagina) - 1;

    // Filtra las tarjetas a mostrar en la página actual.
    const articulosActuales = galeria.slice(startIndex, endIndex + 1);

    /**
     * Función para cambiar de página en la paginación.
     * @param {number} pageNumber - Número de la página a la que se desea ir.
     * @returns {void}
     */
    const handleGoToPage = (pageNumber: number): void => {
        setCurrentPage(pageNumber);
    };

    /**
     * Función para manejar el evento del botón "Anterior" en la paginación.
     * @returns {void}
     */
    const handlePreviousPage = (): void => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    /**
     * Función para manejar el evento del botón "Siguiente" en la paginación.
     * @returns {void}
     */
    const handleNextPage = (): void => {
        if (currentPage < totalDePaginas) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Efecto de carga de datos al montar el componente.
    useEffect(() => {
        // Endpoint de la API para obtener las tarjetas de la galería.
        const endpoint = "https://von-haus-data-backend.onrender.com/gallery/cards";

        // Función asíncrona para realizar la solicitud GET y actualizar el estado local.
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get<Gallery[]>(endpoint);
                const data = response.data;
                setGaleria(data);
            } catch (error) {
                window.alert(`Ocurrió un error al cargar los datos de la galería`);
            }
        };

        // Llama a la función fetchData.
        fetchData();
    }, []);

    // JSX que representa la estructura del componente Galeria.
    return (
        <>
            <Slider />
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light mt-5 mb-3" style={{ fontSize: "1.5rem", color: "#60bae7" }}>Galeria de Fotos Von Haus Lola Mora</h1>
                            <p className="lead text-muted">En esta sección vas a encontrar fotos de nuestros ejemplares, sus crias, exposiciones y concursos en los que nos presentamos regularmente, entre otras fotos.</p>
                        </div>
                    </div>
                </section>

                <div className="row mx-auto ms-3 me-2">
                    {
                        articulosActuales.reverse().map((gallery) => {
                            const { _id, titulo, image, descripcion, createdAt } = gallery;

                            return (
                                <div key={_id} className="card mt-5 mb-5 ms-4 me-1 col-4" style={{ width: 400, height: 550 }}>
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img
                                                className='mt-2'
                                                src={`data:image/jpeg;base64,${image}`}
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="card-content">

                                        <div className="media">
                                            <p className="title is-4">{titulo}</p>
                                        </div>

                                        <div className="content">
                                            <time className='mt-3 mb-3'>Fecha: {new Date(createdAt).toLocaleDateString()}</time>
                                            <p className='mt-3 mb-3'>{descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            )
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

export default Galeria;