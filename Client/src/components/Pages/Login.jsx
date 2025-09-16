import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Pages/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            navigate("/"); // redirect home
        } catch (error) {
            alert(error.message);
        }
    };


    return (

        <div className="text-center container mt-5 mb-5" style={{ maxWidth: '500px', margin: 'auto' }}>
            <div>
                <h1>Welcome To Fishkart!</h1>
            </div>
            <br />
            <form
                action=""
                onSubmit={handleSubmit}
                ref={formRef}
            >

                <div class="col-md-12">
                    <br />
                    <input type="email" name='email' class="form-control" id="inputEmail4" placeholder='Your Email' required />
                </div>
                <div class="col-md-12">
                    <br />
                    <input type="password" name='password' class="form-control" id="inputPassword4" placeholder='Your Password' required />
                </div>
                <div class="col-12 text-center">
                    <br />
                    <button type="submit" class="btn btn-primary">{loading ? "logging" : "Log in"}</button>

                    <p>You Don't have a Account? Click <Link to="/SignUp">Sign in..!</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
