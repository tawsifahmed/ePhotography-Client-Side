import React, { useContext, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, providerLogin, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register');

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5 pt-5'><Spinner className='mt-5' animation="border" variant="primary" /></div>
    }


    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password, displayName, photoURL)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://a11-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': ' application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                    })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    };

    return (
        <Container className='container'>
            <Row>
                <Col lg="4">

                </Col>
                <Col className='border p-4 bg-light' lg="4">
                    <h4 className='text-center text-decoration-underline'>Register Form</h4>
                    <Form onSubmit={handleSubmit} className='mb-3'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="name" type="name" placeholder="Full Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Photo Url" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className='text-center'><Button variant="primary" type="submit">
                            Register
                        </Button></div>

                        <Form.Text className="text-danger text-center">
                            {error}
                        </Form.Text>

                        <div className='mb-2 mt-3'>
                            <h5 className='text-center'>Or sign up with,</h5>
                            <div className='text-center d-flex justify-content-center'>
                                <Button onClick={handleGoogleSignIn} className='rounded d-flex' variant="outline-primary"><FaGoogle className='mt-1'></FaGoogle> <h5 className='mb-1'>oogle</h5></Button>
                            </div>
                        </div>

                        <p className='text-center'>Already have an account? Then, <Link to='/login'>Login.</Link></p>
                    </Form>

                </Col>

                <Col lg="4">

                </Col>
            </Row>


        </Container>
    );
};

export default Register;