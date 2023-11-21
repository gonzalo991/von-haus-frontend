import React, {useState, useEffect} from 'react';
import '../scss/Home.scss'

const VideoSponsor: React.FC = () => {

    return (
        <div className="sponsor-vid">
            <h2 className='text-center sponsor-title'>Conocé a nuestro Patrocinador Oficial</h2>
            <video className="elementor-video" src="https://jaspe-nutricion.com.ar/wp-content/uploads/2021/04/Comercial-Jaspe-Familia-de-Productos-1.mp4" autoPlay loop muted playsInline></video>
        </div>
    )
}

export default VideoSponsor;
