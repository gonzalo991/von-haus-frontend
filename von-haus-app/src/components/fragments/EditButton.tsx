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
    const token = localStorage.getItem('token');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleEditorChange = (content: string) => {
        setTexto(content);
    };

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // Accede a los elementos del formulario de manera segura usando TypeScript
        const target = ev.target as typeof ev.target & {
            titulo: { value: string };
            subtitulo: { value: string };
            image: { files: FileList };
        };

        // Extrae los valores del formulario
        const titulo = target.titulo.value;
        const subtitulo = target.subtitulo.value;
        const image = target.image.files && target.image.files[0];

        // Verifica si se seleccionó una imagen
        if (!image) {
            console.error('Debes seleccionar una imagen');
            alert("Debes seleccionar una imagen");
            return;
        }

        // Crea un objeto FormData y agrega los datos del formulario
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('subtitulo', subtitulo);
        formData.append('texto', texto);
        formData.append('image', image);

        if (token && formData) {
            try {
                // Envía la solicitud POST al servidor con los datos del formulario
                const response = await axios.post(`https://von-haus-data-backend.onrender.com/articulos/editArticle/${_id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    }
                });
                // Registra en la consola la respuesta del servidor
                console.log(`Se enviaron los datos para crear un artículo: \n${response.data}`);
            } catch (error) {
                // Devuelve un mensaje de error y estado 500
                console.error(`An error occurred during update: ${error}`);
                alert("Error al actualizar el articulo");
            }
            finally {
                // Registra en la consola y redirige a la página principal
             //   console.log(`Se envió la noticia para cargar`);
              //  alert("Se publicó el articulo correctamente");
                /*
                 setTimeout(() => {
                     window.location.reload(); 
                 }, 1000) */
            }
        } else {
            console.log("Valores vacíos");
        }
    }

    return (
        <>
            <button
                className="btn btn-warning"
                onClick={handleToggle} // Mueve el onClick aquí para evitar errores al renderizar
            >
                <MdModeEditOutline />
            </button>

            <div className={`modal ${isOpen ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={handleToggle}></div>
                <div className="modal-card">
                    <div className="modal-card-head">
                        <p className="modal-card-title">Edición de Artículos</p>
                        <button className="delete" aria-label="close" onClick={handleToggle}></button>
                    </div>
                    <section className="modal-card-body">

                        <form className='mt-5 m-auto w-75 add-form' onSubmit={handleSubmit}>
                            {/* Campos del formulario */}
                            <div className="mb-3">
                                <label className="form-label">Titulo</label>
                                <input type="text" className="form-control" placeholder="Título del Artículo" name='titulo' />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Subtítulo</label>
                                <input type="text" className="form-control" placeholder="Subtítulo del Artículo" name='subtitulo' />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Imagen:</label>
                                <input className="form-control" type="file" id="formFile" name='image' />
                            </div>

                            <div className='mb-3'>
                                {/* Editor de texto React Quill */}
                                <label className="form-label">Contenido:</label>
                                <ReactQuill
                                    onChange={handleEditorChange}
                                    value={texto}
                                    className='mb-5' // Agregado un espacio inferior al editor
                                    modules={modules}
                                    formats={formats}
                                    style={{ height: '9rem' }} // Ajusta la altura según tus necesidades
                                />
                            </div>

                            <div className='d-flex justify-content-center mt-3'>
                                {/* Botón para enviar el formulario */}
                                <button className='button is-warning mt-6' type="submit">Editar Artículo</button>
                            </div>
                        </form>

                    </section>
                </div>
            </div>
        </>
    );
};

export default EditButton;