import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import SocialLoginBtn from '../../SocialLoginBtn/SocialLoginBtn';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Container className='w-50 ms-auto mt-5 bg-light p-4 rounded'>
                <h3 className='fw-bold text-warning'>Login your <span className='text-success'>account</span></h3>
                <Form onSubmit={handleLogin} className='mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                    <br></br>
                <Form.Text>
                Don’t Have An Account ?  <Link to="/register" className='text-warning text-decoration-none fw-semibold'>Register</Link>
                </Form.Text>
                <SocialLoginBtn></SocialLoginBtn>
                </Form>
            
        </Container>
    );
};

export default Login;