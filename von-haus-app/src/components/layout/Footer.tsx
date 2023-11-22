import React from 'react';
import { MdFacebook, MdEmail } from 'react-icons/md';
import { BsInstagram, BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { CiLocationOn, CiClock1, CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import '../scss/Home.scss';

const Footer: React.FC = () => {
    return (
        <footer className='text-dark pt-5 pb-4'>
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contacto</h5>
                        <hr className="mb-1" />
                        <ul>
                            <li>
                                <p><CiLocationOn className='text-danger mb-1' /> Av. San Martín 539, El Tala - Salta</p>
                            </li>
                            <li>
                                <p><BsFillTelephoneFill className='text-primary mb-1' /> +549 3876-553474</p>
                            </li>
                            <li>
                                <p><MdEmail className='text-secondary mb-1' /> vonhauslolamora@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary mt-3'>Redes</h5>
                        <hr className="mb-1" />
                        <ul>
                            <li>
                                <Link to=""><MdFacebook className='text-primary mb-1' /> Facebook</Link>
                            </li>
                            <li>
                            <Link to=""><BsInstagram className='text-danger mb-1' /> Instagram</Link>
                            </li>
                            <li>
                            <Link to=""><BsWhatsapp className='text-success mb-1' /> Whatsapp</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-primary mt-3'>Horarios</h5>
                        <hr className="mb-1" />
                        <ul>
                            <li>
                                <p><CiCalendar className='text-warning mb-1' /> Lunes a Sabado</p>
                            </li>
                            <li>
                            <p><CiClock1 className='text-danger mb-1' /> 08:00a.m a 12:00p.m</p>
                            </li>
                            <li>
                            <p><CiClock1 className='text-success mb-1' /> 17:00p.m a 21:00p.m</p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </footer >
    )
}

export default Footer;
