import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from'../../Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
                <div className="header-logo">
                    <img  src={logo} alt=""/>
                </div>
                <div className="header-text">
                    <ul>
                        <li><a href="/search"> <input type="search" placeholder="Search Your destination"/> </a></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login"className="bg-warning text-black">Log in</Link></li>
                        
                    </ul>
                </div>
        </div>
    );
};

export default Header;