import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">

            {/**Logo */}
            <Link to="/">
            <img className="login__logo" src="https://cdn.shopify.com/s/files/1/0017/3791/6514/files/Navbar-Logo_600x.png?v=1547046068" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password"/>

                    <button type="submit" className="login__signInButton">Sign-In</button>
                </form>

                <p>
                    By signing-in you agree to the BMX Racing's Conditions
                    of Use & Sale. Please see our Privacy Notice, our 
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to="/register">
                <button className="login__registerButton">Create Account</button>
                </Link>
            </div>

        </div>
    )
}

export default Login;
