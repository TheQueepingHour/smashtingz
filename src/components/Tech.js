import React from "react";
import { Container, Accordion } from "react-bootstrap";

function Tech() {
    return (
        <Container fluid style={{paddingTop: '5em'}}>
            <div className="mx-3 yellowText">
                <h2>
                    Welcome to the Tech page.
                </h2>
                <p>
                    Here you will find all the Tech that I find to be useful/important.
                </p>
            </div>
            <Container fluid>
            <Accordion flush data-bs-theme="dark" className="techBGC">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>PH</Accordion.Header>
                    <Accordion.Body>
                        more PH
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
        </Container>
    )
}

export default Tech