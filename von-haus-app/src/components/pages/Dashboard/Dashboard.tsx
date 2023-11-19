import React from 'react';
import Sidenav from '../../layout/Sidenav';
import { SideBarMenuItem } from '../../types/Types';
import { FcCameraAddon, FcExport, FcDatabase, FcUpload } from "react-icons/fc";
import profileImg from '../../img/logovonhaus.png';
import { BrowserRouter } from 'react-router-dom';
import DashboardRouter from './DashboardRouter';

function Dashboard() {
    const items: SideBarMenuItem[] = [
        {
            id: "1",
            label: "Escribir Articulo",
            icon: FcUpload,
            url: "/admin/publicar"
        },
        {
            id: "2",
            label: "Lista de Articulo",
            icon: FcDatabase,
            url: "/admin/listado"
        },
        {
            id: "3",
            label: "Subir una foto",
            icon: FcCameraAddon,
            url: "/admin/agregarImagen"
        },
        {
            id: "4",
            label: "Salir del Panel",
            icon: FcExport,
            url: "/"
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

                <main className='dashboard-content'>
                    <DashboardRouter />
                </main>

            </BrowserRouter>

        </>
    );
}

export default Dashboard;