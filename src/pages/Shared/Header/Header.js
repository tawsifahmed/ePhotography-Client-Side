import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../../src/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {


    const { user, logOut, providerLogin } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    };

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center me-3' as={Link} to="/">
                        <img
                            src={logo}
                            width="90"

                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        <h3>e<span className='text-danger fst-italic text-opacity-75'>Photography</span></h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                user?.email ?
                                    <>

                                        <Nav.Link >
                                            <Link>Add Service</Link>
                                        </Nav.Link>
                                        <Nav.Link >
                                            <Link to='/reviews'>Reviews</Link>
                                        </Nav.Link>
                                    </>
                                    :
                                    <></>

                            }
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {
                                    user?.email ?
                                        <>
                                            <Button variant="link" onClick={handleLogOut}>Logout</Button>

                                        </>
                                        :
                                        <>
                                            <Link className='me-2' to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }




                            </Nav.Link>
                            <Nav.Link>
                                {user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}>

                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand className='d-none'>Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonGroup>
                                {user?.email ?
                                    <>
                                        <div className='d-none'>
                                            <h2>ss</h2>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Button onClick={handleGoogleSignIn} className='me-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Log in</Button>


                                    </>
                                }
                            </ButtonGroup>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;