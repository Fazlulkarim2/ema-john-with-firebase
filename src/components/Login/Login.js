import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {user,signInUsingGoogle} =useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from =location.state?.from?.pathname || "/shop";
    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result=>{
            navigate(from,{replace:true});
        })
    }
    return (

        <div className='login-form'>
            <div>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
             <input type="submit" value="Submit" />
             </form>  
             <p>new to ema-john website?</p><Link to="/register">Create Account</Link>
             <div>
                 -----------or---------------
             </div>
             <button className='btn-regular'
             onClick={handleGoogleLogin}
             >
                Google Sign In 
             </button>
            </div>
        </div>
    );
};

export default Login;