import './home.scss';

import ListFilms from '@/assets/api/films';
import PopularFilms from '@/assets/api/Popularfilms';

import FilmsContainer from '../components/filmsContainer/filmsContainer';
import Sidebar from '../components/sidebar/sidebar';

function Home() {
    return (
        <div className="home-container">
            <Sidebar data={PopularFilms} />

            <FilmsContainer data={ListFilms} />
        </div>
    );
}

export default Home;
