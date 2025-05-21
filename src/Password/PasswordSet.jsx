
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Assuming a separate logo for the left pane // If the left panel has a background image

function PasswordsetPage() {
  return (
    <div className="container-fluid d-flex vh-100 p-0">
      {/* Left Marketing Section */}
       <div className="text-white p-4 d-none d-md-flex flex-column justify-content-center" style={{ width: '400px', backgroundColor:'#276a6a' }}>
        <div className="d-flex align-items-center mb-3">
          <div className="bg-white text-info rounded-circle d-flex justify-content-center align-items-center mr-2" style={{ width: '40px', height: '40px', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Ko
          </div>
          <h1 className="h3 font-weight-bold">ajo</h1>
        </div>
        <h2 className="h4 font-weight-bold mb-3">One Dashboard to Optimize All Financial Insights</h2>
        <p className="small text-white-50">An Integrated Dashboard Designed to Elevate Your Financial Insights and Provide Comprehensive Analysis of Your Economic Landscape.</p>
      </div>

      {/* Right Form Section */}
      <div className="col-lg-6 d-flex justify-content-center align-items-center bg-light">
        <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}>
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <a href="#" className="text-dark me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </a>
              <h4 className="card-title fw-bold mb-0">Create New Password</h4>
            </div>
            <p className="text-muted mb-4">
              Send your email account to reset password & make new password
            </p>

            <form>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label text-muted small">
                  New Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="********"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </button>
                </div>
                <small className="form-text text-muted">
                  Min 8 Characters with a combination of letters and numbers
                </small>
                <span className="text-success small ms-2">Strong</span> {/* Or dynamically change strength */}
              </div>

              <div className="mb-4">
                <label htmlFor="repeatPassword" className="form-label text-muted small">
                  Repeat Password
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    placeholder="********"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <a href="/success">
              <button type="button" className="btn btn-warning w-100 py-2 fw-bold">
                Continue
              </button>
              </a>
            </form>
            <p className="text-center text-muted small mt-5">
              © Koajo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordsetPage;