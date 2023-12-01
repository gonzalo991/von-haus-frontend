import React, { useEffect, useState } from 'react';
import '../scss/Album.scss';
import Pagination from '../utilities/Paginacion';
import Slider from '../layout/Slider';
import { Gallery } from '../types/Types';
import axios from 'axios';

const Galeria: React.FC = () => {

    function arrayBufferToBase64(buffer: ArrayBuffer): string {
        const binary = new Uint8Array(buffer);
        const bytes: any = [];
        binary.forEach((byte) => {
            bytes.push(String.fromCharCode(byte));
        });
        return btoa(bytes.join(''));
    }

    const [galeria, setGaleria] = useState<Gallery[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    //Datos de la páginación
    const tarjetasPorPagina: number = 8;
    const totalDePaginas: number = Math.ceil(galeria.length / tarjetasPorPagina);

    // Calcula el índice inicial y final de las noticias a mostrar en la página actual
    const startIndex: number = (currentPage - 1) * tarjetasPorPagina;
    const endIndex: number = (startIndex + tarjetasPorPagina) - 1;

    const articulosActuales = galeria.slice(startIndex, endIndex + 1);

    //Función para cambiar de página
    const handleGoToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Función para manejar el evento del botón "Anterior"
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Función para manejar el evento del botón "Siguiente"
    const handleNextPage = () => {
        if (currentPage < totalDePaginas) {
            setCurrentPage(currentPage + 1);
        }
    };


    useEffect(() => {
        const endpoint = "https://von-haus-data-backend.onrender.com/gallery/cards";
        const fetchData = async () => {
            await axios.get<Gallery[]>(endpoint).then((response) => {
                const data = response.data;
                setGaleria(data);
                console.info(`Datos de la galeria cargados: ${data}`);
            }).catch((error) => {
                console.error(`Ocurrió un error al cargar los datos de la galeria: \n ${error}`);
            })
        }

        fetchData();
    }, []);

    console.log(galeria)
    // titulo Imagen y Descripcion
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

                <div className="row mx-auto">
                    {
                        galeria.map((gallery) => {
                            const { _id, titulo, image, descripcion, createdAt } = gallery;

                            return (
                                <div key={_id} className="card mt-5 mb-5 ms-4 col-4" style={{ width: 400, height: 550 }}>
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