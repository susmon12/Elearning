import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import './Login.scss'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Lottie from 'lottie-react';
import Animation1 from './Animation2.json'
import Animation2 from './Animation.json'

const App = () => {
  const location = useLocation();

  // Access the props passed from the SignUp component
  const signUpProps = location.state;

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`containerr ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-containerr">
        <div className="signin-signup">
            <SignIn/>
            <SignUp/>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <Lottie className='image' animationData={Animation1}/>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <Lottie className='image' animationData={Animation2}/>
        </div>
      </div>
    </div>
  );
};

export default App;
