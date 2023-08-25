import Iframe from 'react-iframe';

import ListFilms from '@/assets/api/films';

function WatchFilm({ params }: { params: any }) {
    const linkFilm = ListFilms.find((film) => film.id == params.film)?.linkFilm;

    return (
        <div>
            <Iframe url={linkFilm || ''} width="640px" height="320px" />
        </div>
    );
}

export default WatchFilm;
