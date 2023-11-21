import React from 'react';
import imgAdiestramiento from '../img/criadero_von_haus_1.jpeg';
import imgEscuela from '../img/criadero_von_haus_7.jpeg';
import imgEjemplares from '../img/regalos_3.jpeg';
import '../scss/Home.scss';
import '../scss/Animations.scss';
import AnimatedTitle from '../layout/AnimatedTitle';

const Servicios: React.FC = () => {

    return (
        <>
            <h2 className='text-center servicios-title'>Servicios</h2>

            <div className="adiestramiento container" id="servicio1">
                <div className="row">
                    <div className="col-md-6 col-sm12">
                        <p className='mt-4 section-two-text'>
                            <div className="animated-title text-center mt-3 mb-2 adiestramiento-title" id="title">
                                <AnimatedTitle title='Adiestramiento' />
                            </div>
                            <p className='parrafo mt-5'>
                                ¡Transforma la relación con tu querido amigo de cuatro patas en una experiencia única con nuestro excepcional servicio de adiestramiento en el Criadero Von Haus Lola Mora! En el corazón de nuestra filosofía está el compromiso de cultivar una conexión más profunda entre tú y tu compañero, a través de un adiestramiento que va más allá de lo ordinario.
                            </p>
                            <p className='parrafo mt-5'>
                                Nosotros, entendemos que cada perro es único, y nuestro equipo de adiestradores expertos trabaja diligentemente para adaptar cada sesión a las necesidades específicas de tu peludo amigo. Desde los comandos básicos hasta los desafíos de comportamiento más complejos, nuestro servicio de adiestramiento aborda cada aspecto con paciencia, comprensión y técnicas positivas.
                            </p>
                        </p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12'>
                        <img className='home-vision-img mx-auto' src={imgAdiestramiento}
                            alt='adiestramiento canino'
                            style={{ borderRadius: "50%", height: "80vh", width: "50vw" }}
                        />
                    </div>
                </div>
            </div>

            <div className="escuela container" id="servicio2">
                <div className="row">
                    <div className='d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12'>
                        <img className='home-vision-img mx-auto' src={imgEscuela}
                            alt='adiestramiento canino'
                            style={{ borderRadius: "50%", height: "80vh", width: "50vw" }}
                        />
                    </div>
                    <div className="col-md-6 col-sm12">
                        <p className='mt-4 section-two-text'>
                            <div className="animated-title text-center mt-3 mb-2 escuela-title" id="title">
                                <AnimatedTitle title='Escuela' />
                            </div>
                            <p className='parrafo mt-5'>Descubre en Von Haus Lola Mora un refugio acogedor y seguro para tu compañero de cuatro patas. Nos dedicamos con devoción a garantizar que la comodidad y seguridad de tu mascota sean nuestras principales prioridades. Nuestras instalaciones, diseñadas con amor, ofrecen amplias áreas donde los perros pueden socializar, jugar y aprender en un entorno cuidadosamente controlado y supervisado.</p>
                            <p className="parrafo mt-5">En nuestra exclusiva Escuela Canina, no solo impartimos conocimientos, sino que también ofrecemos la oportunidad única de que tu perro se quede con nosotros durante su educación. Esta opción garantiza una inmersión total en el proceso de aprendizaje y fomenta una conexión más profunda entre el entrenador y tu leal amigo.</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="ventas container" id="servicio3">
                <div className="row">
                    <div className="col-md-6 col-sm12">
                        <p className='mt-4 section-two-text'>
                            <div className="animated-title text-center mt-3 mb-2 ventas-title" id="title">
                                <AnimatedTitle title='Ventas' />
                            </div>
                            <p className='parrafo mt-5'>¡Bienvenido a la familia Von Haus Lola Mora, donde la compra de tu Pastor Alemán es solo el comienzo de una increíble aventura canina! Nos emociona ofrecerte más que un simple perro; te brindamos un compañero leal junto con un exclusivo Kit de Bienvenida diseñado para hacer que los primeros días con tu nuevo cachorro sean inolvidables.</p>
                            <p className="parrafo mt-5">Al adquirir tu Pastor Alemán, te obsequiamos un exclusivo Kit de Bienvenida, cortesía de nuestro patrocinador Jaspe. Este kit incluye un detallado carnet de vacunas, un lujoso shampoo, una elegante correa, un moderno plato y un práctico contenedor para el alimento de tu cachorro. En Von Haus Lola Mora, no solo te llevas un perro, sino que te sumerges en una experiencia llena de amor, cuidado y momentos inolvidables desde el primer día. Además, garantizamos que todos nuestros cachorros cuentan con pedigree y tatuaje, asegurando la autenticidad y calidad de tu nueva mascota.</p>
                        </p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12'>
                        <img className='home-vision-img mx-auto' src={imgEjemplares}
                            alt='adiestramiento canino'
                            style={{ borderRadius: "50%", height: "80vh", width: "50vw" }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicios;