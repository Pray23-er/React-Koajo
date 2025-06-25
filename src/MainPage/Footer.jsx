import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure this is imported for icons
import koajologo from '../assets/logo/logoCyan Blue bg.png';
import './StylingText.css';
import './Footer.css' // Your custom CSS file

function Footer() {
  return (
    <footer
      className="py-0 main-footer-gradient" // Added custom class for gradient
      // Removed inline style here, will define gradient in CSS
    >
      <div className="container text-white py-5">
        {/* CTA Section */}
        <div className="text-center mb-5 pb-4 border-bottom border-secondary">
    
          <h2 className="display-4 fw-bold mb-3">
            Ready for financial possibilities?
          </h2>
          <p className="lead mb-4 px-lg-5">
            Every dollar saved is a step toward a future of security, independence,
            and possibility. No matter how small, your savings today will shape a
            brighter tomorrow.
          </p>
          <button className="btn btn-warning btn-lg rounded-pill px-4 py-2 text-white fw-bold">
            Join the Community →
          </button>
        </div>

        {/* Footer Navigation and Info */}
        {/* Added custom class 'footer-nav-row' for column alignment */}
        <div className="row justify-content-center text-start g-4 pb-4 border-bottom border-secondary footer-nav-row">
          {/* Logo and Tagline */}
          <div className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
          <h1>Koajo</h1>
            <p className="text-white small">Make Online Payment Simple.</p>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="tel:+18884567890" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-phone me-2"></i> {/* Phone icon */}
                  (888) 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@example.com" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-envelope me-2"></i> {/* Envelope icon */}
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Address</h4>
            <ul className="list-unstyled">
              <li>
                <span className="footer-icon-link">
                  <i className="bi bi-geo-alt me-2"></i> {/* Location icon */}
                  410 Sandtown,
                </span>
              </li>
              <li>
                <span className="footer-icon-link">
                  California 9400/USA
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="home.html" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-link-45deg me-2"></i> Home
                </a>
              </li>
              <li>
                <a href="about.html" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-info-circle me-2"></i> About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-grid-fill me-2"></i> Features
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-currency-dollar me-2"></i> Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Utility Pages</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-file-earmark-text me-2"></i> License
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-arrow-clockwise me-2"></i> Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-lock me-2"></i> Password
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none footer-icon-link">
                  <i className="bi bi-exclamation-triangle me-2"></i> 404 Error
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="text-dark py-3 text-center footer-copyright-section">
        <div className="container">
          <p className="mb-2 small">
            ©2025, Koajo. All Rights Reserved.
          </p>
          <p className="small px-lg-5">
            Koajo is a fintech company, Koajo is not a bank, lender, advisor, broker, fund manager, investment agency, MLM scheme, credit repair company, credit reporting agency, money service business, money transmitter, an issuer of stored value product or financial institution. Koajo has no control over the conduct of its users and disclaims any and all liabilities in this regard. Contributions before they are paid out are held with American Express (AMEX). Members' FDIC/FDIC deposit insurance covers accounts held with American Express (AMEX) in the event American Express (AMEX) fails. Koajo does not offer investment returns or shares on savings. Koajo is NOT structured to pool funds for investment purposes or profit making for its users. Users relationship with Koajo is a standalone understanding and their savings are cumulatively paid out to them either in advance or arrears and is neither influenced or reliant on the effort of others.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;