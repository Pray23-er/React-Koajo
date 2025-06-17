import React from 'react';
import { AiOutlineBell } from 'react-icons/ai'; // For the bell icon
import { FaCalendarAlt } from 'react-icons/fa'; // For the calendar icon

const UserDashboardHeader = () => {
  // Placeholder for user profile picture. In a real app, this might come from props or context.
  const userProfilePic = "https://via.placeholder.com/36"; // Replace with your actual image path

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-dark bg-dark py-3 px-4">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            Koa<span className="text-warning">jo</span>
          </a>

          {/* Navigation Links */}
          <ul className="navbar-nav flex-row ms-auto me-4 d-none d-lg-flex"> {/* Hide on small screens */}
            <li className="nav-item me-3">
              <a className="nav-link active text-light" href="#">Dashboard</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link text-secondary" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">Help & Center</a>
            </li>
          </ul>

          {/* Search, Notifications, Profile */}
          <div className="d-flex align-items-center">
            <div className="input-group me-3" style={{ maxWidth: '250px' }}>
              <input
                type="text"
                className="form-control form-control-sm bg-secondary border-0 text-light placeholder-glow"
                placeholder="Search anything here"
                aria-label="Search"
              />
              <span className="input-group-text bg-secondary border-0 text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </span>
            </div>
            <button className="btn btn-link text-light me-3 p-0">
              <AiOutlineBell size={24} />
            </button>
            <button className="btn btn-link p-0">
              <img
                src={userProfilePic}
                alt="Profile"
                className="rounded-circle border border-secondary"
                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content Area (below the navbar, but still part of the 'header' visually) */}
      <div className="flex-grow-1 p-4 container-fluid" style={{ backgroundColor: '#212529', color: 'white' }}>
        {/* Top Section: Welcome and Breadcrumbs */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h4 fw-bold">Welcome back, Rainer Yaeger 👋</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 small">
                <li className="breadcrumb-item text-secondary">Dashboard</li>
                <li className="breadcrumb-item text-white active" aria-current="page">Transaction</li>
              </ol>
            </nav>
          </div>
          <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2 text-warning fw-bold">
            <FaCalendarAlt className="me-2" />
            <span>Mar 17</span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <ul className="nav nav-tabs border-0 mb-4 bg-secondary rounded">
          <li className="nav-item">
            <a className="nav-link text-light border-0 rounded-start" href="/userdashboard">Overview</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active bg-dark text-warning border-0" aria-current="page" href="/Transaction">Transaction</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light border-0 rounded-end" href="/Podoverview">Pod Information</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDashboardHeader;