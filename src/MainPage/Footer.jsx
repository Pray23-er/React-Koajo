import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Assuming you have a white logo for dark backgrounds

function Footer() {
  return (
    <footer
      className="py-0" // Removed top/bottom padding from main footer to control sections better
      style={{
        background: 'linear-gradient(to bottom right, #004d40, #ff8c42)', // Applied the requested gradient background
      }}
    >
      <div className="container text-white py-5"> {/* Added py-5 here for the main content */}
        {/* CTA Section (from previous conversation, matching the image design) */}
        <div className="text-center mb-5 pb-4 border-bottom border-secondary">
          <img
           // Using the white logo for dark background
            alt="Koajo Logo"
            className="mb-4"
            style={{ height: '50px' }}
          />
          <h2 className="display-4 fw-bold mb-3">
            Ready for financial possibilities?
          </h2>
          <p className="lead mb-4 px-lg-5">
            Every dollar saved is a step toward a future of security, independence,
            and possibility. No matter how small, your savings today will shape a
            brighter tomorrow.
          </p>
          <button className="btn btn-light btn-lg rounded-pill px-4 py-2 text-warning fw-bold">
            Join the Community →
          </button>
        </div>

        {/* Footer Navigation and Info */}
        <div className="row justify-content-center text-start g-4 pb-4 border-bottom border-secondary">
          {/* Logo and Tagline */}
          <div className="col-md-6 col-lg-3 d-flex flex-column align-items-start">
            <img
              // Re-using white logo for this section too
              alt="Koajo Logo"
              className="mb-3"
              style={{ height: '40px' }}
            />
            <p className="text-white small">Make Online Payment Simple.</p>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Contact</h4>
            <ul className="list-unstyled">
              <li>(888) 456 7890</li>
              <li>
                <a href="mailto:info@example.com" className="text-light text-decoration-none">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Address</h4>
            <ul className="list-unstyled">
              <li>410 Sandtown,</li>
              <li>California 9400/USA</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="home.html" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div className="col-md-6 col-lg-2">
            <h4 className="fw-bold mb-3">Utility Pages</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Password
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  404 Error
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> {/* End of main container div */}

      {/* Copyright and Disclaimer Section - White Background, Black Text */}
      <div className="bg-white text-dark py-3 text-center"> {/* White background, dark text, padding */}
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