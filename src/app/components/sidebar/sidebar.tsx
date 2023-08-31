import './sidebar.scss';

import Film from '../popularFilm/popularFilm';

function Sidebar({ data }: { data: {}[] }) {
    return (
        <div className="sidebarContainer">
            {data.map((item: any) => (
                <Film film={item} key={item.id} />
            ))}
        </div>
    );
}

export default Sidebar;
