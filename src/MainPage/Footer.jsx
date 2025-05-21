import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <footer className="site-footer bg-dark text-light py-5">
      <div className="cta-section bg-dark text-white py-4 text-center">
        <div className="container">
          <h2>
            Ready to unlock your <span style={{ color: "#ff8c42" }}>financial potential?</span>
          </h2>
          <p>
            Don't miss out on the excitement! Stay tuned for all the thrilling events
            we have lined up just for you!
          </p>
          <a href="">
            <button style={{ color: "white",
            backgroundColor:"#ff8c42",
            borderRadius:"15px"
             }}> Join the Community <span aria-hidden="true">→</span></button>
          </a>
        </div>
      </div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-4">
          <div className="col">
            <div className="footer-logo">
              <img
               
                alt="Koajo Logo"
                className="img-fluid mb-2"
                style={{ maxHeight: '50px' }}
              />
              <p className="tagline text-muted small">Make Online Payment Simple.</p>
            </div>
          </div>
          <div className="col">
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>(888) 456 7890</p>
              <p>
                <a href="mailto:info@example.com" className="text-light">
                  info@example.com
                </a>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="footer-address">
              <h3>Address</h3>
              <p>410 Sandtown,</p>
              <p>California 9400/USA</p>
            </div>
          </div>
          <div className="col">
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-utilities">
              <h3>Utility Pages</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Password
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    404 Error
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-light btn-sm rounded-pill">
                  Facebook
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-pill">
                  Twitter
                </a>
                <a href="#" className="btn btn-outline-light btn-sm rounded-pill">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-secondary text-muted py-3 text-center">
        <div className="container">
          <p className="copyright mb-2">&copy;2025, Koajo. All Rights Reserved.</p>
          <p className="disclaimer small">
            Koajo is a fintech company, Koajo is not a bank, lender, advisor, broker,
            fund manager, investment agency, MLM scheme, credit repair company,
            credit reporting agency, money service business, money transmitter, an
            issuer of stored value product or financial institution. Koajo has no
            control over the conduct of its users and disclaims any and all
            liabilities in this regard. Contributions before they are paid out are
            held with American Express (AMEX). Members' FDIC/FDIC deposit insurance
            covers accounts held with American Express (AMEX) in the event American
            Express (AMEX) fails. Koajo does not offer investment returns or shares
            on savings. Koajo is NOT structured to pool funds for investment
            purposes or profit making for its users. Users relationship with Koajo
            is a standalone understanding and their savings are cumulatively paid out
            to them either in advance or arrears and is neither influenced or reliant
            on the effort of others.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;