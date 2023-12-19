import './watchFilmSlug.scss';

import Iframe from 'react-iframe';

import ListFilms from '@/assets/api/films';

function WatchFilm({ params }: Readonly<{ params: any }>) {
    const film = ListFilms.find((film) => film.id == params.film);

    return (
        <div className="watchFilmContainer">
            <div className="filmScreen">
                <Iframe
                    className="filmFrame"
                    url={film?.linkFilm ?? ''}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
}

export default WatchFilm;
