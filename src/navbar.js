import React from "react";
import './assets/css/style.css';


function navBar() {
return (
    <nav id="top-navbar" className="row navbar navbar-expand navbar-dark bg-dark">
                <ul className="navbar-nav collapse navbar-collapse">
                    <img src="./assets/images/7547889.png" className="header-icon" alt="Space Builder logo" />
                    <a className="navbar-brand title" href="#">Space Builder</a>
                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                </ul>
            </nav>

);
}

export default navBar;