import React from "react";
import { Container, Accordion, ListGroup } from "react-bootstrap";

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
                        <Accordion.Header>Movement</Accordion.Header>
                        <Accordion.Body>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Dash Dancing</Accordion.Header>
                                    <Accordion.Body>
                                        Wiki: <span className="wikiText">Performed by rapidly tapping the control/analog stick left and right while on the ground, it cancels out the character's initial dashing animation with another animation in the opposite direction, causing the character to quickly and repeatedly dash to the right and left in a short distance.</span><br />
                                        While being an extremely basic technique, I wanted to include it as it provides the player a way to move around in an unpredictable way to bait and punish enemies.<br />
                                        <span className="blueText">NOTE:</span> In Ultimate, they changed some of the mechanics, such as: <span className="wikiText">a new additional initial dash turnaround animation for all characters which is initiated when performing an initial dash in the opposite direction; this animation is similar to the regular initial dash animation, except that at the beginning of animation, characters visibly turn themselves around to face the opposite direction.</span><br />
                                        Basically, this is important to know based on a character's initial dash, as some characters may lose momentum on turnaround, like Captain Falcon.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Foxtrot</Accordion.Header>
                                    <Accordion.Body>
                                        According to the wiki, a foxtrot <span className="wikiText">consists of moving along the ground by repeatedly executing characters' initial dash animation, as opposed to using their full dash. </span><br />
                                        Basically, just tap the control stick in the direction you want to go, and let go before you actually start dashing. This allows you to dash forward and stop without needing to skid to a stop.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Fast falling</Accordion.Header>
                                    <Accordion.Body>
                                        While this may seem like a really basic one, it's extremely important to know how to fast fall, and when to fast fall.<br />
                                        In the wiki, <span className="wikiText">"A fast fall is the act of falling more quickly than usual in mid-air. It is performed by tapping down on the control stick while falling, as long as the character is not tumbling."</span> And, <span className="wikiText">"The character will continue to fast fall until landing on a platform, sustaining knockback, or jumping. Gravity is ignored once a fast fall is begun; the character's downward velocity is simply set to their fast falling speed without accelerating"</span><br />
                                        This can be used with short hops, full hops, or anywhere in the air after you've reached the peak of your jump for landing as quickly as possible.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>PH</Accordion.Header>
                                    <Accordion.Body>
                                        Placeholder
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Cancels</Accordion.Header>
                        <Accordion.Body>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Dash cancel</Accordion.Header>
                                    <Accordion.Body>
                                        Wiki definition:<br /> <span className="wikiText">"Dash-canceling is a technique that, hence the name, cancels a character's dashing animation, which can allow them to perform other actions from it."</span><br />
                                        Thanks to Ultimate being made for babies, <span className="wikiText">"the ability to cancel a full run into virtually any move"</span>, was given to every character.<br />
                                        This means that you can cancel your dash/run by jumping, crouching, shielding, or pretty much any attack. <br />
                                        <span className="blueText">NOTE: </span><br />
                                        <span className="emeraldText">
                                            This also applies to your skid animation (when you let go of the control stick after dashing), and your turnaround animation (inputting the opposite direction while dashing/running).
                                        </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Turnaround Cancel</Accordion.Header>
                                    <Accordion.Body>
                                        This technique is basically the same as dash cancel, but for your turnaround animation.<br />
                                        While dashing, if you input the opposite direction, you will begin your turnaround animation which is slow and leaves you open to attacks.<br />
                                        Essentially, once your turnaround animation starts, you can cancel it by inputting jump, shield, and pretty much all attacks.<br />
                                        <span className="blueText">NOTE: </span><br />
                                        <span className="emeraldText">
                                            A reverse-aerial-rush (RAR), is performed by cancelling your turnaround animation with a jump, then inputting a forward-air; because you have turned around, the forward-air input will become a back-air input.
                                        </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Edge/Ledge Cancels</Accordion.Header>
                                    <Accordion.Body>
                                        Wiki definition: <span className="wikiText">"Involves players sliding off a ledge (platform or stage ledge) either during landing lag or during a special move to cancel the animation."</span><br />
                                        While this tech looks cool, the situations it's used in aren't very common, and in Ultimate, you really only see it used in one or two ways.<br />
                                        <b>Special Move Ledge Cancel</b>:<br />
                                        The wiki says, <span className="wikiText">"Another variant of ledge-canceling involves using a special move on the ground from a certain distance from a ledge to cancel the special move animation"</span>.<br />
                                        This applies to a few key moves in the game, but not all of them. Ganondorf's down special and Palutena's up special are able to be spaced so that when the ending animation of their move starts, they are already at the edge. Then, once the ending animation of their attack starts, they begin to fall which cancels the attack animation, and allows you to input another action immediately after falling off the ledge. <br />
                                        <b>Jump Squat Ledge Cancel</b>:<br />
                                        When your character does a jump, there are a few frames of "jumpsquat" they go through before they actually jump.<br />
                                        So, when walking/running off of a ledge, there is a 4 frame window where you can jump and not have any jumpsquat lag. This allows characters to input attacks immediately after jumping instead of waiting for jumpsquat to occur, you can use an attack the first frame you leave the ground. <br />
                                        However, since there is no jumpsquat, you will automatically full hop. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Auto-Cancel</Accordion.Header>
                                    <Accordion.Body>
                                        Wiki definition: <span className="wikiText">"Landing during the beginning or ending frames of an aerial attack, which will make the player go into their normal landing animation from a jump (of which the landing lag tends to be around 2-6 frames depending on the character), thereby circumventing the landing lag that would have occurred had the character instead landed during the middle of that attack's animation"</span><br />
                                        Essentially, there's a small window that allows you to cancel your landing lag and it happens automatically. <br />
                                        The biggest problem with auto-canceling is that every aerial has a different window for auto-canceling. <br />
                                        The wiki says: <span className="wikiText">"Most aerial attacks can be auto-cancelled during both the first few frames and the last few frames of the attack's animation; however, some attacks do not have an initial auto-cancel window, a late auto-cancel window, or even both."</span> <br />
                                        These timings must be memorized if you want to utilize them well. (I personally don't have these memorized when I probably should)
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Special moves</Accordion.Header>
                        <Accordion.Body>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Turnaround Special (B-Turnaround/Turnaround-B)</Accordion.Header>
                                    <Accordion.Body>
                                        <span className="wikiText">"A turnaround-B will cause the character to change the direction they are facing right before starting the special move."</span><br />
                                        To do a turnaround special, you must input the opposite direction for a short time, then input the special move. In Ultimate, it is possible to do a turnaround special on the ground as well by using a dash cancel.<br />
                                        <span className="blueText">NOTE:</span><br />
                                        <span className="emeraldText">This technique will allow you to change the direction you are facing without changing your forward momentum.</span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>B Reverse</Accordion.Header>
                                    <Accordion.Body>
                                        <span className="wikiText">"To execute a B-reverse, the player must input a special move, then quickly tap the direction opposite the one they are facing"</span><br />
                                        <span className="blueText">NOTE: </span><br />
                                        <span className="wikiText">In Ultimate, the direction input must be within 4 frames of the special input</span><br />
                                        <span className="blueText">NOTE:</span><br />
                                        <span className="emeraldText">This technique allows you to change the direction you're facing as well as change your forward momentum.</span><br />
                                        While researching b-reverse, I found out that there are some moves that cannot be "b-reversed", such as Captain Falcon's falcon punch. While you can attempt to do so, it results in a different attack. <br />
                                        Unfortunately the only source I found was this <a href="https://www.reddit.com/r/smashbros/comments/czc2vi/a_complete_list_of_every_move_in_ultimate_that/">reddit thread</a>, so if it ever gets deleted we're SOL.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Wavebounce</Accordion.Header>
                                    <Accordion.Body>
                                        <span className="wikiText">"Performing a wavebounce is actually a matter of performing both a turnaround B and a B reverse within the same special move"</span><br />
                                        
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Container className="position-absolute start-25 my-3 pb-4">
                <h4 className="pinkText mx-1">Useful Links</h4>
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

export default Tech