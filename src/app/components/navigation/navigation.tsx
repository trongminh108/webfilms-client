'use client';

import './navigation.scss';

import React, { useEffect, useRef } from 'react';

import Avatar from '@/app/components/avatar/avatar';
import SearchBar from '@/app/components/searchBar/searchBar';

const dataNav = [
    {
        title: 'T-Gex',
    },
    {
        title: 'Home',
    },
    {
        title: 'Category',
    },
    {
        title: 'Movie',
    },
    {
        title: 'Series',
    },
];

function Navigation() {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        const sticky = nav?.offsetTop || 0;

        window.onscroll = () => {
            if (window.scrollY > sticky) {
                nav?.classList.add('sticky');
            } else nav?.classList.remove('sticky');
        };
    }, []);

    function handleOnClickNavItem(event: any) {
        const nav = navRef.current;
        const itemActive = nav?.querySelector('.nItem.active');
        itemActive?.classList.remove('active');
        event.target.classList.add('active');
        console.log(event.target, event.target.offsetLeft);
    }

    function handleOnMouseOverNavItem(event: any) {
        const nav = navRef.current;
        const navBG: HTMLDivElement | any =
            nav?.querySelector('.navBackground');
        navBG.style.left = event.target.offsetLeft + 'px';
    }

    function handleOnMouseLeaveNavItem(event: any) {
        const nav = navRef.current;
        const itemActive: any = nav?.querySelector('.active');
        const navBG: HTMLDivElement | any =
            nav?.querySelector('.navBackground');
        navBG.style.left = itemActive?.offsetLeft + 'px';
    }

    return (
        <div className="nav" ref={navRef}>
            <div className="navItems i1">
                <div className="navBackground"></div>
                {dataNav.map((item, index) => {
                    if (index === 0) {
                        return (
                            <div
                                key={item.title}
                                className="nItem active"
                                onMouseOver={handleOnMouseOverNavItem}
                                onMouseLeave={handleOnMouseLeaveNavItem}
                                onClick={handleOnClickNavItem}
                            >
                                {item.title}
                            </div>
                        );
                    }
                    return (
                        <div
                            key={item.title}
                            className="nItem"
                            onMouseOver={handleOnMouseOverNavItem}
                            onMouseLeave={handleOnMouseLeaveNavItem}
                            onClick={handleOnClickNavItem}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
            <div className="navItems i2">
                <SearchBar />
                <Avatar />
            </div>
        </div>
    );
}

export default Navigation;
