'use client';
import './filmsContainer.scss';

import { Suspense, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PaginationInterface from '@/assets/interfaces/pagination';
import { getAllFilms } from '@/graphql-client/queries';
import { useQuery } from '@apollo/client';

import Film from '../film/film';
import Pagination from '../pagination/pagination';
import LoadingContainer from './loading';

function FilmsContainer({ data }: { data: {}[] }) {
    const container = useRef<HTMLDivElement>(null);

    const [pagination, setPagination] = useState<PaginationInterface>({
        page: 1,
        limit: 8,
        totalElements: data.length,
    });

    const { loading, error, data: filmData } = useQuery(getAllFilms);
    if (loading) return <LoadingContainer message="loading" />;
    if (error) {
        console.log('Error: ', error.message);
        return <LoadingContainer message="error" />;
    }

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
        <Suspense fallback={<LoadingContainer message="" />}>
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
                    {getFilms(filmData.films, pagination).map((item: any) => (
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
