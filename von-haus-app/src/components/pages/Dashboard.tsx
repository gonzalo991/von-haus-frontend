import React from 'react';
import Sidenav from '../layout/Sidenav';
import { SideBarMenuItem } from '../types/Types';
import {FcAdvertising} from 'react-icons/fc'

const Dashboard: React.FC = () => {
    const items: SideBarMenuItem[] = [
        {
            id: "1",
            label: "Hola",
            icon: FcAdvertising,
            url: "/"
        }
    ]

    const card = {
        id: "card01",
        displayName: "Gonzalo Araya",
        photo: "img/criador_1.jpeg",
        title: "Criador",
        url: "/"
    }

    return (
        <>
            <Sidenav items={items} card={card}/>
        </>
    )
}

export default Dashboard;
