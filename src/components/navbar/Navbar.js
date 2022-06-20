import React from "react";
import {Link} from "react-router-dom";

let Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark navbar-expand-sm bg-success">
            <Link to="/" className="navbar-brand">  <i className="fa fa-shopping-cart"></i> Big basket</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav mx-3">
                <li className="nav-item ">
                    <Link to="/" className="nav-link ">Home</Link>
                </li>
                </ul>
                <ul className="navbar-nav mx-3">
                <li className="nav-item">
                    <Link to="/productList" className="nav-link">Products List</Link>
                </li>
                </ul>
                <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin</Link>
                </li>
                </ul>
            </div>
            </nav>
        </React.Fragment>
    )
};

export default Navbar;