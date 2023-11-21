import React, { useEffect, useState } from 'react';
import Slider from '../layout/Slider';
import imgCriador from '../img/criador.jpeg';
import imgVision from '../img/criadero_von_haus_8.jpeg';
import Servicios from './Servicios';
import '../scss/Home.scss';
import '../scss/Animations.scss';
import VideoSponsor from '../fragments/VideoSponsor';
import { ImageVisibility } from '../libs/ImageVisibility';
// import SecondSlider from '../layout/SecondSlider';

const Home: React.FC = () => {
    const { isImageLoaded, isImageVisible } = ImageVisibility(imgCriador);

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
                                <p className="parrafo">En el pintoresco paisaje de la ciudad de El Tala, ubicada en la provincia de Salta, Argentina, emerge con dedicación y pasión el criadero de perros Pastores Alemanes "Von Haus Lola Mora". Fundado en el año 2017 por Emanuel Caro, este criadero se ha consolidado como un referente en la crianza responsable de una de las razas más nobles y versátiles, los Pastores Alemanes.</p>
                                <p className="parrafo">Desde sus inicios, "Von Haus Lola Mora" ha mantenido un compromiso inquebrantable con la crianza ética y responsable. Su misión fundamental es criar perros sanos, equilibrados y libres de problemas genéticos, destacándose por su dedicación al bienestar de cada ejemplar que forma parte de su linaje.</p>
                                <p className="parrafo">El equipo detrás de este criadero no solo posee un profundo amor por la raza, sino también un conocimiento especializado en la genética y cuidados específicos de esta raza. Cada etapa del proceso de crianza se lleva a cabo con atención meticulosa, desde la elección de los padres hasta la socialización temprana de los cachorros.</p>
                                <p className="parrafo">La salud y el bienestar de los perros son prioridades fundamentales en "Von Haus Lola Mora". Se realizan exhaustivos controles veterinarios, se aplican vacunas de manera oportuna y se proporciona una dieta equilibrada y nutritiva. Además, se brinda especial atención a la socialización de los cachorros, asegurando que crezcan en un ambiente estimulante y amoroso.</p>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,106.7C480,85,600,75,720,112C840,149,960,235,1080,245.3C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <h2 className='mt-5 mb-3 text-center home-vision-title'>Vision</h2>
                <div className="container image-vision-container">
                    <div className="row">
                        <div
                            id="image-container"
                            className={`image-container d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12 ${isImageLoaded && isImageVisible ? 'fade-up' : ''}`}
                        >
                            <img
                                className='home-vision-img mx-auto'
                                src={imgVision}
                                alt='pastores alemanes'
                                style={{ borderRadius: "20px", height: "60vh", width: "45vw" }}
                            />
                        </div>
                        <div className="col-md-6 col-sm12">
                            <p className='mt-4 section-two-text'>
                                <p className='parrafo'>La esencia de "Von Haus Lola Mora" reside en la convicción de que cada familia que elige uno de sus cachorros merece la certeza de llevar consigo un compañero de vida saludable. La misión fundamental se eleva más allá de la mera crianza de perros; se traduce en el compromiso de ofrecer a cada ejemplar un inicio de vida caracterizado por la salud, el equilibrio y la calidad genética.</p>
                                <p className='parrafo'>La genética responsable se erige como un pilar esencial en este criadero. Mediante pruebas exhaustivas, se busca identificar y prevenir posibles problemas hereditarios, garantizando que cada cachorro tenga las mejores condiciones para una vida plena y activa. "Von Haus Lola Mora" se enorgullece de criar Pastores Alemanes que superan no solo los estándares de la raza, sino que también encarnan la fidelidad y el equilibrio que caracterizan a un compañero canino excepcional.</p>
                                <p className='parrafo'>Extendiendo su compromiso más allá de las fronteras, el criadero realiza ventas al exterior, compartiendo la calidad y dedicación que define su labor con familias alrededor del mundo. Además, cuenta con el respaldo de un apreciado sponsor, "Jaspe", cuya dedicación a ofrecer alimentos para perros elaborados con ingredientes naturales sin químicos se alinea con la búsqueda del criadero por la sana y natural nutrición de sus animales.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <VideoSponsor />

            <div className="servicios container" id="servicios">
                <Servicios />
            </div>
        </>
    );
};

export default Home;