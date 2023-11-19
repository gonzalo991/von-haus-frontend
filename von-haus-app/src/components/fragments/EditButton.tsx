import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [texto, setTexto] = useState<string>("");

    const handleToggle = () => {
        console.log("toggle click");
        setIsOpen(!isOpen);
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
                        {/* Agrega contenido aquí, por ejemplo: */}
                        <p>Este es el cuerpo del modal. Puedes agregar texto o componentes aquí.</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={handleToggle}>Guardar Cambios</button>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default EditButton;