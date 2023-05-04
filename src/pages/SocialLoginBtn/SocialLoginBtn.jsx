import React, { useState } from 'react';
import "./SocialLoginBtn.css";
import { GoogleAuthProvider,getAuth, signInWithPopup,GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { FaGoogle , FaGithub} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLoginBtn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, {replace: true});
        })
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    };

    const  handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch((error) =>{
            const errorMessage = error.message;
        })
    }

    return (
        <div>
            <div className=" social-button-container w-50 mt-3 mb-5">
                <div className="mb-3">
                    <Button onClick={handleGoogleLogin}  variant="primary" className='fw-bold text-white'><FaGoogle className='bg-white text-primary fs-2 p-1'></FaGoogle> Sing in with Google</Button>
                </div>
                <div className="">
                       <Button onClick={handleGithubLogin} variant="dark" className='fw-bold text-white'><FaGithub className='fs-2 p-1'></FaGithub> Sing in with Github</Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLoginBtn;

