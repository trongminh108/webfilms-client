'use client';
import './searchBar.scss';

import { useRef } from 'react';

function SearchBar() {
    const searchBarRef = useRef<HTMLDivElement>(null);

    function handleOnClick(e: any) {
        const searchInput: any =
            searchBarRef?.current?.querySelector('.searchInput');
        searchInput.value = '';

        if (document.activeElement === searchInput) {
            searchInput?.blur();
        }
    }

    function handleOnKeyDown(e: any) {
        if (e.key === 'Enter') {
            alert(e.target.value);
        }
    }

    return (
        <div className="searchBar" ref={searchBarRef}>
            <input
                type="text"
                name="searchInput"
                id="searchInput"
                className="searchInput"
                placeholder="Search films"
                onKeyDown={handleOnKeyDown}
            />
            <div className="btnClear" onClick={handleOnClick}></div>
        </div>
    );
}

export default SearchBar;
