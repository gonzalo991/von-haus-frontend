import React from 'react'
import { SideBarMenuCard } from '../types/Types';
import { classNames } from '../libs/classes';
import '../scss/SideBarMenuCardView.scss';

interface SideBarMenuCardViewProps {
    card: SideBarMenuCard;
    isOpen: boolean;
}

const SideBarMenuCardView: React.FC<SideBarMenuCardViewProps> = ({ card, isOpen }) => {

    return (
        <>
            <div className='SideBardMenuCardView'>
                <img className="profile" src={card.photo} alt={card.displayName} width="100%"/>
                <div className={classNames('profileInfo', isOpen?'':'collapsed')}>
                    <div className='name'>{card.displayName}</div>
                    <div className='title'>{card.title}</div>
                    <div className='url'><a href={card.url}>Ir al Inicio</a></div>
                </div>
            </div>
        </>
    )
}

export default SideBarMenuCardView;
