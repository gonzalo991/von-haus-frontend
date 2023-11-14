import React from 'react';
import { SideBarMenuItem } from '../types/Types';
import { classNames } from '../libs/classes';
import '../scss/SideBarMenuItemView.scss'

interface SideBarMenuItemViewProps {
    item: SideBarMenuItem;
    isOpen: boolean;
}

const SideBarMenuItemView: React.FC<SideBarMenuItemViewProps> = ({ item, isOpen }) => {

    return (
        <>
            <div className='SideBarMenuItemView'>
                <a href={item.url}>
                    <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
                        <div className='icon'>
                            <item.icon size="32" />
                        </div>
                        <span className='label'>{item.label}</span>
                    </div>
                </a>
                {
                    !isOpen? <div className='tooltip'>{item.label}</div> : ''
                }
            </div>
        </>
    );
}

export default SideBarMenuItemView;
