import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPersonOutline, MdOutlineSettings, MdOutlinePayments, MdSecurity } from 'react-icons/md'; // Icons for sidebar
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for password visibility toggle
import UserDashboardHeader from '../UserDashboardHeader';

function SettingsSecurity() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

    const handleSave = () => {
        // Handle saving password changes (e.g., send to API)
        console.log("Saving new password:", {
            oldPassword,
            newPassword,
            repeatNewPassword
        });
        // Add your API call and validation logic here
        // For example, check if newPassword matches repeatNewPassword
        if (newPassword !== repeatNewPassword) {
            alert("New password and repeat new password do not match!");
            return;
        }
        alert("Password updated successfully (simulated)!");
        // Clear fields after successful save
        setOldPassword('');
        setNewPassword('');
        setRepeatNewPassword('');
    };

    const handleCancel = () => {
        // Handle cancel action, clear fields
        console.log("Cancelled password change.");
        setOldPassword('');
        setNewPassword('');
        setRepeatNewPassword('');
    };

    return (
      <>
      <UserDashboardHeader/>
        <div className="d-flex bg-light min-vh-100"> {/* Main container for the settings page */}
            {/* Left Sidebar for Settings Navigation */}
            <div className="col-3 p-4 pt-5" style={{ minWidth: '250px', backgroundColor: '#f8f9fa' }}>
                <h5 className="mb-4">Settings</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <a href="/personalinfo" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdPersonOutline size={20} className="me-2" /> Personal Information
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/preferences" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdOutlineSettings size={20} className="me-2" /> Preferences
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/plans" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdOutlinePayments size={20} className="me-2" /> Plans
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        {/* Highlighted Security link */}
                        <a href="/security" className="d-flex align-items-center p-3 rounded-3 text-decoration-none bg-primary bg-opacity-10 text-primary fw-bold">
                            <MdSecurity size={20} className="me-2" /> Security
                            <span className="ms-auto text-primary">&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content Area for Security */}
            <div className="flex-grow-1 p-4 bg-white rounded-start-4 shadow-sm" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="mb-0 fw-bold">Security</h4>
                    <span className="ms-2 text-muted" title="Help information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                    </span>
                </div>

                {/* Old Password */}
                <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label fw-bold">Old Password</label>
                    <div className="input-group input-group-lg bg-light-subtle rounded">
                        <input
                            type={showOldPassword ? 'text' : 'password'}
                            className="form-control border-0 bg-transparent py-3"
                            id="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-link text-secondary"
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            aria-label={showOldPassword ? "Hide password" : "Show password"}
                        >
                            {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* New Password */}
                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label fw-bold">New Password</label>
                    <div className="input-group input-group-lg bg-light-subtle rounded">
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            className="form-control border-0 bg-transparent py-3"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-link text-secondary"
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            aria-label={showNewPassword ? "Hide password" : "Show password"}
                        >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Repeat New Password */}
                <div className="mb-4">
                    <label htmlFor="repeatNewPassword" className="form-label fw-bold">Repeat New Password</label>
                    <div className="input-group input-group-lg bg-light-subtle rounded">
                        <input
                            type={showRepeatNewPassword ? 'text' : 'password'}
                            className="form-control border-0 bg-transparent py-3"
                            id="repeatNewPassword"
                            value={repeatNewPassword}
                            onChange={(e) => setRepeatNewPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-link text-secondary"
                            type="button"
                            onClick={() => setShowRepeatNewPassword(!showRepeatNewPassword)}
                            aria-label={showRepeatNewPassword ? "Hide password" : "Show password"}
                        >
                            {showRepeatNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end gap-2 mt-4">
                    <button type="button" className="btn btn-outline-secondary px-4 py-2" onClick={handleCancel}>Cancel</button>
                    <button type="button" className="btn btn-warning px-4 py-2" onClick={handleSave}>Yes</button>
                </div>
            </div>
        </div>
      </>
    );
}

export default SettingsSecurity;