import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckLg } from 'react-icons/bs';
import RegistrationSideBar from '../RegistrationSideBar';

function SetupCompletePage() {
  return (
    <div className="min-vh-100 d-flex bg-light">
      {/* Left Sidebar */}
      <RegistrationSideBar/>

      {/* Right Content */}
      <div className="container d-flex align-items-center justify-content-center">
        <div className="bg-white rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <BsCheckLg size={40} />
            </div>
          </div>
          <h2 className="h5 font-weight-bold text-gray-900 text-center mb-3">Set up complete!</h2>
          <p className="text-gray-600 text-center small mb-4">You're ready to shoot for the stars.</p>
          <a href="/login">  <button className="btn btn-warning btn-sm btn-block" style={{ width:200,
            marginLeft:"auto",
            marginRight:"auto"
           }}>
            Continue
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default SetupCompletePage;