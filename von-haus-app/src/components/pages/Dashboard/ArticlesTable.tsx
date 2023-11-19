import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";
import '../../scss/Table.scss';

interface Article {
    _id: number;
    titulo: string;
    subtitulo: string;
}

const ArticlesTable: React.FC = () => {
    const [listado, setListado] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Article[]>("https://von-haus-data-backend.onrender.com/articulos/getArticles");
                const data = response.data;
                console.log(`Respuesta del servidor:\n`, data);
                setListado(data);
            } catch (error) {
                console.error(`Ocurrió un error al cargar los artículos: ${error}`);
            } finally {
                console.log("Se ha refrescado la página");
            }
        };

        fetchData();
    }, []);

    const handleEditArticle = ()=> {

    }
    
    const handleDeleteArticle = ()=> {

    }

    return (
        <>
            <h2 className='m-auto text-center mt-3 listado-titulo'>Listado de Artículos</h2>
            <div className="container m-auto mt-5 mb-2">
                <table className="table mt-5 mb-2 ms-3 tabla-articulos">
                    <thead>
                        <tr>
                            <th>Id del Artículo</th>
                            <th>Titulo</th>
                            <th>Subtitulo</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listado.map((article) => (
                            <tr key={article._id}>
                                <td>{article._id}</td>
                                <td>{article.titulo}</td>
                                <td>{article.subtitulo}</td>
                                <td>
                                    <button
                                        onClick={handleEditArticle}
                                        className='btn btn-warning'>
                                        <MdModeEditOutline />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={handleDeleteArticle}
                                        className='btn btn-danger'>
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