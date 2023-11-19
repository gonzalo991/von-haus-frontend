import React, { useEffect, useState } from 'react';
import Slider from '../layout/Slider';
import imgCriador from '../img/criador.jpeg';
import imgVision from '../img/criadero_von_haus_8.jpeg';
import '../scss/Home.scss';

const Home: React.FC = () => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [isImageVisible, setIsImageVisible] = useState<boolean>(false);

    useEffect(() => {
        // Simula la carga de la imagen
        const loadImage = new Image();
        loadImage.src = imgCriador;
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
    }, []);

    return (
        <>
            <Slider />
            <div id='section1' className='home-section'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L60,96C120,96,240,96,360,117.3C480,139,600,181,720,186.7C840,192,960,160,1080,122.7C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <h1 className='home-title text-center'>Sobre Nosotros</h1>
                <h2 className='home-subtitle text-center'>Historia</h2>
                <div className="container">
                    <div className="row">
                        <div className='col-md-6 col-sm-12'>
                            <p className='mt-4 section-one-text'>
                                En el pintoresco paisaje de la ciudad de El Tala, ubicada en la provincia de Salta, Argentina, emerge con dedicación y pasión el criadero de perros Pastores Alemanes "Von Haus Lola Mora". Fundado en el año 2017, este criadero se ha consolidado como un referente en la crianza responsable de una de las razas más nobles y versátiles, los Pastores Alemanes.

                                Desde sus inicios, "Von Haus Lola Mora" ha mantenido un compromiso inquebrantable con la crianza ética y responsable. La misión fundamental es criar perros sanos, equilibrados y libres de problemas genéticos, destacándose por su dedicación al bienestar de cada ejemplar que forma parte de su linaje.

                                El equipo detrás de este criadero no solo posee un profundo amor por la raza, sino también un conocimiento especializado en la genética y cuidados específicos de los Pastores Alemanes. Cada etapa del proceso de crianza se lleva a cabo con atención meticulosa, desde la elección de los padres hasta la socialización temprana de los cachorros.
                            </p>
                        </div>

                        <div
                            id="image-container"
                            className={`image-container d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12 ${isImageLoaded && isImageVisible ? 'fade-in' : ''}`}
                        >
                            <img
                                className='home-img mx-auto' src={imgCriador}
                                alt='Emanuel Caro criador de pastores alemanes'
                                style={{ borderRadius: "20px", height: "65vh" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id='section2' className='home-second-section mt-5 mb-4'>
                <h1 className='mt-5 mb-3 text-center home-vision-title'>Vision</h1>
                <div className="container image-vision-container">
                    <div className="row">
                        <div className='d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12'>
                            <img className='home-vision-img mx-auto' src={imgVision}
                                alt='pastores alemanes'
                                style={{ borderRadius: "20px", height: "60vh", width: "45vw" }}
                            />
                        </div>
                        <div className="col-md-6 col-sm12">
                            <p className='mt-4 section-two-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis minus error itaque quibusdam tempore voluptate sequi, perspiciatis odio, natus voluptatibus exercitationem ea. Praesentium deleniti quae quaerat eveniet illo vitae labore.
                                Accusantium, ipsa magni! Molestiae veniam rerum nemo eum voluptatum ipsum facere dolorem expedita nihil aut saepe architecto, aspernatur voluptates fuga reprehenderit deleniti aperiam natus qui laboriosam sequi ipsam! Similique, porro?
                                Officiis eligendi quibusdam magnam minus id libero provident dolore cum! Commodi, rerum recusandae laborum rem explicabo neque placeat nemo at porro aspernatur, voluptates nihil aperiam asperiores quaerat totam error iste.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;