import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../../src/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {


    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center' as={Link} to="/">
                        <img
                            src={logo}
                            width="100"

                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        <h3>ePhotography</h3>
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

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;