import React from 'react';

const VideoSponsor: React.FC = () => {
    return (
        <div className="sponsor-vid">
            <h2 className='text-center mt-2 mb-2'>Conocé a nuestro Sponsor Oficial</h2>
            <video className="elementor-video" src="https://jaspe-nutricion.com.ar/wp-content/uploads/2021/04/Comercial-Jaspe-Familia-de-Productos-1.mp4" autoPlay loop muted playsInline></video>
        </div>
    )
}

export default VideoSponsor;
