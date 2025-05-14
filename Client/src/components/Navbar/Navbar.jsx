import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
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
                            <Link className="nav-link fs-5 font-monospace fw-semibold text-uppercase" aria-current="page"
                                to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 font-monospace fw-semibold text-uppercase" to='/products'>Products
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="input-group" style={{ width: '300px' }}>
                            <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary h-90" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                    className="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    <ul className="navbar-nav mx-5 mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link fs-5 font-monospace fw-semibold text-uppercase" to='/cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>Cart</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn btn-outline-secondary nav-link fs-5 font-monospace fw-semibold text-uppercase dropdown-toggle"
                                type="button" data-bs-toggle="dropdown">
                                <span>Login</span>

                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item nav-link fs-6 font-monospace fw-semibold text-uppercase"
                                        to="login">Login</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item nav-link fs-6 font-monospace fw-semibold text-uppercase"
                                        to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item nav-link fs-6 font-monospace fw-semibold text-uppercase"
                                        to="/wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                            class="bi bi-heart" viewBox="0 0 16 16">
                                            <path
                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg> My Wish List</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;