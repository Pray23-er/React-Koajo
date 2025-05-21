import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRight } from 'react-icons/bs'; // For the arrow icon

function Loginpage2() {
  return (
    <div className="container-fluid bg-light p-0 d-flex vh-100 overflow-hidden">
      {/* Left Side */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
        <h1 className="fw-bold text-dark mb-4">Koajo</h1>
        <h2 className="display-6 fw-bold text-dark mb-3">
          Let's empower your financial task today with Koajo
        </h2>
        <p className="lead text-secondary mb-4">
          The one-stop platform for all financial management of small and
          medium-sized business.
        </p>
        <div className="d-flex">
          <button className="btn btn-outline-secondary btn-lg me-3">
            Learn More
          </button>
          <button className="btn btn-warning btn-lg">
            Get Started <BsArrowRight className="ms-2" />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-md-6 bg-info p-5 d-flex flex-column justify-content-between align-items-end">
        <div className="d-flex flex-column align-items-end">
          {/* Spending Plan Card (Placeholder) */}
          <div className="card bg-white shadow-sm rounded mb-3" style={{ width: '280px' }}>
            <div className="card-body p-3">
              <h6 className="card-title text-secondary small mb-2">Spending Plan</h6>
              <div className="d-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px', border: '4px solid #ffc107', borderRadius: '50%' }}>
                <span className="fw-bold text-dark">$6,154.45</span>
              </div>
              <ul className="list-unstyled text-secondary small mt-2">
                <li><span className="me-1">•</span> Planned Spending</li>
                <li><span className="me-1">•</span> Other Spending</li>
                <li><span className="me-1">•</span> Available</li>
              </ul>
            </div>
          </div>

          {/* Savings Goals Card (Placeholder) */}
          <div className="card bg-white shadow-sm rounded mb-3" style={{ width: '250px' }}>
            <div className="card-body p-3">
              <h6 className="card-title text-secondary small mb-2">Savings Goals</h6>
              <h6 className="fw-bold text-dark mb-1">Dream Vacation</h6>
              <div className="progress bg-light rounded-pill" style={{ height: '8px' }}>
                <div className="progress-bar bg-success rounded-pill" role="progressbar" style={{ width: '64%' }} aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="d-flex justify-content-between text-secondary small mt-1">
                <span>$3,200</span>
                <span>$5,000</span>
              </div>
            </div>
          </div>

          {/* Investments Card (Placeholder) */}
          <div className="card bg-white shadow-sm rounded mb-3" style={{ width: '280px' }}>
            <div className="card-body p-3">
              <h6 className="card-title text-secondary small mb-2">Investments</h6>
              <h4 className="fw-bold text-dark mb-2">$25,000</h4>
              <ul className="list-unstyled text-secondary small">
                <li className="d-flex justify-content-between"><span>Apple Inc</span> <span className="text-success">+$5,000</span></li>
                <li className="d-flex justify-content-between"><span>Tesla Inc</span> <span className="text-danger">-$1,250</span></li>
                <li className="d-flex justify-content-between"><span>Bitcoin</span> <span className="text-success">+$2,850</span></li>
                {/* Add more investment items */}
              </ul>
              <button className="btn btn-sm btn-outline-secondary mt-2">View Investments</button>
            </div>
          </div>

          {/* Emergency Fund Card (Placeholder) */}
          <div className="card bg-white shadow-sm rounded" style={{ width: '250px' }}>
            <div className="card-body p-3">
              <h6 className="card-title text-secondary small mb-2">Emergency Fund</h6>
              <div className="progress bg-light rounded-pill" style={{ height: '8px' }}>
                <div className="progress-bar bg-warning rounded-pill" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="d-flex justify-content-between text-secondary small mt-1">
                <span>$1,000</span>
                <span>$5,000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-end">
          <h3 className="fw-bold">Finance Made Smarter</h3>
          <p className="lead small">
            From budgeting to investments, manage it all seamlessly with Koajo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage2;