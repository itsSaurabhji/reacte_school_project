import React from "react";

// Navigation component
const Navbar = () => {
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle nav</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">floobyte WEBSITE DEMO</a>
                </div>
                <div className="navigation collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li className="current"><a href="#intro">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">FACILITIES</a></li>
                        <li><a href="#portfolio">GALLERY</a></li>
                        <li><a href="#team">School Details</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;














