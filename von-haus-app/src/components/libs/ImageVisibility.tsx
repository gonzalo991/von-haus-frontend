import React, { useEffect, useState } from 'react';

/**
 * Función de React para gestionar la visibilidad y carga de una imagen
 * basada en el evento de desplazamiento (scroll) en la ventana del navegador.
 *
 * @param imageUrl - URL de la imagen que se desea cargar y monitorizar.
 * @returns Un objeto con propiedades booleanas: isImageLoaded e isImageVisible.
 */
export const ImageVisibility = (imageUrl: string) => {
    // Estado local para indicar si la imagen ha sido completamente cargada.
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

    // Estado local para indicar si la imagen es visible en la ventana del navegador.
    const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

    useEffect(() => {
        // Simula la carga de la imagen.
        const loadImage = new Image();
        loadImage.src = imageUrl;
        loadImage.onload = () => {
            setIsImageLoaded(true);
        };

        // Manejar el evento de scroll.
        const handleScroll = () => {
            const imageContainer = document.getElementById('image-container');
            if (imageContainer) {
                const rect = imageContainer.getBoundingClientRect();
                // Verificar si el contenedor de la imagen está visible en la ventana.
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsImageVisible(isVisible);
            }
        };

        // Agregar el evento de scroll al cargar el componente.
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll al desmontar el componente.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [imageUrl]);

    // Devolver el estado actual de la carga e visibilidad de la imagen.
    return { isImageLoaded, isImageVisible };
};