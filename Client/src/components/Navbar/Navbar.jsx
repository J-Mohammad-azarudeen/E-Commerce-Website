import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Pages/firebase";
import { deleteUser } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser);
            setUser(currentUser);
        });
        return () => unsub();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
        navigate("/");
        window.location.href = "/";
    };

    //user can delete account
    const handleDeleteAccount = async () => {
        if (auth.currentUser) {
            await deleteUser(auth.currentUser);
            alert("Account deleted successfully!");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-transparent " style={{ backdropFilter: 'blur(15px)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="container-fluid">
                <Link className="navbar-brand " to='/'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIRDqzYAy5Hdl3vgp3y6SA-dWUe9tVwJttA&s"
                        width='150' height='60' className='mx-5' alt="Logo" />
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2" aria-current="page"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                to='/products'>Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                to='/aboutus'>About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                to='/contactus'>Contact
                            </Link>
                        </li>
                    </ul>
                    {/*  Search Form  */}
                    <form className="d-flex" role="search">
                        <div className="input-group">
                            <input type="search" className="form-control w-[300px] " placeholder="Search" aria-label="Search" style={{ width: "600px" }} />
                            <button className="btn btn-outline-primary h-90" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18" fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    <ul className="navbar-nav mx-1 mx-lg-5 mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                to='/cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    className="bi bi-cart3" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                style={{ transition: '0.3s' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} to="/wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    className="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">

                        {/* <li className="nav-item dropdown">
                            <button
                                className="btn nav-link fs-4 font-monospace fw-semibold text-uppercase dropdown-toggle rounded-2"
                                type="button"
                                data-bs-toggle="dropdown"
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a5a1a1'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            // style={{ backgroundColor: '#a5a1a1' }}
                            >
                                <span>Login</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item fs-6 font-monospace fw-semibold text-uppercase" to="login">Login</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item fs-6 font-monospace fw-semibold text-uppercase" to="/signup">Sign Up</Link>
                                </li>

                            </ul>
                        </li> */}

                        {user ? (
                            // If logged in
                            <li className="nav-item">
                                <button
                                    className="btn nav-link fs-4 font-monospace fw-semibold text-uppercase rounded-2"
                                    onClick={handleLogout}
                                    style={{ transition: "0.3s" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#a5a1a1")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "transparent")
                                    }
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            // If NOT logged in
                            <li className="nav-item dropdown">
                                <button
                                    className="btn nav-link fs-4 font-monospace fw-semibold text-uppercase dropdown-toggle rounded-2"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#a5a1a1")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "transparent")
                                    }
                                >
                                    <span>Login</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item fs-6 font-monospace fw-semibold text-uppercase"
                                            to="/login"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item fs-6 font-monospace fw-semibold text-uppercase"
                                            to="/signup"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;