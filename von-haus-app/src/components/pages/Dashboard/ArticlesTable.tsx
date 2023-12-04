import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';
import { ArticleProps } from '../../types/Types';
import EditButton from '../../fragments/EditButton';
import '../../scss/Table.scss';
import { Article } from '../../types/Types';

const ArticlesTable: React.FC = () => {
    const [listado, setListado] = useState<Article[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Article[]>('https://von-haus-data-backend.onrender.com/articulos/getArticles');
                const data = response.data;
                setListado(data);
            } catch (error) {
                window.alert(`Ocurrió un error al cargar los artículos`);
            }
        };

        fetchData();
    }, []);


    const handleDeleteArticle = async ({ _id }: ArticleProps) => {
        try {
            const response = await axios.delete(
                `https://von-haus-data-backend.onrender.com/articulos/deleteArticle/${_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                window.alert('El artículo se borró');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            window.alert('Error no se pudo borrar el artículo');
        }
    };

    return (
        <>
            <h2 className='text-center listado-titulo admin-title'>Listado de Artículos</h2>
            <div className='table-container m-auto ms-3 mt-5 mb-5 me-3'>
                <div className='table-responsive'>
                    <table className='table is-hoverable is-stripped is-bordered tabla-articulos'>
                        <thead>
                            <tr>
                                <th className='id_table'>Id</th>
                                <th className='has-text-primary'>Título</th>
                                <th className='has-text-success d-none d-md-table-cell'>Subtítulo</th>
                                <th className='has-text-warning'>Editar</th>
                                <th className='has-text-danger'>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listado.map((article) => (
                                <tr key={article._id}>
                                    <td>{article._id}</td>
                                    <td>{article.titulo}</td>
                                    <td className='has-text-success d-none d-md-table-cell'>{article.subtitulo}</td>
                                    <td>
                                        <EditButton _id={article._id} />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este artículo?');
                                                if (confirmDelete) {
                                                    handleDeleteArticle({ _id: article._id });
                                                }
                                            }}
                                            className='btn btn-danger btn-sm' // Ajusta el tamaño del botón
                                        >
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ArticlesTable;