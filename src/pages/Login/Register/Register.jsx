import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = event => {
        event.preventDefault();
        if ((password) < 6) {
            console.log("okay tikh ace ");
          } else {
            setError("password tikh nai");
            return;
          }
      
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <Container className='w-50 ms-auto mt-5 bg-light p-4 rounded'>
            <h3 className='fw-bold text-warning'>Register your <span className='text-success'>account</span></h3>
            <Form onSubmit={handleRegister} className='mt-5'>
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
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
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