import React, { useEffect } from 'react';
import '../scss/Home.scss';

interface AnimatedTitleProps {
    title: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title }) => {
    useEffect(() => {
        const revealLetters = () => {
            const titleElement = document.getElementById(title);
            const letters = titleElement?.querySelectorAll('span');

            if (letters) {
                letters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.classList.add('visible');
                    }, index * 600);
                });

                setTimeout(() => {
                    letters.forEach((letter) => {
                        letter.classList.remove('visible');
                    });

                    revealLetters();
                }, letters.length * 600);
            }
        };

        revealLetters();
    }, [title]);

    return (
        <div className="animated-title" id={title}>
            {title.split('').map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
};

export default AnimatedTitle;