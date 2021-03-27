import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className="formContainer">
            <form className="loginForm">
                <h1 className="formHeader">Log in</h1>
                <label for="Email">Email</label>
                <input name="Email" type="email" required />
                <label for="Password">Password</label>
                <input name="Password" type="password" required />
                <button className="loginButton" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;