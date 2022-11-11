import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }


    return (
        <Container className='container'>
            <Row>
                <Col lg="4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button onSubmit={handleSubmit} variant="primary" type="submit">
                            Login

                        </Button>
                        <br></br>
                        <Form.Text>
                            New to this site? Then, <Link to='/register'>Register.</Link>
                        </Form.Text>
                    </Form>
                </Col>
                <Col lg="4">

                </Col>
            </Row>


        </Container>

    );
};

export default Login;