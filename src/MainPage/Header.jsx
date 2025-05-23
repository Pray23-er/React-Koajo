import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    // Import Bootstrap's JavaScript to enable features like the navbar toggler.
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        // Bootstrap JavaScript is loaded, you can optionally do something here.
      })
      .catch(error => {
        console.error('Failed to load Bootstrap JavaScript:', error);
      });
  }, []);

  return (
    <header className="fixed-top bg-light py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Koajo Brand/Logo - naturally on the left */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* Replace with your actual logo image or text */}
            <img
              alt="Your Logo"
              height="30"
              className="d-inline-block align-top me-2"
              // src="/path/to/your/logo.png" // Add your logo src here
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
            {/* Main Navigation Links - Centered with space in between */}
            {/* Using me-auto on this ul will push the next ul to the far right */}
            <ul className="navbar-nav mx-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/"> {/* Added me-4 for spacing */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/about"> {/* Added me-4 for spacing */}
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/faq"> {/* Added me-4 for spacing */}
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark me-4" to="/blog"> {/* Added me-4 for spacing */}
                  Blog & Press
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/career">
                  Career
                </Link>
              </li>
            </ul>

            {/* Login and Get Started Buttons - Pushed to extreme right */}
            <ul className="navbar-nav align-items-lg-center ms-auto"> {/* Added ms-auto to push this group to the far right */}
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