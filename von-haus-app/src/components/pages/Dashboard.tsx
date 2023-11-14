import React from 'react';
import Sidenav from '../layout/Sidenav';
import { SideBarMenuItem } from '../types/Types';
import {FcAdvertising} from 'react-icons/fc'
import profileImg from '../img/criador.jpeg';

function Dashboard() {
    const items: SideBarMenuItem[] = [
        {
            id: "1",
            label: "Hola",
            icon: FcAdvertising,
            url: "/"
        }
    ];

    const card = {
        id: "card01",
        displayName: "Gonzalo Araya",
        photo: profileImg,
        title: "Criador",
        url: "/"
    };

    return (
        <>
            <Sidenav items={items} card={card} />
        </>
    );
}

export default Dashboard;
