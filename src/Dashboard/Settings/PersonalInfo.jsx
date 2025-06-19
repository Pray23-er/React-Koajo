import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Assuming you have an icon for the calendar, e.g., from react-icons
import { FaRegCalendarAlt } from 'react-icons/fa'; // Using FaRegCalendarAlt for a lighter calendar icon
import { MdPersonOutline } from 'react-icons/md'; // For the Personal Information icon
import UserDashboardHeader from '../UserDashboardHeader';

function SettingsPersonalInfo() {
    // State for form fields
    const [displayName, setDisplayName] = useState('Rainer Yeger'); //
    const [email, setEmail] = useState('yourname@gmail.com'); //
    const [dateOfBirth, setDateOfBirth] = useState('10 - 10 - 2010'); //
    const [country, setCountry] = useState('Indonesia'); //
    const [province, setProvince] = useState('Central Java'); //
    const [city, setCity] = useState('Semarang'); //

    // Placeholder for avatar (replace with actual image path or dynamic URL)
    const userProfilePic = "https://placehold.co/80x80/cccccc/000000?text=JP"; // Placeholder for user profile pic, assuming larger size for photo profile

    const handleSave = () => {
        // Handle saving personal information (e.g., send to API)
        console.log("Saving Personal Information:", {
            displayName, email, dateOfBirth, country, province, city
        });
        // Add your API call or state update logic here
    };

    const handleCancel = () => {
        // Handle cancel action, maybe reset to initial state or navigate back
        console.log("Cancelled changes.");
        // For demonstration, resetting to initial state
        setDisplayName('Rainer Yeger');
        setEmail('yourname@gmail.com');
        setDateOfBirth('10 - 10 - 2010');
        setCountry('Indonesia');
        setProvince('Central Java');
        setCity('Semarang');
    };

    const handleChooseAvatar = () => {
        // Logic for choosing a new avatar
        alert("Choose Avatar functionality goes here!");
    };

    const handleDeleteAvatar = () => {
        // Logic for deleting the current avatar
        alert("Delete Avatar functionality goes here!");
        // set userProfilePic to a default/empty avatar
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
                        <a href="/personalinfo" className="d-flex align-items-center p-3 rounded-3 text-decoration-none bg-primary bg-opacity-10 text-primary fw-bold">
                            <MdPersonOutline size={20} className="me-2" /> Personal Information
                            <span className="ms-auto text-primary">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/preferences" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            Preferences
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/plans" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            Plans
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/security" className="d-flex align-items-center p-3 rounded-3 text-decoration-none text-dark">
                            Security
                            <span className="ms-auto text-dark">&gt;</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content Area for Personal Information */}
            <div className="flex-grow-1 p-4 bg-white rounded-start-4 shadow-sm" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="mb-0 fw-bold">Personal Information</h4>
                    <span className="ms-2 text-muted" title="Help information">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                    </span>
                </div>

                {/* Photo Profile Section */}
                <div className="mb-4">
                    <label className="form-label fw-bold">Photo Profile</label>
                    <div className="d-flex align-items-center">
                        <img src={userProfilePic} alt="User Avatar" className="rounded-circle me-3" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                        <div>
                            <button onClick={handleChooseAvatar} className="btn btn-outline-secondary me-2">Choose Avatar</button> {/* */}
                            <button onClick={handleDeleteAvatar} className="btn btn-outline-danger">Delete</button> {/* */}
                        </div>
                    </div>
                </div>

                {/* Display Name */}
                <div className="mb-3">
                    <label htmlFor="displayName" className="form-label fw-bold">Display name</label> {/* */}
                    <input
                        type="text"
                        className="form-control form-control-lg bg-light-subtle py-3"
                        id="displayName"
                        value={displayName} //
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email</label> {/* */}
                    <input
                        type="email"
                        className="form-control form-control-lg bg-light-subtle py-3"
                        id="email"
                        value={email} //
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label fw-bold">Date of Birth</label> {/* */}
                    <div className="input-group input-group-lg">
                        <input
                            type="text" // Using text to allow "10 - 10 - 2010" format, could be 'date' for a date picker
                            className="form-control bg-light-subtle py-3"
                            id="dateOfBirth"
                            value={dateOfBirth} //
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            placeholder="DD - MM - YYYY"
                        />
                        <span className="input-group-text bg-light-subtle">
                            <FaRegCalendarAlt /> {/* Calendar icon */}
                        </span>
                    </div>
                </div>

                {/* Country, Province, City */}
                <div className="row mb-4">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <label htmlFor="country" className="form-label fw-bold">Country</label> {/* */}
                        <select
                            className="form-select form-select-lg bg-light-subtle py-3"
                            id="country"
                            value={country} //
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="Indonesia">Indonesia</option> {/* */}
                            {/* Add more countries */}
                            <option value="USA">United States</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <label htmlFor="province" className="form-label fw-bold">Province</label> {/* */}
                        <select
                            className="form-select form-select-lg bg-light-subtle py-3"
                            id="province"
                            value={province} //
                            onChange={(e) => setProvince(e.target.value)}
                        >
                            <option value="Central Java">Central Java</option> {/* */}
                            {/* Add more provinces/states based on country */}
                            <option value="West Java">West Java</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="city" className="form-label fw-bold">City</label> {/* */}
                        <select
                            className="form-select form-select-lg bg-light-subtle py-3"
                            id="city"
                            value={city} //
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="Semarang">Semarang</option> {/* */}
                            {/* Add more cities based on province */}
                            <option value="Jakarta">Jakarta</option>
                        </select>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end gap-2 mt-4">
                    <button type="button" className="btn btn-outline-secondary px-4 py-2" onClick={handleCancel}>Cancel</button> {/* */}
                    <button type="button" className="btn btn-success px-4 py-2" onClick={handleSave}>Yes</button> {/* */}
                </div>
            </div>
        </div>
        
        </>
    );
}

export default SettingsPersonalInfo;