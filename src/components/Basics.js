import React from "react";
import { Container, Accordion, ListGroup } from "react-bootstrap";

const Basics = () => {
    return (
        <Container fluid style={{paddingTop: '5em'}}>
            <div className="emeraldText mx-3">
                <h2>
                    Welcome to the basics page
                </h2>
                <p>
                    Here you will find information on mechanics I believe to be basic and for all players. This page will not cover tech.
                </p>
            </div>
            <Container fluid>
                <Accordion flush data-bs-theme="dark" className="basicBGC">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Frames</Accordion.Header>
                        <Accordion.Body>
                            Smash Ultimate runs at <span className="blueText">60 FPS</span>.<br />
                            This means 1 second = 60 frames, 1/2 of a second = 30 frames, 1/4 of a second = 15 frames, etc.<br />
                            While this may seem unimportant at first, it's useful to know when learning the speed of each character and their attacks.<br />
                            <span className="blueText">NOTE: </span> This is also extremely important for learning certain tech which will be covered on the Tech page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Buffer</Accordion.Header>
                        <Accordion.Body>
                            According to the wiki, <span className="wikiText">"Buffering is a game mechanic in which a player may input an action shortly before it can be executed in-game, resulting in the action being carried out on the first possible frame."</span><br />The Buffer system is how the game reads and stores inputs. In other words, the game will allow you to input an action before your current action is completed, and the next action will happen on the first available frame (instantly after). This allows players to string together multiple actions in a row, allowing for frame perfect combos and movement.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Invincibility</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="wikiText">"A state where a hurtbox cannot be attacked or damaged, attacks will connect, but will not deal damage, knockback, or hitstun, though the attacker will still experience hitlag"</span><br />Essentially, this means that the character with invincibility can be hit(Will display a hit, small circle), but will be unaffected otherwise.(Can still be affected by windboxes though.)<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Intangibility</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="wikiText">"A state in which a hurtbox will not be hit by attacks at all."</span><br />This is what happens when you roll, spot dodge, or grab ledge. All attacks will pass through the player (No hit display, no circle) <br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Armor</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="wikiText">"The concept of sustaining hitlag and damage, but not sustaining any knockback or sustaining reduced knockback"</span><br />
                            Types of armor:<br />
                            <b>Super armor:</b> <br />
                            <span className="wikiText">When a character has <b>super armor</b>, or <b>infinite knockback resistance</b>, they will not flinch or take any knockback when attacked by harmful hitboxes, but flinchless hitboxes (like "windboxes") will still move the character.</span><br />
                            This is the armor that you get when using a heavy attack such as DK Punch, Ganon Warlock Punch, and King K Rool's belly(Called Belly Super armor). <br />
                            <b>Damage based armor:</b> <br />
                            <span className="wikiText">The wiki has a really long winded explanation of this, so if you want to learn more about it, here's the <a href="https://www.ssbwiki.com/Armor">link to the wiki</a></span><br />
                            Basically, this is armor that you can break through with enough damage. The character will still take damage, but won't take knockback unless enough damage is dealt to break through this armor type. An example of this would be Pirhana Plant's "pot armor" when using down B. <br />
                            <b>Knockback based armor:</b> <br />
                            <span className="wikiText">"This mechanic is used to prevent opponents from being knocked back unless it reaches a certain threshold in units."</span><br />
                            This type of armor is basically irrelevant in Ultimate, so don't worry about it, I just included it to be thorough.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Sweetspot & Sourspot</Accordion.Header>
                        <Accordion.Body>
                            <b>Sweetspot</b>:<br />
                            <span className="wikiText">The sweet spot of an attack is the area of the hitbox with the most desirable knockback effect - usually, the most powerful part of the attack.</span><br />
                            This is pretty self explanatory, but basically, the part of an attack that does the most. <br />Some examples of this are Marth's sword tip and Captain Falcon's knee point. <br />
                            <b>Sourspot</b>:<br />
                            <span className="wikiText">A sour spot is the exact opposite of a sweet spot; an area with the least powerful part of the attack</span><br />
                            Again, pretty self explanatory, but basically, the part of an attack that does not do the most. <br />Some examples of this are Luigi up B, and anywhere on Marth's sword that isn't the tip. <br />
                            <b>Note:</b><br />
                            These are important to know because while a sourspot may sound like a bad thing, there are times where you wouldn't want to hit an opponent with a sweet spot. <br />An example of this would be to use the sourspot to line the opponent up for another attack, which wouldn't be possible if they took the knockback from a sweet spot hit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Stale-move Negation</Accordion.Header>
                        <Accordion.Body>
                            <span className="wikiText">Refers to how moves cause less damage and knockback as they are used multiple times in a row.</span><br />
                            There is a "queue" type of system in place, and this is how the game keeps track of how stale a move is. There are 9 slots for this queue, so if you use a move and then use 9 moves after it, it will become 'fresh' and do full knockback and damage.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Control/Analog Stick</Accordion.Header>
                        <Accordion.Body>
                            <span className="wikiText">"The control stick has four primary directions that can be input"</span><br />
                            A very simple concept, however there are a few minor nuances available to the player.<br />
                            1. Depending on how you move the control stick, it will change how fast your character moves. By tilting the control stick horizontally, it will cause your character to walk in that direction, with varying speed depending on how far you tilt the stick. If you tilt the stick all the way to either side quickly, you will begin to dash. <br />
                            2. Tilting the stick down will result in a crouch, and tilting up will only do something on it's own if you have tap jump on. <br />
                            2a. However, <span className="wikiText">"The control stick can also be directed in diagonal directions, which will allow for more precise movement in the air as well as allowing some attacks to be angled."</span> Characters like Kazuya have certain attacks that require a specific directional input to perform.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Directional Influence (DI)</Accordion.Header>
                        <Accordion.Body>
                            <span className="wikiText">"The control the receiver of an attack has over their trajectory"</span><br /><a href="https://www.ssbwiki.com/Directional_influence">Wiki Link</a><br />
                            This is a very complicated topic with a lot of math involved, but basically, if you get hit, you can hold in a certain direction to influence the way you fly when hit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Rage</Accordion.Header>
                        <Accordion.Body>
                            TLDR; The more damage your character takes, the more damage and knockback your attacks do. <br />
                            Lucario's Aura, Joker's Arsene meter, and Terry's GO meter are some examples of special conditions met only through taking damage and accumulating "rage".
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Ledge trump</Accordion.Header>
                        <Accordion.Body>
                            <span className="wikiText">"Grabbing onto a ledge that has already been grabbed by another player will gently remove them from the ledge"</span><br />
                            Basically, grabbing the ledge while someone else is on it, will cause them to fly a bit off of the ledge, which you can lead into an attack.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>2 Frame</Accordion.Header>
                        <Accordion.Body>
                            <span className="wikiText">"A two frame punish is a mechanic that allows a potential edge guarder to attack an opponent attempting to recover without even leaving the stage, or hardly coming off."</span><br />
                            <span className="wikiText">"When a character grabs the ledge, there are <b>two frames</b>(or 1/30th of a second) of tangibility directly before they grab the ledge"</span><br />
                            Basically, within a 2 frame window when a character is attempting to grab the ledge, you can hit them.<br />
                            This will allow you to continue the edge guard, or get an early kill. 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Container className="position-absolute start-25 my-3 pb-4">
                <h4 className="yellowText mx-1">Useful Links</h4>
                <ListGroup data-bs-theme="dark" variant="flush">
                    <ListGroup.Item action href="https://ultimateframedata.com/smash" className="w-25">
                        Ultimate Frame Data
                    </ListGroup.Item>
                    <ListGroup.Item action href="https://www.ssbwiki.com/" className="w-25">
                        SSB Wiki
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Container>
    )
}

export default Basics