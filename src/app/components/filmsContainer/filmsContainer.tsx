'use client';
import './filmsContainer.scss';

import { useEffect, useRef, useState } from 'react';

import PaginationInterface from '@/assets/interfaces/pagination';

import Film from '../film/film';
import Pagination from '../pagination/pagination';

function FilmsContainer({ data }: { data: {}[] }) {
    const container = useRef<HTMLDivElement>(null);
    const [pagination, setPagination] = useState<PaginationInterface>({
        page: 1,
        limit: 3,
        totalElements: data.length,
    });

    function handleOnPageChange(newPage: number) {
        setPagination({ ...pagination, page: newPage });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    function getFilms(data: Array<object>, pagination: PaginationInterface) {
        const res = [];
        let start =
            pagination.page - 1 === 0
                ? 0
                : (pagination.page - 1) * pagination.limit;
        const end =
            start + pagination.limit < data.length
                ? start + pagination.limit
                : data.length;
        for (let i = start; i < end; i++) res.push(data[i]);
        return res;
    }

    return (
        <div style={{ width: '70%', height: '100%' }}>
            <div className="filmsContainer" ref={container}>
                {/* {data.map((item: any) => (
                    <Film film={item} key={item.id} />
                ))} */}
                {getFilms(data, pagination).map((item: any) => (
                    <Film film={item} key={item.id} />
                ))}
            </div>
            <Pagination
                pagination={pagination}
                onPageChange={handleOnPageChange}
            />
        </div>
    );
}

export default FilmsContainer;
