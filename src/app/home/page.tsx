'use client';

import './home.scss';

import { Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ListFilms from '@/assets/api/films';
import PopularFilms from '@/assets/api/Popularfilms';

import FilmsContainer from '../components/filmsContainer/filmsContainer';
import Sidebar from '../components/sidebar/sidebar';
import { getAllFilms } from '@/graphql-client/queries';
import { useQuery } from '@apollo/client';
import film from '@/assets/interfaces/filmInterface';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    const { loading, error, data: filmData } = useQuery(getAllFilms);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log('Error: ', error.message);
        return <p>Error</p>;
    }

    const newFilmData = [...filmData.films];

    return (
        <Container fluid className="home-container">
            <Row className="d-flex justify-content-around">
                <Col xs={3} className="px-0">
                    <Sidebar data={newFilmData} />
                </Col>
                <Col
                    xs={8}
                    className="px-0"
                    // style={{ backgroundColor: 'green' }}
                >
                    <Suspense fallback={<></>}>
                        <FilmsContainer data={ListFilms} />
                    </Suspense>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
