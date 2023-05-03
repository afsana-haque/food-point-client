import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    // const {createUser} = useContext;
    return (
        <Container className='w-50 ms-auto mt-5 bg-light p-4 rounded'>
            <h3 className='fw-bold text-warning'>Register your <span className='text-success'>account</span></h3>
            <Form className='mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                Register
                </Button>
                <br></br>
                <Form.Text>
                    Already Have An Account ? <Link to="/login" className='text-warning text-decoration-none fw-semibold'>Login</Link>
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;