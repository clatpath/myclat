import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-header">
                <h1>Logo</h1>
            </div>
            <div className="navbarSearchBar">
                <Searchbar />
            </div>
            <div className="nav-btn">
                <Link to="/login">
                    <a className="login-btn">Login</a>
                </Link>
                <Link to="/signup">
                    <a className="signup-btn" href="#">Sign up</a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;