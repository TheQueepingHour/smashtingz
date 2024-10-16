import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Splash() {
    return (
        <Container fluid style={{paddingTop: '10em'}}>
            <Row className="my-3">
                <Col></Col>
                <Col xs={6} className="text-center">
                    <h2 className="platText">
                        Welcome to SmashTingz
                    </h2>
                </Col>
                <Col></Col>
            </Row>
            <Row className="mt-3">
                <Col></Col>
                <Col md='auto'>
                    <h4 className="platText">
                        A place where you can find Smash Ultimate knowledge without a longwinded YouTube video.
                    </h4>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Splash