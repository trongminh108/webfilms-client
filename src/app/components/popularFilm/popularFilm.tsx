import './popularFilm.scss';

import Image from 'next/image';
import Link from 'next/link';

import FilmInterface from '@/assets/interfaces/filmInterface';
import Rated from '../rated/rated';

function PopularFilm({ film }: { film: FilmInterface }) {
    return (
        <Link
            className="popularFilmContainer"
            href={`/pages/watch-film/${film.id}`}
        >
            <div className="image">
                <Image
                    id={film.id}
                    alt="film poster"
                    className="popularFilmPoster"
                    src={film.poster}
                    width={270}
                    height={400}
                />
            </div>
            <div className="popularFilmDetail">
                {/* <p>Name: </p>
                <p>Views: </p>
                <p>Rate: </p> */}
                <Rated />
                <Rated />
            </div>
        </Link>
    );
}

export default PopularFilm;
