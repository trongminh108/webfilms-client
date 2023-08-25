import './film.scss';

import Image from 'next/image';

import filmInterface from '@/assets/interfaces/filmInterface';
import Link from 'next/link';

function Film({ film }: { film: filmInterface }) {
    return (
        <Link className="filmContainer" href={`/pages/watch-film/${film.id}`}>
            <Image
                id={film.id}
                alt="film poster"
                className="filmPoster"
                src={film.poster}
                width={270}
                height={400}
            />
            <div className="filmDetail" id={film.id}>
                {film.name}
            </div>
        </Link>
    );
}

export default Film;
