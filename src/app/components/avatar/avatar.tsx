'use client';

import Link from 'next/link';
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
            <Link
                href={`/pages/signin`}
                className="text-decoration-none text-white"
            >
                <div className="btn-signin">Sign in</div>
            </Link>
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
