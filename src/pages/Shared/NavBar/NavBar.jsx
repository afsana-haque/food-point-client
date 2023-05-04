import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import img from "../../../assets/img.png"
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () =>{
        logout()
        .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold text-warning'>Food<span className='text-success'>Point</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" className='text-decoration-none px-2 text-secondary py-3'>Home</Link>
                            <Link to="/blog" className='text-decoration-none px-2  py-3 text-secondary'>Blog</Link>
                            <Link to="/register" className='text-decoration-none px-2  py-3 text-secondary'>Registration</Link>
                            <Link><img className='img mx-3 my-2' src={img} alt="" /></Link>
                            {
                                user ? <Link><Button onClick={handleLogout}  variant='warning' className='my-2'>Logout</Button></Link> : <Link to="/login">
                                    <Button variant="warning" className='my-2'>Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;

