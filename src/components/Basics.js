import React from "react";
import { Container, Accordion } from "react-bootstrap";

const Basics = () => {
    return (
        <Container fluid style={{paddingTop: '5em'}}>
            <div className="platText">
                <h2>
                    Welcome to the basics page
                </h2>
                <p>
                    Here you will find information I believe to be basic and for all players.
                </p>
            </div>
            <Container fluid>
                <Accordion flush data-bs-theme="dark">
                    <Accordion.Item eventKey="0" className="">
                        <Accordion.Header>Buffer</Accordion.Header>
                        <Accordion.Body>
                            The buffer system is how the game accepts and stores inputs. According to the wiki, <span className="coralText">"Buffering is a game mechanic in which a player may input an action shortly before it can be executed in-game, resulting in the action being carried out on the first possible frame."</span><br /> In other words, the game will allow you to input an action before your current action is completed. This allows players to string together multiple actions in a row, allowing for frame perfect combos and movement.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="">
                        <Accordion.Header>Invincibility vs. Intangibility vs. Armor</Accordion.Header>
                        <Accordion.Body>
                            Invincibility: <br />Wiki definition: <span className="coralText">"A state where a hurtbox cannot be attacked or damaged"</span><br />Essentially, this means that the character with invincibility cannot be damaged, however, the opposing character will still recieve the same amount of hitlag.<br />
                            Intangibility: <br />Wiki definition: <span className="coralText">""</span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Container>
    )
}

export default Basics