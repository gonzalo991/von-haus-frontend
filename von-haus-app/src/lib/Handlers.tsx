import React from "react";
import axios from "axios";
import { EditArticleProps, DeleteArticlePops } from "../components/types/Types";


export const handleEditArticle =
    async (ev: React.FormEvent<HTMLFormElement>, { _id, data }: EditArticleProps) => {
        ev.preventDefault();
        try {
            const response = await axios.post(`https://von-haus-data-backend.onrender.com/editArticle/${_id}`, data);
            // Puedes hacer algo con la respuesta si es necesario`
            console.info(`Se logró editar el archivo con exito.`);
            console.debug(response.data);
        } catch (error) {
            console.error("Error al editar el artículo:", error);
            // Puedes mostrar un mensaje al usuario aquí
        }
    };

export const handleDeleteArticle = (ev: any, _id: number) => {
    ev.preventDefault();
}