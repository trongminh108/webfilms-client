'use client';

import { useData } from '@/app/components/context/context';
import './watchFilmSlug.scss';

import Iframe from 'react-iframe';
import { useEffect } from 'react';

function WatchFilm({ params }: any) {
    const { data: film } = useData();

    useEffect(() => {
        document.title = film.name;
    }, [film.name]);

    return (
        <div className="watchFilmContainer">
            <div className="filmScreen">
                <Iframe
                    className="filmFrame"
                    url={film.linkFilm}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
}

export default WatchFilm;
