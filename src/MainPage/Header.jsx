import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import koajologo from '../assets/logo/logogradientbg.png';

function Header() {
  return (
    <header className="fixed-top bg-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={koajologo}
              alt="Koajo Logo"
              style={{ height: '30px', width: 'auto' }}
              className="d-inline-block align-top me-2 koajo-logo"
            />
            <span className="fw-bold text-dark">Koajo</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/faq">
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/blog">
                  Blog & Press
                </Link>
              </li>
              
            </ul>

            <ul className="navbar-nav align-items-lg-center ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-secondary" to="/login">
                  Login Account
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to="/loginlayout">
                  <button className="btn btn-warning rounded-pill px-4">
                    Get Started <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;