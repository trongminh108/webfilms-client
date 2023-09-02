import './home.scss';

import ListFilms from '@/assets/api/films';
import PopularFilms from '@/assets/api/Popularfilms';

import FilmsContainer from '../components/filmsContainer/filmsContainer';
import Sidebar from '../components/sidebar/sidebar';
import { Suspense } from 'react';

function Home() {
    return (
        <div className="home-container">
            <Sidebar data={PopularFilms} />
            <Suspense
                fallback={
                    <div style={{ backgroundColor: 'red', width: '70%' }}>
                        FilmsContainer loading...
                    </div>
                }
            >
                <FilmsContainer data={ListFilms} />
            </Suspense>
        </div>
    );
}

export default Home;
