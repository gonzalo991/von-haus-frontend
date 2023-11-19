import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from "../libs/quillformats";
import axios from "axios";
import { ArticleProps } from "../types/Types";

const EditButton: React.FC<ArticleProps> = ({ _id }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [texto, setTexto] = useState<string>("");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleEditorChange = (content: string) => {
        setTexto(content);
    };

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const target = ev.target as typeof ev.target & {
            titulo: { value: string };
            subtitulo: { value: string };
        };

        // Extrae los valores del formulario
        const titulo = target.titulo.value;
        const subtitulo = target.subtitulo.value;

        // Crea un objeto FormData y agrega los datos del formulario
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('subtitulo', subtitulo);
        formData.append('texto', texto);

        try {
            // Envía la solicitud POST al servidor con los datos del formulario
            const response = await axios.post(`https://von-haus-data-backend.onrender.com/articulos/editArticle/${_id}`, formData);

            // Registra en la consola la respuesta del servidor
            console.log(`Se enviaron los datos para editar un artículo: \n${response.data}`);
            window.alert("Se edito el articulo");
        } catch (error) {
            // Captura y registra cualquier error que ocurra durante la solicitud
            console.error(`Ocurrió un error al cargar el artículo: ${error}`);
            window.alert("No se pudo editar el articulo");
        } finally {
            // Registra en la consola y redirige a la página principal
            console.log(`Se envió la noticia para cargar`);
            handleToggle();
        }
    }

    return (
        <>
            <button
                className="btn btn-warning"
            >
                <MdModeEditOutline onClick={handleToggle} />
            </button>

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={handleToggle}></div>
                <div className="modal-card">
                    <div className="modal-card-head">
                        <p className="modal-card-title">Edición de Articulos</p>
                        <button className="delete" aria-label="close" onClick={handleToggle}></button>
                    </div>
                    <section className="modal-card-body">

                        <form className='m-auto w-75' onSubmit={handleSubmit}>
                            {/* Campos del formulario */}
                            <div className="mb-3">
                                <label className="form-label">Titulo</label>
                                <input type="text" className="form-control" placeholder="Título del Artículo" name='titulo' />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subtítulo</label>
                                <input type="text" className="form-control" placeholder="Subtítulo del Artículo" name='subtitulo' />
                            </div>

                            <div className='mb-3'>
                                {/* Editor de texto React Quill */}
                                <label className="form-label">Contenido:</label>
                                <ReactQuill
                                    onChange={handleEditorChange}
                                    value={texto}
                                    className='my-5' // Agregado un espacio inferior al editor
                                    modules={modules}
                                    formats={formats}
                                    style={{ height: '9rem' }} // Ajusta la altura según tus necesidades
                                />
                            </div>
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" type="submit">Guardar Cambios</button>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default EditButton;