import React from 'react';
import imgAdiestramiento from '../img/criadero_von_haus_1.jpeg';
import imgEscuela from '../img/criadero_von_haus_7.jpeg';
import imgEjemplares from '../img/regalos_3.jpeg';
import '../scss/Home.scss';
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

            <div className="adiestramiento container" id="servicio1">
                <div className="row">
                    <div className='d-flex align-items-center justify-content-center mt-5 mb-3 col-md-6 col-sm-12'>
                        <img className='home-vision-img mx-auto' src={imgEscuela}
                            alt='adiestramiento canino'
                            style={{ borderRadius: "50%", height: "80vh", width: "50vw" }}
                        />
                    </div>
                    <div className="col-md-6 col-sm12">
                        <p className='mt-4 section-two-text'>
                            <div className="animated-title text-center mt-3 mb-2 adiestramiento-title" id="title">
                                <AnimatedTitle title='Escuela' />
                            </div>
                            <p className='parrafo'>La esencia de "Von Haus Lola Mora" reside en la convicción de que cada familia que elige uno de sus cachorros merece la certeza de llevar consigo un compañero de vida saludable. La misión fundamental se eleva más allá de la mera crianza de perros; se traduce en el compromiso de ofrecer a cada ejemplar un inicio de vida caracterizado por la salud, el equilibrio y la calidad genética.</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="adiestramiento container" id="servicio1">
                <div className="row">
                    <div className="col-md-6 col-sm12">
                        <p className='mt-4 section-two-text'>
                            <div className="animated-title text-center mt-3 mb-2 adiestramiento-title" id="title">
                                <AnimatedTitle title='Ventas' />
                            </div>
                            <p className='parrafo'>La esencia de "Von Haus Lola Mora" reside en la convicción de que cada familia que elige uno de sus cachorros merece la certeza de llevar consigo un compañero de vida saludable. La misión fundamental se eleva más allá de la mera crianza de perros; se traduce en el compromiso de ofrecer a cada ejemplar un inicio de vida caracterizado por la salud, el equilibrio y la calidad genética.</p>
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