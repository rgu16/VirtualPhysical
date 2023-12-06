import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { IconEye, IconEyeInvisible} from '../components';
import './pages.css'
import axios from 'axios';

const RegisterPage = (props) => {
    const [newUser, setNewUser] = useState({email: '', password: '', name:'', accountType:'physician'});
    const [navigate, setNavigate] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();

    const handleToggle = () => {
      setShowPassword(!showPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method:"POST",
          url: props.proxy + "/register",
          data:{
            email: newUser.email,
            password: newUser.password,
            name: newUser.name,
            accountType: newUser.accountType
          }
        })
        .then((response)=>{
          props.setToken(response.data.access_token)
          setNavigate('/')
        }).catch((error)=>{
          if(error.response){
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            setError(error.response)
          }
        })
        setNewUser({email: '', password: '', name:'', accountType:''});
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
          ...newUser,
          [name]: value,
        });
    };

    return (
        <div className="auth-form-container">
            {error? <p>{error.data["msg"]}</p> : null}
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={newUser.name} name="name" onChange={handleInputChange} id="name" placeholder="John Doe" autoComplete="off" required/>
            <label htmlFor="email">Email</label>
            <input value={newUser.email} onChange={handleInputChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" autoComplete="off" required/>
            <label htmlFor="password">Password</label>
            <div className = 'password-container'>
              <input value={newUser.password} onChange={handleInputChange} type={showPassword? "text": "password"} placeholder="********" id="password" name="password" required/>
              <button onClick={handleToggle} type="button">
                {showPassword? <IconEye  width='32px' height='32px' color='darkgray'/> : <IconEyeInvisible width='32px' height='32px' color='darkgray'/> }
              </button>
            </div>
            <label htmlFor="account-type">Account type</label>
            <label>
              <input type='radio' name="accountType" value='physician' onChange={handleInputChange} checked={newUser.accountType === 'physician'}/>
              Specialty Physician
            </label>
            <label>
              <input type='radio' name="accountType" value='non-physician' onChange={handleInputChange} checked={newUser.accountType === 'non-physician'}/>
              Non-physician
            </label>
            <button className='primary-button' id="reg_btn" type="submit"><span>Register</span></button>
        </form>
        <Link to="/"><button className='link-btn'>Already have an account? Login here.</button></Link>
        {navigate ? (<Navigate replace to= {navigate} />) : null}
    </div>
    )
}

export default RegisterPage

