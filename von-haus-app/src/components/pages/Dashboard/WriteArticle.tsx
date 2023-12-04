// Importa las bibliotecas y componentes necesarios
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules, formats } from '../../libs/quillformats';
import '../../scss/Form.scss';

/**
 * Componente funcional React que representa la interfaz para la creación y publicación de artículos.
 * Utiliza React Quill como editor de texto enriquecido para el contenido del artículo.
 * @component
 */
const WriteArticle: React.FC = () => {
    /**
     * Estado para almacenar el contenido del artículo en formato HTML.
     * @type {string}
     */
    const [texto, setTexto] = useState<string>("");

    /**
     * Hook de enrutamiento de React Router.
     * @type {Function}
     */
    const navigate = useNavigate();

    /**
     * Token de autenticación almacenado en el localStorage.
     * @type {?string}
     */
    const token = localStorage.getItem('token');

    /**
     * Maneja el cambio de contenido en el editor React Quill.
     * @param {string} content - Contenido HTML del editor.
     * @returns {void}
     */
    const handleEditorChange = (content: string) => {
        setTexto(content);
    };

    /**
     * Maneja la presentación del formulario y envía los datos del artículo al servidor.
     * @param {React.FormEvent<HTMLFormElement>} ev - Evento de formulario.
     * @returns {Promise<void>}
     */
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
            alert("Debes seleccionar una imagen");
            return;
        }

        // Crea un objeto FormData y agrega los datos del formulario
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('subtitulo', subtitulo);
        formData.append('texto', texto);
        formData.append('image', image);

        if (token) {
            try {
                // Envía la solicitud POST al servidor con los datos del formulario
                const response = await axios.post('https://von-haus-data-backend.onrender.com/articulos/addArticle', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    },
                });

                // Registra en la consola la respuesta del servidor
                console.log(`Se enviaron los datos para crear un artículo: \n${response.data}`);
            } catch (error) {
                // Captura y registra cualquier error que ocurra durante la solicitud
                alert("Ocurrió un error al cargar el articulo");
            } finally {
                // Registra en la consola y redirige a la página principal
                alert("Se publicó el articulo correctamente");
                setTimeout(() => {
                    navigate('/blog'); // Redirigir a la página principal o a donde sea necesario
                }, 1000)
            }
        }
    };

    /**
     * Renderiza el formulario para crear un artículo.
     * @returns {JSX.Element}
     */
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mx-auto mb-3 text-center px-auto admin-title">Publicar un Artículo</h1>

            <div className="container me-3">
                <form className="mt-5 m-auto w-75 add-form col-md-8 col-sm-12" onSubmit={handleSubmit}>
                    {/* Campos del formulario */}
                    <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" placeholder="Título del Artículo" name="titulo" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Subtítulo</label>
                        <input type="text" className="form-control" placeholder="Subtítulo del Artículo" name="subtitulo" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Imagen:</label>
                        <input className="form-control" type="file" id="formFile" name="image" />
                    </div>

                    <div className="mb-3">
                        {/* Editor de texto React Quill */}
                        <label className="form-label">Contenido:</label>
                        <ReactQuill
                            onChange={handleEditorChange}
                            value={texto}
                            className="mb-3" // Eliminado espacio inferior
                            modules={modules}
                            formats={formats}
                            style={{ minHeight: '150px' }} // Establecer minHeight en lugar de altura fija
                        />
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        {/* Botón para enviar el formulario */}
                        <button className="btn btn-success" type="submit">
                            Publicar Artículo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Exporta el componente para su uso en otras partes de la aplicación
export default WriteArticle;