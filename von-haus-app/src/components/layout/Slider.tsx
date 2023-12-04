import React from 'react';
import SliderImage1 from '../img/Gunther Von Haus Lola Mora.jpeg';
import sliderImage2 from '../img/exposiciones_6.jpeg';
import sliderImage3 from '../img/exposiciones_7.jpeg';

/**
 * Componente Slider.
 * 
 * Este componente muestra un carrusel de imágenes.
 * 
 * @component
 * @example
 * // Uso en otro componente
 * import Slider from './Slider';
 * // ...
 * <Slider />
 * 
 * @returns {JSX.Element} El componente Slider que muestra un carrusel de imágenes.
 */
const Slider: React.FC = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={SliderImage1} className="d-block w-100" style={{ height: "70vh" }} alt="pastor en exposicion" />
                </div>
                <div className="carousel-item">
                    <img src={sliderImage2} className="d-block w-100" style={{ height: "70vh" }} alt="pastor von haus" />
                </div>
                <div className="carousel-item">
                    <img src={sliderImage3} className="d-block w-100" style={{ height: "70vh" }} alt="pastor von haus en exposicion" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;