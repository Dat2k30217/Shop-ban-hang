import { useEffect, useState } from 'react';

import "./login.css"
const Login = () => {
    return(
      <div>
        <div className='cover '>
            <h1>Login</h1>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <div className='login-btn'>Login</div>
        <br/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>  
    )
}

export default Login