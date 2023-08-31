'use client';
import './filmsContainer.scss';

import Film from '../film/film';
import { useEffect, useRef, useState } from 'react';

function FilmsContainer({ data }: { data: {}[] }) {
    const container = useRef<HTMLDivElement>(null);

    return (
        <div className="filmsContainer" ref={container}>
            {data.map((item: any) => (
                <Film film={item} key={item.id} />
            ))}
        </div>
    );
}

export default FilmsContainer;
