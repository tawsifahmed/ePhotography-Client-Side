import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetailCard = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message

        }
    }

    return (
        <div>
            <Container className='container my-5'>
                <Row>
                    <Col lg="7">
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {description}
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
                        <h2 className='text-center text-decoration-underline mb-5'>Review Section</h2>
                        <Form onSubmit={handlePlaceReview}>
                            <h3 className='text-center text-muted'>{title}</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label></Form.Label>
                                <Form.Control name="firstName" type="name" placeholder="First Name" />
                                <Form.Label></Form.Label>
                                <Form.Control name="lastName" type="name" placeholder="Last Name" />
                                <Form.Label></Form.Label>
                                <Form.Control name="email" type="email" placeholder="Your email" defaultValue={user?.email} readOnly />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Your Review</Form.Label>
                                <Form.Control name="message" placeholder='write something'></Form.Control>
                            </Form.Group>


                            <Button variant="primary" type="submit" value="Give Your Review">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default ServiceDetailCard;