import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../pagination/pagination';

function FilmsContainerLoading() {
    return (
        <Container
            fluid
            className="d-flex flex-column justify-content-between filmsContainer"
            style={{ backgroundColor: 'green' }}
        >
            <Row xs={4}>Films Container Loading...</Row>
            <Row>
                <Pagination
                    pagination={{ page: 0, limit: 0, totalElements: 0 }}
                    onPageChange={() => {}}
                />
            </Row>
        </Container>
    );
}

export default FilmsContainerLoading;
