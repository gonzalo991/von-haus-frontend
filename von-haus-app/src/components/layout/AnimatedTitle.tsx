import React, { useEffect } from 'react';
import '../scss/Home.scss';

/**
 * Propiedades para el componente AnimatedTitle.
 */
interface AnimatedTitleProps {
    title: string;
}

/**
 * Componente AnimatedTitle.
 * 
 * Este componente muestra un título animado donde cada letra se revela secuencialmente.
 * 
 * @component
 * @example
 * // Uso en otro componente
 * import AnimatedTitle from './AnimatedTitle';
 * // ...
 * <AnimatedTitle title="Ejemplo" />
 * 
 * @param {AnimatedTitleProps} props - Propiedades del componente AnimatedTitle.
 * @returns {JSX.Element} El componente AnimatedTitle que muestra un título animado.
 */
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
    useEffect(() => {
        /**
         * Función para revelar secuencialmente las letras del título.
         */
        const revealLetters = () => {
            const titleElement = document.getElementById(title);
            const letters = titleElement?.querySelectorAll('span');

            if (letters) {
                letters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.classList.add('visible');
                    }, index * 400);
                });

                setTimeout(() => {
                    letters.forEach((letter) => {
                        letter.classList.remove('visible');
                    });

                    revealLetters();
                }, letters.length * 400);
            }
        };

        // Inicia la animación al montar el componente
        revealLetters();
    }, [title]);

    return (
        <div className="animated-title" id={title}>
            {/* Crea un span para cada letra del título */}
            {title.split('').map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
};

export default AnimatedTitle;