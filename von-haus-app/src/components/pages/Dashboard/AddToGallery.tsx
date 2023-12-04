import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/**
 * Componente funcional que maneja la presentación del formulario y envía los datos al servidor para agregar una imagen a la galería.
 * @component
 * @returns {JSX.Element} - Elemento JSX que representa el formulario de carga de imágenes.
 */
const AddToGallery: React.FC = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    /**
     * Maneja el evento de envío del formulario, recopila los datos del formulario y realiza una solicitud POST al servidor.
     * @param {React.FormEvent<HTMLFormElement>} ev - Evento de envío del formulario.
     */
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // Accede a los elementos del formulario de manera segura usando TypeScript
        const target = ev.target as typeof ev.target & {
            titulo: { value: string };
            image: { files: FileList };
            descripcion: { value: string };
        };

        // Extrae los valores del formulario
        const titulo = target.titulo.value;
        const image = target.image.files && target.image.files[0];
        const descripcion = target.descripcion.value;

        // Verifica si se seleccionó una imagen
        if (!image) {
            window.alert('Debes seleccionar una imagen');
            return;
        }

        // Crea un objeto FormData y agrega los datos del formulario
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('image', image);
        formData.append('descripcion', descripcion);

        if (token) {
            try {
                // Envía la solicitud POST al servidor con los datos del formulario
                // Tengo que crear el controlador en el backend antes de probar
                await axios.post(
                    'https://von-haus-data-backend.onrender.com/gallery/addCard',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}`, // Agrega el token al encabezado
                        },
                    }
                );

                alert("Imagen cargada correctamente!");
                setTimeout(() => {
                    navigate("/galeria");
                }, 1000);

            } catch (error) {
                // Captura y registra cualquier error que ocurra durante la solicitud
                window.alert(`Ocurrió un error al cargar el artículo`);
            }
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3 text-center admin-title">Publicar en Galería</h1>

            <div className="container ms-5 mt-5">
                <form className="mt-5 m-auto w-75 add-form col-md-8 col-sm-12" onSubmit={handleSubmit}>
                    {/* Campos del formulario */}
                    <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" placeholder="Título de la imagen" name="titulo" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Imagen:</label>
                        <input className="form-control" type="file" id="formFile" name="image" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <input type="text" className="form-control" placeholder="Descripción de la imagen" name="descripcion" />
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        {/* Botón para enviar el formulario */}
                        <button className="btn btn-success mt-6" type="submit">
                            Publicar Imagen
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToGallery;
