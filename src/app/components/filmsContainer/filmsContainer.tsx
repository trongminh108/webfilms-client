'use client';
import './filmsContainer.scss';

import { Suspense, useRef, useState } from 'react';

import PaginationInterface from '@/assets/interfaces/pagination';

import Film from '../film/film';
import Pagination from '../pagination/pagination';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingContainer from './loading';

function FilmsContainer({ data }: { data: {}[] }) {
    const container = useRef<HTMLDivElement>(null);
    const [pagination, setPagination] = useState<PaginationInterface>({
        page: 1,
        limit: 1,
        totalElements: data.length,
    });

    function handleOnPageChange(newPage: number) {
        setPagination({ ...pagination, page: newPage });
        window.scrollTo({
            top: 0,
            // behavior: 'smooth',
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
        <Suspense fallback={<LoadingContainer />}>
            <Container
                fluid
                className="d-flex 
                flex-column 
                justify-content-between 
                rounded-5
                overflow-hidden
                my-4
                filmsContainer"
                style={{
                    height: '100vh',
                }}
            >
                <Row xs={4}>
                    {getFilms(data, pagination).map((item: any) => (
                        <Col
                            key={item.id}
                            className="d-flex
                            justify-content-center
                            py-3"
                        >
                            <Film film={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Pagination
                        pagination={pagination}
                        onPageChange={handleOnPageChange}
                    />
                </Row>
            </Container>
        </Suspense>
    );
}

export default FilmsContainer;
