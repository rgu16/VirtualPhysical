import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { IconEye, IconEyeInvisible} from '../components';
import './pages.css';
import axios from 'axios';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
      setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method:"POST",
          url: props.proxy + "/token",
          data:{
            email: email,
            password: password
          }
        })
        .then((response)=>{
          props.setToken(response.data.access_token)
          setNavigate('/home')
        }).catch((error)=>{
          if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
        setEmail('');
        setPassword('');
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" autoComplete="off" required/>
                <label htmlFor="password">Password</label>
                <div className = 'password-container'>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword? "text": "password"} placeholder="********" id="password" name="password" required/>
                  <button onClick={handleToggle} type="button">
                    {showPassword? <IconEye  width='32px' height='32px' color='darkgray'/> : <IconEyeInvisible width='32px' height='32px' color='darkgray'/> }
                  </button>
                </div>
                <button className='primary-button' id="reg_btn" type="submit"><span>Log In</span></button>
            </form>
            <Link to="/register"><button className='link-btn'>Don't have an account? Register here</button></Link>
            <Link to="/forgot-password"><button className='link-btn'>Forgot your password?</button></Link>
            {navigate ? (<Navigate replace to= {navigate} />) : null}
        </div>
    );
}

export default LoginPage
