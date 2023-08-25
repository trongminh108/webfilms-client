import './home.scss';
import Film from '../components/film/film';

import ListFilms from '@/assets/api/films';

function Home() {
    return (
        <div className="home-container">
            {ListFilms.map((item) => (
                <Film film={item} key={item.id} />
            ))}
        </div>
    );
}

export default Home;
