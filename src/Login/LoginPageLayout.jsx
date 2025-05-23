import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you're using Bootstrap 5 CSS for gap-
import { Link } from 'react-router-dom'; // For navigation

// Ensure you have Font Awesome CSS imported globally if you use it, e.g., in index.js
// import '@fortawesome/fontawesome-free/css/all.min.css';

function LoginPageLayout() { // Renamed the component to LoginPageLayout
  const [spendingPlanActive, setSpendingPlanActive] = useState(false);
  const [savingsGoalsActive, setSavingsGoalsActive] = useState(false);
  const [investmentsActive, setInvestmentsActive] = useState(false);

  useEffect(() => {
    // Mimic the original animation timings from the HTML code
    const timer1 = setTimeout(() => {
      setSpendingPlanActive(true);
    }, 500);
    const timer2 = setTimeout(() => {
      setSavingsGoalsActive(true);
    }, 800);
    const timer3 = setTimeout(() => {
      setInvestmentsActive(true);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    alert('Learn more functionality will be implemented here.');
    // Example: You might use navigate('/about') here if using useNavigate from react-router-dom v6
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    alert('Get started functionality will be implemented here.');
    // Example: You might use navigate('/login') here if using useNavigate from react-router-dom v6
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white"> {/* Overall page wrapper */}
      {/* Page-specific Header for Koajo logo at top-left */}
      <header className="py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="fw-bold fs-4 text-dark" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Koajo</span>
          </Link>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        {/* Container for the two-column layout */}
        <div className="container d-flex shadow-lg rounded-3 overflow-hidden" style={{ height: '80vh', maxHeight: '700px', width: '95%' }}>
          {/* Left Side: Text Content and Buttons */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start p-5 bg-white text-dark">
            {/* The "Koajo" logo for the left section is now removed as it's in the header */}
            <h1 className="display-4 fw-bold lh-base mb-3" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Let's empower your financial task today with Koajo</h1>
            <p className="lead text-muted mb-4" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>The one-stop platform for all financial management of small and medium-sized business.</p>
            <div className="d-flex gap-3"> {/* Use Bootstrap's gap utility */}
              <Link to="/learn-more" className="btn btn-outline-dark rounded-pill px-4 py-2" onClick={handleLearnMoreClick} style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                Learn More
              </Link>
              <Link to="/createaccount" className="btn btn-warning rounded-pill px-4 py-2"  style={{ backgroundColor: '#fd7e14', borderColor: '#fd7e14', color: '#ffffff', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                Get Started <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          {/* Right Side: Image and "Finance Made Smarter" text */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4 position-relative" style={{ backgroundColor: '#276a6a', color: 'white' }}>
            {/* Floating UI elements */}
            <div id="spendingPlan" className={`floating-ui position-absolute bg-white text-dark rounded-3 shadow p-3 ${spendingPlanActive ? 'active' : ''}`} style={{ top: '50px', left: '30px', width: '250px' }}>
              <h6 className="fw-bold">Spending Plan</h6>
              <div className="d-flex align-items-center justify-content-between mb-2">
                {/* Custom circular progress style maintained */}
                <div className="rounded-circle border border-light border-top-color-primary" style={{ width: '60px', height: '60px', borderWidth: '8px' }}></div>
                <div>
                  <strong className="fs-5">$5,154.45</strong>
                  <small className="d-block text-muted">Available</small>
                </div>
              </div>
              <small className="d-block mt-2 text-muted">Planned Spending: $8,200</small>
              <div className="progress mt-1" style={{ height: '5px' }}>
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '63%' }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div id="savingsGoals" className={`floating-ui position-absolute bg-white text-dark rounded-3 shadow p-3 ${savingsGoalsActive ? 'active' : ''}`} style={{ top: '150px', right: '50px', width: '280px' }}>
              <h6 className="fw-bold">Savings Goals</h6>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <strong className="fs-5">Vacation</strong>
                  <small className="d-block text-muted">Unset target</small>
                </div>
                <strong className="fs-5">$3,200</strong>
              </div>
              <div className="progress mt-2" style={{ height: '8px' }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div id="investments" className={`floating-ui position-absolute bg-white text-dark rounded-3 shadow p-3 ${investmentsActive ? 'active' : ''}`} style={{ bottom: '80px', left: '80px', width: '220px' }}>
              <h6 className="fw-bold">Investments</h6>
              <strong className="fs-5">$25,000</strong>
              <small className="d-block text-muted">Total Value</small>
              <hr className="my-2" />
              <div className="d-flex justify-content-between small">
                <span>AAPL</span>
                <span>+$500</span>
              </div>
              <div className="d-flex justify-content-between small">
                <span>GOOG</span>
                <span>+$250</span>
              </div>
              <div className="d-flex justify-content-between small">
                <span>BTC</span>
                <span>-$120</span>
              </div>
            </div>

            {/* "Finance Made Smarter" text - Pushed to bottom of right column */}
            <h2 className="finance-headline text-center mt-auto" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Finance Made Smarter</h2>
            <p className="finance-subheadline text-center" style={{ color: 'rgba(255, 255, 255, 0.8)', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>From budgeting to investments, manage it all seamlessly with Koajo.</p>

          </div>
        </div>
      </main>

      {/* Custom CSS for animations and overrides not possible with pure Bootstrap */}
      <style jsx>{`
        /* Apply font smoothing globally or to specific text elements */
        body, h1, h2, h6, p, small, span, strong, .btn, .logo, .headline, .subheadline, .finance-headline, .finance-subheadline {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Styles for floating UI animation (cannot be purely Bootstrap for transform/opacity) */
        .floating-ui {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .floating-ui.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Specific border color for the circular progress to match the image */
        .border-top-color-primary {
          border-top-color: #28a745 !important;
        }

        /* Specific font sizes and margins from the original design if not perfectly matched by Bootstrap utilities */
        .finance-headline {
          font-size: 1.8rem; /* Original value */
          font-weight: bold; /* Already in Bootstrap fw-bold */
          margin-bottom: 10px; /* Specific margin */
          color: white; /* Ensure text color is white in this context */
        }
        .finance-subheadline {
          font-size: 0.9rem; /* Original value */
          color: rgba(255, 255, 255, 0.8); /* Original color */
        }

        /* Mobile Responsiveness Overrides */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto !important; /* Override fixed height on small screens */
            max-height: none !important;
          }
          .left-side, .right-side {
            padding: 30px !important; /* Adjust padding for mobile */
            flex: 1 !important; /* Ensure both columns take full width on mobile */
          }
          .left-side {
            align-items: center !important;
            text-align: center !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 15px !important;
          }
          .btn-learn-more, .btn-get-started {
            width: 100% !important;
          }
          .right-side {
            /* In mobile, floating elements should be static or flow naturally */
            justify-content: flex-start !important; /* Align content to top */
            align-items: center !important;
          }
          .floating-ui {
            position: relative !important; /* Make them flow naturally on mobile */
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            margin: 20px auto !important; /* Add some margin for separation */
            width: 90% !important; /* Adjust width for mobile */
          }
          .finance-headline {
            font-size: 1.5rem !important; /* Smaller on mobile */
          }
          .finance-subheadline {
            font-size: 0.8rem !important; /* Smaller on mobile */
          }
        }
      `}</style>
    </div>
  );
}

export default LoginPageLayout;