import React, { useEffect, useState } from 'react';

export const ImageVisibility = (imageUrl: string) => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

    useEffect(() => {
        // Simula la carga de la imagen
        const loadImage = new Image();
        loadImage.src = imageUrl;
        loadImage.onload = () => {
            setIsImageLoaded(true);
        };

        // Manejar el evento de scroll
        const handleScroll = () => {
            const imageContainer = document.getElementById('image-container');
            if (imageContainer) {
                const rect = imageContainer.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsImageVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [imageUrl]);

    return { isImageLoaded, isImageVisible };
};