'use client';

import './film.scss';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import filmInterface from '@/assets/interfaces/filmInterface';

function Film({ film }: { film: filmInterface }) {
    const router = useRouter();

    function handleOnClickFimContainer(event: any) {
        const link = event.target.id;

        router.push(`/pages/watch-film/${link}`);
    }

    return (
        <div
            className="filmContainer"
            id={film.id}
            onClick={handleOnClickFimContainer}
        >
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
        </div>
    );
}

export default Film;
