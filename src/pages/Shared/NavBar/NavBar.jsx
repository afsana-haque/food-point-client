import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {
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
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#deets"><FaRegUserCircle className='fs-2 mx-2' /></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="warning">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavBar;