import React, { useState } from 'react';
import { SideBarMenuCard, SideBarMenuItem } from '../types/Types';
import { classNames } from '../libs/classes';
import { VscMenu } from 'react-icons/vsc';
import SideBarMenuCardView from '../fragments/SideBarMenuCardView';
import SideBarMenuItemView from '../fragments/SideBarMenuItemView';

interface SideBarMenuProps {
    items: SideBarMenuItem[],
    card: SideBarMenuCard
}


const Sidenav: React.FC<SideBarMenuProps> = ({ items, card }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={classNames('SideBarMenu', isOpen ? "expanded" : "collapsed")}>
                <div className='menuButton'>
                    <button className='hamburgerButton' onClick={handleClick}>
                        <VscMenu />
                    </button>
                </div>
                <SideBarMenuCardView card={card} isOpen={isOpen} />
                {
                    items.map((item) => {
                        return (
                            <>
                                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sidenav;



