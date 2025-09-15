import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            setLoading(false);
            alert("Logged in Successfully");
            
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
        
    }
    return (
        
        <div className="text-center container mt-5 mb-5" style={{ maxWidth: '500px', margin: 'auto' }}>
            <div>
                <h1>Welcome To Fishkart!</h1>
            </div>
            <br />
            <form action="" onSubmit={handleSubmit}>
            
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