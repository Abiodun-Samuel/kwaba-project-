import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/companyLogo.png";
import "./header.css";

const Header = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    var token = localStorage.getItem("token");
    setToken(token);
  }, [token]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="header-logo" src={logo} alt="company logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="ms-auto navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {token ? (
                <Link className="nav-link btn get-started" to="/dashboard">
                  Get started
                </Link>
              ) : (
                <Link className="nav-link btn get-started" to="/register">
                  Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
