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
                            According to the wiki, <span className="coralText">"Buffering is a game mechanic in which a player may input an action shortly before it can be executed in-game, resulting in the action being carried out on the first possible frame."</span><br />The Buffer system is how the game reads and stores inputs. In other words, the game will allow you to input an action before your current action is completed. This allows players to string together multiple actions in a row, allowing for frame perfect combos and movement.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="">
                        <Accordion.Header>Invincibility</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="coralText">"A state where a hurtbox cannot be attacked or damaged, attacks will connect, but will not deal damage, knockback, or hitstun, though the attacker will still experience hitlag"</span><br />Essentially, this means that the character with invincibility can be hit(Will display a hit, small circle), but will be unaffected otherwise.(Can still be affected by windboxes though.)<br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Intangibility</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="coralText">"A state in which a hurtbox will not be hit by attacks at all."</span><br />This is what happens when you roll, spot dodge, or grab ledge. All attacks will pass through the player (No hit display, no circle) <br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Armor</Accordion.Header>
                        <Accordion.Body>
                            Wiki definition: <span className="coralText">"The concept of sustaining hitlag and damage, but not sustaining any knockback or sustaining reduced knockback"</span><br />
                            Types of armor:<br />
                            <b>Super armor:</b> <br />
                            <span className="coralText">When a character has <b>super armor</b>, or <b>infinite knockback resistance</b>, they will not flinch or take any knockback when attacked by harmful hitboxes, but flinchless hitboxes (like "windboxes") will still move the character.</span><br />
                            This is the armor that you get when using a heavy attack such as DK Punch, Ganon Warlock Punch, and King K Rool's belly(Called Belly Super armor). <br />
                            <b>Damage based armor:</b> <br />
                            <span className="coralText">The wiki has a really long winded explanation of this, so if you want to learn more about it, here's the <a href="https://www.ssbwiki.com/Armor">link to the wiki</a></span><br />
                            Basically, this is armor that you can break through with enough damage. The character will still take damage, but won't take knockback unless enough damage is dealt to break through this armor type. An example of this would be Pirhana Plant's "pot armor" when using down B. <br />
                            <b>Knockback based armor:</b> <br />
                            <span className="coralText">"This mechanic is used to prevent opponents from being knocked back unless it reaches a certain threshold in units."</span><br />
                            This type of armor is basically irrelevant in Ultimate, so don't worry about it, I just included it to be thorough.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Sweetspot & Sourspot</Accordion.Header>
                        <Accordion.Body>
                            <b>Sweetspot</b>:<br />
                            <span className="coralText">The sweet spot of an attack is the area of the hitbox with the most desirable knockback effect - usually, the most powerful part of the attack.</span><br />
                            This is pretty self explanatory, but basically, the part of an attack that does the most. <br />Some examples of this are Marth's sword tip and Captain Falcon's knee point. <br />
                            <b>Sourspot</b>:<br />
                            <span className="coralText">A sour spot is the exact opposite of a sweet spot; an area with the least powerful part of the attack</span><br />
                            Again, pretty self explanatory, but basically, the part of an attack that does not do the most. <br />Some examples of this are Luigi up B, and anywhere on Marth's sword that isn't the tip. <br />
                            <b>Note:</b><br />
                            These are important to know because while a sourspot may sound like a bad thing, there are times where you wouldn't want to hit an opponent with a sweet spot. <br />An example of this would be to use the sourspot to line the opponent up for another attack, which wouldn't be possible if they took the knockback from a sweet spot hit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Stale-move Negation</Accordion.Header>
                        <Accordion.Body>
                            <span className="coralText">Refers to how moves cause less damage and knockback as they are used multiple times in a row.</span><br />
                            There is a "queue" type of system in place, and this is how the game keeps track of how stale a move is. There are 9 slots for this queue, so if you use a move and then use 9 moves after it, it will become 'fresh' and do full knockback and damage.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Container>
    )
}

export default Basics