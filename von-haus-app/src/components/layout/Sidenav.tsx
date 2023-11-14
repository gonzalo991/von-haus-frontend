import React, { useState } from 'react';
import { SideBarMenuCard, SidaBarMenuItem } from '../types/Types';

interface SideBarMenuProps {
    items: SidaBarMenuItem[],
    card: SideBarMenuCard
}

const Sidenav: React.FC<SideBarMenuProps> = ({ items, card }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <>
            <h1>Hola mundox</h1>
        </>
    )
}

export default Sidenav;



