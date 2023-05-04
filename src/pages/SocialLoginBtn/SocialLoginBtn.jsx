import React from 'react';
import "./SocialLoginBtn.css"

const SocialLoginBtn = () => {
    return (
        <div>
            <div className=" social-button-container w-50 mt-3 mb-5">
                <div className="">
                    <img
                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        className=" social-button"
                        src="https://i.ibb.co/g9f4P0S/github-btn.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default SocialLoginBtn;
// onClick={handleGithubLogin}
//onClick={handleGithubLogin}
