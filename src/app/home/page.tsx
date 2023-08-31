import './home.scss';
import Film from '../components/film/film';
import FilmsContainer from '../components/filmsContainer/filmsContainer';

import ListFilms from '@/assets/api/films';

function Home() {
    return (
        <div className="home-container">
            <FilmsContainer data={ListFilms} />
        </div>
    );
}

export default Home;
