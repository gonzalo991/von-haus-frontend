import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToGallery: React.FC = () => {

    // Maneja la presentación del formulario y envía los datos al servidor
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // Accede a los elementos del formulario de manera segura usando TypeScript
        const target = ev.target as typeof ev.target & {
            titulo: { value: string };
            image: { files: FileList };
        };

        // Extrae los valores del formulario
        const titulo = target.titulo.value;
        const image = target.image.files && target.image.files[0];

        // Verifica si se seleccionó una imagen
        if (!image) {
            console.error('Debes seleccionar una imagen');
            return;
        }

        // Crea un objeto FormData y agrega los datos del formulario
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('image', image);

        try {
            // Envía la solicitud POST al servidor con los datos del formulario

            // Tengo que crear el controlador en el backend antes de probar
            const response = await axios.post('https://von-haus-data-backend.onrender.com/articulos/addToGallery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Registra en la consola la respuesta del servidor
            console.log(`Se enviaron los datos para crear un artículo: \n${response.data}`);
        } catch (error) {
            // Captura y registra cualquier error que ocurra durante la solicitud
            console.error(`Ocurrió un error al cargar el artículo: ${error}`);
        } finally {
            // Registra en la consola y redirige a la página principal
            console.log(`Se envió la noticia para cargar`);
        }
    };

    return (
        <div className="container mt-3">
            <h1 className='mb-3 text-center admin-title'>Publicar un Artículo</h1>

            <div className='container ms-5 mt-5'>
                <form className='mt-5 m-auto w-75 add-form' onSubmit={handleSubmit}>
                    {/* Campos del formulario */}
                    <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input type="text" className="form-control" placeholder="Título de la imagen" name='titulo' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Imagen:</label>
                        <input className="form-control" type="file" id="formFile" name='image' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descipcion</label>
                        <input type="text" className="form-control" placeholder="Título de la imagen" name='titulo' />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                        {/* Botón para enviar el formulario */}
                        <button className='btn btn-success mt-6' type="submit">Publicar Imagen</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToGallery;
