'use client';

import './navigation.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

import Avatar from '@/app/components/avatar/avatar';
import SearchBar from '@/app/components/searchBar/searchBar';

const dataNav = [
    {
        title: 'T-Gex',
        link: '/home',
    },
    {
        title: 'Home',
        link: '/home',
    },
    {
        title: 'Category',
        link: '/pages/category',
    },
    {
        title: 'Movie',
        link: '/pages/movie',
    },
    {
        title: 'Series',
        link: '/pages/series',
    },
];

function Navigation() {
    const navRef = useRef<HTMLDivElement>(null);
    const [pathName, setPathName] = useState(usePathname());

    useEffect(() => {
        const nav = navRef.current;
        const sticky = nav?.offsetTop ?? 0;

        window.onscroll = () => {
            if (window.scrollY > sticky) {
                nav?.classList.add('sticky');
            } else nav?.classList.remove('sticky');
        };

        try {
            if (pathName != '/') {
                const itemActive: any = nav?.querySelector('.nItem.active');
                const navBG: any = nav?.querySelector('.navBackground');
                navBG.style.left = itemActive.offsetLeft + 'px';
            }
        } catch (ex) {}
    }, [pathName]);

    function handleOnClickNavItem(event: any) {
        const nav = navRef.current;
        const itemActive = nav?.querySelector('.nItem.active');
        itemActive?.classList.remove('active');
        event.target.classList.add('active');
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
                {dataNav.map((item) => {
                    if (item.link == pathName) {
                        return (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="nItem active"
                                onMouseOver={handleOnMouseOverNavItem}
                                onMouseLeave={handleOnMouseLeaveNavItem}
                                onClick={handleOnClickNavItem}
                            >
                                {item.title}
                            </Link>
                        );
                    }
                    return (
                        <Link
                            key={item.title}
                            href={item.link}
                            className="nItem"
                            onMouseOver={handleOnMouseOverNavItem}
                            onMouseLeave={handleOnMouseLeaveNavItem}
                            onClick={handleOnClickNavItem}
                        >
                            {item.title}
                        </Link>
                    );
                })}
                <div className="navBackground"></div>
            </div>
            <div className="navItems i2">
                <SearchBar />
                <Avatar />
            </div>
        </div>
    );
}

export default Navigation;
