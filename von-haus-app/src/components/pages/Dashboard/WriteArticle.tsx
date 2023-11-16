import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WriteArticle: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const target = ev.target as typeof ev.target & {
            titulo: { value: string };
            subtitulo: { value: string };
            texto: { value: string };
            image: { files: FileList };
        };

        const titulo = target.titulo.value;
        const subtitulo = target.subtitulo.value;
        const texto = target.texto.value;
        const image = target.image.files && target.image.files[0];

        if (!image) {
            console.error('Debes seleccionar una imagen');
            return;
        }

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('subtitulo', subtitulo);
        formData.append('texto', texto);
        formData.append('image', image);

        try {
            const response = await axios.post('URL_DE_TU_API', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(`Se enviaron los datos para crear un artículo: \n${response.data}`);
        } catch (error) {
            console.error(`Ocurrió un error al cargar el artículo: ${error}`);
        } finally {
            console.log(`Se envió la noticia para cargar`);
            navigate('/'); // Redirigir a la página principal o a donde sea necesario
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" name="titulo" />
            </label>
            <br />
            <label>
                Subtítulo:
                <input type="text" name="subtitulo" />
            </label>
            <br />
            <label>
                Texto:
                <textarea name="texto" />
            </label>
            <br />
            <label>
                Imagen:
                <input type="file" name="image" accept="image/*" />
            </label>
            <br />
            <button type="submit">Crear Artículo</button>
        </form>
    );
}

export default WriteArticle;