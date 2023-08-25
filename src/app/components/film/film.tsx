import './film.scss';

import filmInterface from '@/assets/interfaces/filmInterface';
import Image from 'next/image';

function Film({ film }: { film: filmInterface }) {
    return (
        <div className="filmContainer">
            <Image
                alt="film poster"
                className="filmPoster"
                src={film.poster}
                width={270}
                height={400}
            />
            <div className="filmDetail">{film.name}</div>
        </div>
    );
}

export default Film;
