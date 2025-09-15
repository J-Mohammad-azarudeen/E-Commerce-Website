import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Pages/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
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
            <div className=" col-md-12">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                    onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="col-md-12">
                <br />
                <input type="email" className="form-control" id="inputEmail4" placeholder='Your Email'
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col-md-12">
                <br />
                <input type="password" className="form-control" id="inputPassword4" placeholder='Your Password'
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="col-12 text-center">
                <br />
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Log in</button>
                <p>You Don't have a Account? Click <Link to="/SignUp">Sign Up..!</Link></p>
            </div>
        </div>
    )
}

export default Login