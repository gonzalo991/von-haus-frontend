import React from "react";
import axios from "axios";
import { EditArticleProps, DeleteArticleProps } from "../components/types/Types";


export const handleEditArticle =
    async (ev: React.FormEvent<HTMLFormElement>, { _id, data }: EditArticleProps) => {
        ev.preventDefault();
        try {
            const response = await axios.post(`https://von-haus-data-backend.onrender.com/editArticle/${_id}`, data);
            // Puedes hacer algo con la respuesta si es necesario`
            console.info(`Se logró editar el archivo con exito.`);
            console.debug(response.data);
            window.alert("Se editó el artículo correctamente");
        } catch (error) {
            console.error("Error al editar el artículo:", error);
            window.alert("Error al editar el articulo");
        }
    };

export const handleDeleteArticle = async ({ _id }: DeleteArticleProps) => {
    try {
        const response = await axios.delete(`https://von-haus-data-backend.onrender.com//deleteArticle/${_id}`);
        console.info(`Se borro el artículo con el id: ${_id}. \nRespuesta del servidor: ${response.data}`);
        window.alert("El artículo se borro");
    } catch (error) {
        console.error("Error al eliminar el artículo:", error);
        window.alert("No se pudo borrar el artículo");
    }
};