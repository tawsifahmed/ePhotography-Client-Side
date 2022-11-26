import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';


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
                setError('');
                navigate(from, { replace: true })


            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    };


    return (
        <Container className='container'>
            <Row>
                <Col lg="4">

                </Col>
                <Col className='border py-4 px-4 bg-light' lg="4">
                    <h4 className='text-center text-decoration-underline'>Login Form</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>

                        <div className='text-center'>
                            <Button onSubmit={handleSubmit} variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                        <div className='mb-2 mt-3'>
                            <h5 className='text-center'>Or Log in with,</h5>
                            <div className='text-center d-flex justify-content-center'>
                                <Button onClick={handleGoogleSignIn} className=' rounded d-flex' variant="outline-primary"><FaGoogle className='mt-1'></FaGoogle> <h5 className='mb-1'>oogle</h5></Button>
                            </div>
                        </div>

                        <p className='text-center'> New to this site? Then, <Link to='/register'>Register.</Link></p>

                    </Form>
                </Col>

                <Col lg="4">

                </Col>
            </Row>


        </Container>

    );
};

export default Login;