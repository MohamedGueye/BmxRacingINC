import React from 'react';
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">

            {/**Logo */}
            <Link to="/">
            <img className="register__logo" src="https://cdn.shopify.com/s/files/1/0017/3791/6514/files/Navbar-Logo_600x.png?v=1547046068" alt="" />
            </Link>

            <div className="register__container">
                <h1>Create Account</h1>

                <form>
                    <h5>First Name</h5>
                    <input type="text" />

                    <h5>Last Name</h5>
                    <input type="text" />

                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="register__Button">Create Account</button>
                </form>

                <p>
                    By creating an account you agree to the BMX Racing's Conditions
                    of Use & Sale. Please see our Privacy Notice, our 
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
            </div>

        </div>
    )
}

export default Register;
