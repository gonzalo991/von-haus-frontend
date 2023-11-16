import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteArticle: React.FC = () => {
    const navigate = useNavigate();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
    ];


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
        <div className="container">
            <form className='mt-6' onSubmit={handleSubmit}>
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

                <div className="mb-3">
                    <label className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="image" name='image' />
                </div>

                <div>
                    <ReactQuill
                        modules={modules}
                        formats={formats}
                    />
                </div>

                <button type="submit">Crear Artículo</button>
            </form>
        </div>
    );
}

export default WriteArticle;