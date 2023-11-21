import React from 'react';
import imgRegalos from '../img/regalos_1.jpeg';
import imgRegalos2 from '../img/regalos_3.jpeg';
import jaspe from '../img/Jaspe_Premium_Criadores_Negro.png';
import '../scss/Home.scss';

// https://www.kapwing.com/videos/655cc24e25ffa89191c29007 video pastor

const SecondSlider: React.FC = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5" data-bs-ride="carousel" data-bs-interval="2000" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgRegalos} className="d-block w-100 img-carousel" alt="regalos por su compra" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgRegalos2} className="d-block w-100 img-carousel" alt="regalos por su compra 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={jaspe} className="d-block w-100 img-carousel" alt="nuestro sponsor jaspe" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SecondSlider
