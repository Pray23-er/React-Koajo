import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    // Import Bootstrap's JavaScript to enable features like the navbar toggler.
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        // Bootstrap JavaScript is loaded, you can optionally do something here.
        // For example, you could initialize any Bootstrap components if needed.
      })
      .catch(error => {
        console.error('Failed to load Bootstrap JavaScript:', error);
        // Handle the error appropriately, e.g., display a message to the user.
      });
  }, []);

  return (
    <header className="fixed-top bg-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* Replace with your actual logo image or text */}
            <img
              alt="Your Logo"
              height="30"
              className="d-inline-block align-top me-2"
            />
            <span className="fw-bold text-dark">Korio</span>
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/faq">
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="nav-link text-secondary" to="/login">
                  Login Account
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link to="/createaccount">
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
