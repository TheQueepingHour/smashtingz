import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Splash() {
    return (
        <Container fluid style={{paddingTop: '56px'}}>
            <Row>
                <Col></Col>
                <Col xs={6} className="text-center">
                    <h2>
                        Welcome to SmashTingz
                    </h2>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md='auto'>
                    <h4>
                        A place where you can find Smash Ultimate knowledge without a longwinded YouTube video.
                    </h4>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Splash