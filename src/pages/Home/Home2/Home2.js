import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home2.css'

const Home2 = () => {
    return (
        <div className='mt-5 home2bg'>
            <br></br>
            <h1 className='text-center fw-light text-decoration-underline text-dark'>About Business</h1>
            <br />
            <Container>
                <Row>
                    <Col lg="8">
                        <h1 className=''><span className='about'>About - - - </span>  e<span className='text-danger'>Photography</span>,</h1>
                        <p>If a photograph is worth a thousand words, how does one tell the viewer all about what one is seeing at that second, of something that will never happen again? e<span className='text-danger'>Photography</span> shows the best way to express one’s emotional state; it is like one’s eyes are the lenses and when they blink it is the shutter going off. “It’s one thing to make a picture of what a person looks like; it’s another thing to make a portrait of who they are.”

                            Anyone can take a pretty picture, but it takes a true professional to understand the meaning behind the vision. Visual imagery is the best way to express one’s feelings; it is similar to painting a picture in one click. While having an eye for what makes a good photograph is essential to being a good photographer, they would be nothing without the proper equipment.

                        </p>
                    </Col>
                    <Col lg="4">
                        <div className='m-4'>
                            <div className='mt-1 p-2'>
                                <div className='mt-5'>
                                    <div className='mt-1'>
                                        <h2 className='mt-1 ps-3'>Get Your affordable service here.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home2;