import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        
        <div className="text-center container mt-5 mb-5" style={{ maxWidth: '500px', margin: 'auto' }}>
            <div>
                <h1>Welcome To Fishkart!</h1>
            </div>
            <br />
            <form action="">
            
            <div class="col-md-12">
            <br />
                <input type="email" class="form-control" id="inputEmail4" placeholder='Your Email' required />
            </div>
            <div class="col-md-12">
                <br />
                <input type="password" class="form-control" id="inputPassword4" placeholder='Your Password' required />
            </div>
            <div class="col-12 text-center">
                <br />
                <button type="submit" class="btn btn-primary">Log in</button>
                
                <p>You Don't have a Account? Click <Link to="/SignUp">Sign in..!</Link></p>
            </div>
            </form>
        </div>
    )
}

export default Login