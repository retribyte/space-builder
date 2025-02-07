import React from 'react';
import logo from 'assets/images/7547889.png';
import { Link } from 'react-router-dom';
import UserDisplay from 'src/UserDisplay';

function Navbar() {
    return (
        <nav className="row navbar navbar-expand navbar-dark bg-dark m-0">
            <ul className="navbar-nav collapse navbar-collapse">
                <li className='nav-item logo'>
                    <img src={logo} className="header-icon" alt="Space Builder logo" />
                    <Link to="/" className="navbar-brand title">Space Builder</Link>
                </li>
                <li className="nav-item"><Link to="system" className="nav-link">System</Link></li>
                <li className="nav-item"><Link to="galaxy" className="nav-link">Galaxy</Link></li>
                <span style={{marginLeft: 'auto'}}><UserDisplay /></span>
            </ul>
        </nav>
    );
}

export default Navbar;
