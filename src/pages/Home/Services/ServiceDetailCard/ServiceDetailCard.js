import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import ServiceDetailCardReviews from '../ServiceDetailCardReviews/ServiceDetailCardReviews';
import './ServiceDetailCard.css'

const ServiceDetailCard = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        const photo = user?.photoURL;

        const reviewer = {
            service: _id,
            serviceName: title,
            price,
            reviewer: name,
            email,
            message,
            photo

        }

        fetch('http://localhost:1000/reviewers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review successfully given. Please refresh to see your review.')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            <Container className='container my-5'>
                <Row>
                    <Col lg="7">

                        <Card style={{ width: '30rem' }}>
                            <h3 className='text-center text-muted mt-3'>{title} Details</h3>
                            <PhotoProvider>
                                <PhotoView variant="top" src={img}>
                                    <img src={img} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <p className='description'>{description}</p>
                                </Card.Text>
                                <h6 className='text-success'>Price: ${price}</h6>
                                <Link>
                                    <Button variant="primary">Hire Now!</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* review section */}

                    <Col className='mt-4' lg="4">
                        <h3 className='text-center text-decoration-underline mb-5'>Review Section</h3>
                        <ServiceDetailCardReviews _id={_id}></ServiceDetailCardReviews>
                        <br />
                        <br />
                        <h4 className='text-center text-decoration-underline'>Your Review</h4>
                        {
                            user?.email ?
                                <>
                                    <Form onSubmit={handlePlaceReview}>
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control name="firstName" type="name" placeholder="First Name" />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="lastName" type="name" placeholder="Last Name" />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="email" type="email" placeholder="Your email" defaultValue={user?.email} readOnly />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="phone" type="name" placeholder="Phone Number" required />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Your Review</Form.Label>
                                            <Form.Control name="message" type="name" placeholder='write something' required></Form.Control>
                                        </Form.Group>


                                        <Button className='mt-3' variant="primary" type="submit" value="Give Your Review">
                                            Submit
                                        </Button>
                                    </Form>
                                </>
                                :
                                <div>
                                    <Form onSubmit={handlePlaceReview}>
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control name="firstName" type="name" placeholder="First Name" disabled />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="lastName" type="name" placeholder="Last Name" disabled />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="email" type="email" placeholder="Your email" defaultValue={user?.email} readOnly disabled />
                                            <Form.Label></Form.Label>
                                            <Form.Control name="phone" type="name" placeholder="Phone Number" required disabled />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Your Review</Form.Label>
                                            <Form.Control name="message" type="name" placeholder='write something' required disabled></Form.Control>
                                        </Form.Group>


                                        <Button className='mt-3' variant="primary" type="submit" value="Give Your Review" disabled>
                                            Submit
                                        </Button>
                                    </Form>
                                    <br />
                                    <h5>Please <Link to='/login'>Login</Link> to give your review</h5>
                                </div>
                        }

                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default ServiceDetailCard;