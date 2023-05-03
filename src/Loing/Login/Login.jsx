import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 ms-auto mt-5 bg-light p-4 rounded'>
                <h3 className='fw-bold text-warning'>Login your <span className='text-success'>account</span></h3>
                <Form className='mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                    <br></br>
                <Form.Text>
                Don’t Have An Account ?  <Link to="/register" className='text-warning text-decoration-none fw-semibold'>Register</Link>
                </Form.Text>
                </Form>
            
        </Container>
    );
};

export default Login;