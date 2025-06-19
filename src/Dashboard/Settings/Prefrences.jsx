import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPersonOutline, MdOutlineSettings, MdOutlinePayments, MdSecurity } from 'react-icons/md'; // Icons for sidebar
import UserDashboardHeader from '../UserDashboardHeader';

function SettingsPreferences() {
    // State for form fields
    const [language, setLanguage] = useState('English ( Australia )');
    const [colorTheme, setColorTheme] = useState('Dark blue (1C2634)');
    const [updateSystems, setUpdateSystems] = useState(true); // Toggle switch state
    const [transactions, setTransactions] = useState(true); // Toggle switch state
    const [emailNotification, setEmailNotification] = useState(true); // Toggle switch state

    const handleSave = () => {
        // Handle saving preferences (e.g., send to API)
        console.log("Saving Preferences:", {
            language, colorTheme, updateSystems, transactions, emailNotification
        });
        // Add your API call or state update logic here
    };

    const handleCancel = () => {
        // Handle cancel action, maybe reset to initial state or navigate back
        console.log("Cancelled changes.");
        // For demonstration, resetting to initial state
        setLanguage('English ( Australia )');
        setColorTheme('Dark blue (1C2634)');
        setUpdateSystems(true);
        setTransactions(true);
        setEmailNotification(true);
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
                        <a href="/preferences" className="d-flex align-items-center p-3 rounded-3 text-decoration-none bg-primary bg-opacity-10 text-primary fw-bold">
                            <MdOutlineSettings size={20} className="me-2" /> Preferences
                            <span className="ms-auto text-primary">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/plans" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdOutlinePayments size={20} className="me-2" /> Plans
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/security" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            <MdSecurity size={20} className="me-2" /> Security
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content Area for Preferences */}
            <div className="flex-grow-1 p-4 bg-white rounded-start-4 shadow-sm" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="mb-0 fw-bold">Preferences</h4>
                    <span className="ms-2 text-muted" title="Help information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                    </span>
                </div>

                {/* Language */}
                <div className="mb-4">
                    <label htmlFor="language" className="form-label fw-bold">Language</label>
                    <select
                        className="form-select form-select-lg bg-light-subtle py-3"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="English ( Australia )">English ( Australia )</option>
                        <option value="English ( US )">English ( US )</option>
                        <option value="Spanish">Spanish</option>
                        {/* Add more language options */}
                    </select>
                </div>

                {/* Color Themes */}
                <div className="mb-4">
                    <label htmlFor="colorThemes" className="form-label fw-bold">Color themes</label>
                    <select
                        className="form-select form-select-lg bg-light-subtle py-3"
                        id="colorThemes"
                        value={colorTheme}
                        onChange={(e) => setColorTheme(e.target.value)}
                    >
                        <option value="Dark blue (1C2634)">Dark blue (1C2634)</option>
                        <option value="Light gray (AABBCC)">Light gray (AABBCC)</option>
                        {/* Add more color theme options */}
                    </select>
                </div>

                {/* Notification Settings */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Notification</label>
                    {/* Update Systems */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <p className="fw-bold mb-0">Update Systems</p>
                            <small className="text-muted">let me know if there is a new product update</small>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="updateSystemsSwitch"
                                checked={updateSystems}
                                onChange={(e) => setUpdateSystems(e.target.checked)}
                                style={{ transform: 'scale(1.5)' }} // Larger toggle switch
                            />
                            <label className="form-check-label visually-hidden" htmlFor="updateSystemsSwitch">Update Systems Notifications</label>
                        </div>
                    </div>
                    {/* Transactions */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <p className="fw-bold mb-0">Transactions</p>
                            <small className="text-muted">tell me about the information after making the transaction</small>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="transactionsSwitch"
                                checked={transactions}
                                onChange={(e) => setTransactions(e.target.checked)}
                                style={{ transform: 'scale(1.5)' }} // Larger toggle switch
                            />
                            <label className="form-check-label visually-hidden" htmlFor="transactionsSwitch">Transactions Notifications</label>
                        </div>
                    </div>
                    {/* Email Notification */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="fw-bold mb-0">Email Notification</p>
                            <small className="text-muted">notify me of all notifications via email</small>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="emailNotificationSwitch"
                                checked={emailNotification}
                                onChange={(e) => setEmailNotification(e.target.checked)}
                                style={{ transform: 'scale(1.5)' }} // Larger toggle switch
                            />
                            <label className="form-check-label visually-hidden" htmlFor="emailNotificationSwitch">Email Notifications</label>
                        </div>
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

export default SettingsPreferences;