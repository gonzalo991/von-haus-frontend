import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';
import { ArticleProps } from '../../types/Types';
import EditButton from '../../fragments/EditButton';
import '../../scss/Table.scss';
import { Article } from '../../types/Types';

const ArticlesTable: React.FC = () => {
    const [listado, setListado] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Article[]>('https://von-haus-data-backend.onrender.com/articulos/getArticles');
                const data = response.data;
                console.log('Respuesta del servidor:\n', data);
                setListado(data);
            } catch (error) {
                console.error(`Ocurrió un error al cargar los artículos: ${error}`);
            } finally {
                console.log('Se ha refrescado la página');
            }
        };

        fetchData();
    }, []);


    const handleDeleteArticle = async ({ _id }: ArticleProps) => {
        try {
            const response = await axios.delete(`https://von-haus-data-backend.onrender.com/deleteArticle/${_id}`);
            console.info(`Se borró el artículo con el id: ${_id}. \nRespuesta del servidor: ${response.data}`);
            window.alert('El artículo se borró');
        } catch (error) {
            console.error('Error al eliminar el artículo:', error);
            window.alert('No se pudo borrar el artículo');
        }
    };

    return (
        <>
            <h2 className='text-center listado-titulo admin-title'>Listado de Artículos</h2>
            <div className='table-container m-auto ms-5 mt-5 mb-2 me-2'>
                <table className='table is-hoverable is-stripped is-bordered mt-5 mb-5 ms-3 me-3 tabla-articulos'>
                    <thead>
                        <tr>
                            <th className='id_table'>Id del Artículo</th>
                            <th className='has-text-primary'>Titulo</th>
                            <th className='has-text-success'>Subtitulo</th>
                            <th className='has-text-warning'>Editar</th>
                            <th className='has-text-danger'>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listado.map((article) => (
                            <tr key={article._id}>
                                <td>{article._id}</td>
                                <td>{article.titulo}</td>
                                <td>{article.subtitulo}</td>
                                <td>
                                    <EditButton _id={article._id}/>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteArticle({ _id: article._id })}
                                        className='btn btn-danger'
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ArticlesTable;