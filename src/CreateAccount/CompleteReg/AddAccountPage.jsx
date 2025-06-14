import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft } from 'react-icons/bs';
import RegistrationSideBar from '../RegistrationSideBar';

function AddAccountsPage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>

      {/* Right Content */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="d-flex justify-content-start mb-3">
            <button className="btn btn-link text-secondary">
              <BsArrowLeft size={24} />
            </button>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-bank mb-2 text-secondary" viewBox="0 0 16 16">
              <path d="m8 0 6.61 3h.89a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 4v3h12V4H2Zm1 5v6h10V9H3Zm0 0h10v3H3V9Z"/>
            </svg>
            <h2 className="h5 font-weight-bold text-gray-900 text-center mb-2">Add accounts to see all your finances in one place</h2>
            <p className="text-gray-600 text-center small mb-3">Track multiple account types including bank accounts, investments, and more.</p>
            <a href="/connectaccount">
            <button className="btn btn-warning btn-sm btn-block mb-2" style={{ width:300 }}>
              Add Account
            </button>
            </a>
            <button className="btn btn-link btn-sm text-secondary">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccountsPage;