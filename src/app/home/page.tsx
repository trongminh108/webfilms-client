'use client';

import './home.scss';

import { Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ListFilms from '@/assets/api/films';
import PopularFilms from '@/assets/api/Popularfilms';

import FilmsContainer from '../components/filmsContainer/filmsContainer';
import Sidebar from '../components/sidebar/sidebar';

function Home() {
    return (
        <Container fluid className="home-container">
            <Row className="d-flex justify-content-around">
                <Col xs={3} className="px-0">
                    <Sidebar data={PopularFilms} />
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
