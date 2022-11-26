import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Home3.css'

const Home3 = () => {
    const notify = () => toast("Email subscription done.");

    const handleSubscribe = event => {
        event.preventDefault();
        const form = event.target;
        form.reset();
        notify();

    }



    return (
        <div className='home3bg'>
            <br></br>
            <Container>
                <h1 className='text-center fw-light text-decoration-underline text-dark'>Other Informations</h1>
                <br />
                <br></br>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="profile" title="Profile">
                        <div>
                            <p><span className='fw-semibold'>Company Name:</span> ePhotography</p>
                            <p><span className='fw-semibold'>Owner:</span> T Ahmed</p>
                            <p><span className='fw-semibold'>Awards:</span> Best Street Photographer 2022 - Dhaka, Best Pet Photographer 2021 - Bangladesh, SPARKX Best Portrait Photographer 2018.
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="pricing" title="Pricing">
                        <div>
                            <p className='fw-semibold'>About our pricing:</p>
                            <p>We charge the lowest in the market of business photography, despite our quality in premium level.</p>
                            <p>Kindly look though our services in the service section, you will get an idea about our cheap pricing.</p>
                        </div>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Contact Info">
                        <div>
                            <p><span className='fw-semibold'>Physical Address:</span> Dhanmondi 32 Road Bridge, Dhaka, Bangladesh </p>
                            <p><span className='fw-semibold'>Email Address:</span> idforwebdev@gmail.com</p>
                            <p><span className='fw-semibold'>Tele:</span> +88090102400, +8801521123123 <span className='fst-italic fw-light'>( kindly call between 9AM - 10PM )</span></p>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="FAQ">
                        <div>
                            <p><span className='fw-semibold'>Do I provide photography learning courses here?</span> Answer: No, I provide various type of photography services based on contract.</p>
                            <p><span className='fw-semibold'>Do I stay on my physical office?</span>Answer: Mostly no, as because of busy schedule.</p>
                            <p><span className='fw-semibold'>Am I available over the phone?</span>Answer: Yes, as per the contact info, I am available in those times.</p>
                        </div>
                    </Tab>
                </Tabs>
                <br />
                <hr />
                <br></br>
                <div className='container'>
                    <h3 className='text-center'>Get my daily Updates</h3>
                    <h5 className='text-center fw-light'>I give my updates daily at night, 10PM.
                        To get my updates, subscribe here.

                    </h5>
                    <Row>
                        <Col lg="4">

                        </Col>
                        <Col className='py-4 px-4' lg="4">

                            <Form onSubmit={handleSubscribe} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control className='py-2 text-center' name="email" type="email" placeholder="Enter your email address" required />
                                </Form.Group>



                                <div className='text-center'>
                                    <Button onSubmit={notify} variant="primary" type="submit">
                                        Subscribe!
                                    </Button>
                                    <ToastContainer />
                                </div>
                                <Form.Text className="text-danger">

                                </Form.Text>


                            </Form>
                        </Col>

                        <Col lg="4">

                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default Home3;