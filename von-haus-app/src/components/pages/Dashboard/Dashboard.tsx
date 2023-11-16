import React from 'react';
import Sidenav from '../../layout/Sidenav';
import { SideBarMenuItem } from '../../types/Types';
import { FcCameraAddon, FcExport, FcDatabase, FcUpload, FcUpLeft } from "react-icons/fc";
import profileImg from '../../img/logovonhaus.png';
import { BrowserRouter } from 'react-router-dom';

function Dashboard() {
    const items: SideBarMenuItem[] = [
        {
            id: "1",
            label: "Escribir Articulo",
            icon: FcUpload,
            url: "/createArt"
        },
        {
            id: "2",
            label: "Lista de Articulo",
            icon: FcDatabase,
            url: "/createArt"
        },
        {
            id: "3",
            label: "Subir una foto",
            icon: FcCameraAddon,
            url: "/createArt"
        },
        {
            id: "4",
            label: "Salir del Panel",
            icon: FcUpLeft,
            url: ""
        },
        {
            id: "4",
            label: "Cerrar Sesión",
            icon: FcExport,
            url: ""
        }
    ];

    const card = {
        id: "card01",
        displayName: "Emanuel Caro",
        photo: profileImg,
        title: "Criador de Pastores Alemanes"
    };

    return (
        <>
            <BrowserRouter>
                <Sidenav items={items} card={card} />

                <main>

                </main>
                
            </BrowserRouter>

        </>
    );
}

export default Dashboard;
