import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../../Components/Video/video'
import CategoriesBar from '../../Components/CategoriesBar/categories'

const Homescreen = () => {
    return (
        <Container>
            <CategoriesBar/>
            <Row>
                {[...new Array(20)].map((element, index) => (
                    <Col key={index} lg={3} md={4}>
                        <Video/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Homescreen;
