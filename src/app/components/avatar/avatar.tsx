'use client';

import './avatar.scss';

import { useRef } from 'react';

const optionData = [
    {
        title: 'Profile',
    },
    {
        title: 'Setting',
    },
    {
        title: 'Logout',
    },
];

function Avatar() {
    const avaContainer = useRef<HTMLDivElement>(null);

    function handleOnClickAvatar() {
        const options: any =
            avaContainer.current?.querySelector('.options-avatar');
        options.classList.toggle('visible');
    }

    return (
        <div className="container-avatar" ref={avaContainer}>
            <div className="avatarImage" onClick={handleOnClickAvatar}></div>
            <div className="options-avatar">
                {optionData.map((item) => (
                    <div key={item.title} className="option">
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Avatar;
