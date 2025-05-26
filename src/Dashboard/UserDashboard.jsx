import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineQuestionCircle, AiOutlineRight, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'; // For icons
import { FaCalendarAlt } from 'react-icons/fa'; // For calendar icon
import { BsCheckCircleFill, BsLightningFill, BsCashCoin, BsAwardFill, BsHeartFill } from 'react-icons/bs'; // For specific achievement icons


// Placeholder for images (replace with actual paths or data URLs)
const koajoLogoDark = "https://placehold.co/100x50/FFFFFF/000000?text=Koajo"; // Logo for dark background
const koajoLogoLight = "https://placehold.co/100x50/000000/FFFFFF?text=Koajo"; // Logo for light background
const userProfilePic = "https://placehold.co/30x30/cccccc/000000?text=JD"; // Placeholder for user profile pic
const userAvatar = "https://placehold.co/40x40/ddd/000?text=U"; // Placeholder for group member avatars


function UserDashboard() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
   

      {/* Main Content Area */}
      <div className="flex-grow-1 p-4 container-fluid"> {/* Use container-fluid for full width */}
        {/* Top Section: Welcome and Breadcrumbs */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h4 fw-bold">Welcome back, Rainer Yaeger 👋</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 small">
                <li className="breadcrumb-item text-secondary">Dashboard</li>
                <li className="breadcrumb-item text-white active" aria-current="page">Overview</li>
              </ol>
            </nav>
          </div>
          <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2 text-warning fw-bold">
            <FaCalendarAlt className="me-2" />
            <span>Mar 17</span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <ul className="nav nav-tabs border-0 mb-4 bg-secondary rounded"> {/* Added bg-secondary and rounded */}
          <li className="nav-item">
            <a className="nav-link active bg-dark text-warning border-0 rounded-start" href="#">Overview</a> {/* Active tab with dark background */}
          </li>
          <li className="nav-item">
            <a className="nav-link text-light border-0" href="#">Transaction</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light border-0 rounded-end" href="#">Pod Information</a>
          </li>
        </ul>

        {/* Dashboard Cards Grid */}
        <div className="row g-4">
          {/* Current Pod Card */}
          <div className="col-lg-4 col-md-6"> {/* Adjusted column size for better layout */}
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title mb-0">Current Pod <span className="text-muted small ms-1">ID#94044940</span></h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>
              <p className="fw-bold fs-3 mb-3">$100 Pod</p>
              <button className="btn btn-warning fw-bold py-2 px-4 rounded-pill">Join More Pods</button>
            </div>
          </div>

          {/* Total Contribution Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title mb-0">Total Contribution</h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>
              <p className="fw-bold fs-3 mb-1">$12,456.00</p>
              <p className="card-text small text-muted">Your payout date is Jun - 24 - 2025</p>
              <a href="#" className="text-warning small text-decoration-none mt-auto">
                See More <AiOutlineRight />
              </a>
            </div>
          </div>

          {/* Total Payout Card (New Card) */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title mb-0">Total Payout</h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>
              <p className="fw-bold fs-3 mb-1">$12,456</p>
              <p className="card-text small text-muted">payment less 2.5% transaction fee</p>
              <a href="#" className="text-warning small text-decoration-none mt-auto">
                See More <AiOutlineRight />
              </a>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Recent Activity</h5>
                <a href="#" className="text-warning small text-decoration-none">
                  See More <AiOutlineRight />
                </a>
              </div>
              <ul className="list-unstyled mb-0">
                {[
                  { desc: 'Koajo Premium +', id: 'ID#940444409', amount: '-$100.00', date: '10/02/25 - 22:34' },
                  { desc: 'Koajo Premium +', id: 'ID#940444409', amount: '-$100.00', date: '10/02/25 - 20:01' },
                  { desc: 'Koajo Premium +', id: 'ID#940444409', amount: '-$100.00', date: '10/02/25 - 14:12' },
                  { desc: 'Koajo Premium +', id: 'ID#940444409', amount: '-$100.00', date: '10/02/22 - 01:18' },
                  { desc: 'Koajo Premium +', id: 'ID#940444409', amount: '-$100.00', date: '10/02/22 - 05:19' },
                ].map((activity, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center py-2 border-bottom border-light-subtle last-of-type:border-bottom-0">
                    <div>
                      <p className="mb-0 fw-bold">{activity.desc}</p>
                      <small className="text-muted">{activity.id}</small>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 text-danger fw-bold">{activity.amount}</p>
                      <small className="text-muted">{activity.date}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Circle Duration Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title mb-0">Circle Duration</h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>
              <div className="text-center flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                <p className="fw-bold fs-3 mb-1">36 days Remaining</p>
                <p className="small text-muted mb-0">Expense increased by <span className="text-success">$1456</span> This Month</p>
              </div>
              {/* No "See More" link in image for this card */}
            </div>
          </div>

          {/* My Pod Goal (formerly My Pocket Plans) Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">My Pod Goal</h5>
                <a href="#" className="text-warning small text-decoration-none">
                  See More <AiOutlineRight />
                </a>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <img src="https://placehold.co/40x40/f0f0f0/333333?text=🚗" alt="Dream Car" className="rounded-circle p-2" style={{ backgroundColor: '#e0f7fa' }} />
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 fw-bold">Dream Car <span className="text-muted small">Due date - August 15,</span></p>
                    <div className="d-flex justify-content-between small text-muted mb-1">
                      <span>Amount Payed: <span className="fw-bold text-dark">$5,000</span></span>
                      <span>Target: <span className="fw-bold text-dark">$20,000 (44%)</span></span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '44%' }} aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="me-3">
                    <img src="https://placehold.co/40x40/f0f0f0/333333?text=🎓" alt="Saving for College" className="rounded-circle p-2" style={{ backgroundColor: '#fff3e0' }} />
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-1 fw-bold">Saving for College <span className="text-muted small">Due date - August 15,</span></p>
                    <div className="d-flex justify-content-between small text-muted mb-1">
                      <span>Amount Payed: <span className="fw-bold text-dark">$5,000</span></span>
                      <span>Target: <span className="fw-bold text-dark">$20,000 (44%)</span></span>
                    </div>
                    <div className="progress" style={{ height: '6px' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '44%' }} aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Group Members Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Group Members</h5>
                <a href="#" className="text-warning small text-decoration-none">
                  See More <AiOutlineRight />
                </a>
              </div>
              <div className="row row-cols-2 g-2">
                {[
                  { img: userAvatar, id: '#959505850' },
                  { img: userAvatar, id: '#959505850' },
                  { img: userAvatar, id: '#959505850' },
                  { img: userAvatar, id: '#959505850' },
                ].map((member, index) => (
                  <div key={index} className="col">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={member.img} alt="User Avatar" className="rounded-circle mb-2" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                      <small className="fw-bold">User ID</small>
                      <small className="text-muted">{member.id}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Card (New Card) */}
          <div className="col-lg-8 col-md-12"> {/* This card spans wider */}
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Achievement <span className="text-muted small ms-1">Collected 4/24</span></h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>

              <div className="mb-4">
                <p className="fw-bold mb-2">Recently earned</p>
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <div className="p-2 rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ backgroundColor: '#e0f7fa', width: '50px', height: '50px' }}>
                      <BsCheckCircleFill size={28} className="text-info" />
                    </div>
                    <small className="d-block fw-bold">The Vault Master</small>
                  </div>
                  <div className="text-center">
                    <div className="p-2 rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ backgroundColor: '#fff3e0', width: '50px', height: '50px' }}>
                      <BsLightningFill size={28} className="text-warning" />
                    </div>
                    <small className="d-block fw-bold">The Flash</small>
                  </div>
                  <div className="text-center">
                    <div className="p-2 rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ backgroundColor: '#e8f5e9', width: '50px', height: '50px' }}>
                      <BsCashCoin size={28} className="text-success" />
                    </div>
                    <small className="d-block fw-bold">The Visionary</small>
                  </div>
                </div>
              </div>

              <div>
                <p className="fw-bold mb-2">Up next</p>
                <ul className="list-unstyled mb-0">
                  {[
                    { icon: <BsAwardFill size={20} className="text-primary" />, name: 'The Safety Net Hero', completed: 1, total: 8 },
                    { icon: <BsHeartFill size={20} className="text-danger" />, name: 'Investment Milestone', completed: 6, total: 10 },
                    { icon: <BsCashCoin size={20} className="text-success" />, name: 'The Budget Guru', completed: 12, total: 15 },
                    { icon: <BsLightningFill size={20} className="text-info" />, name: 'The Freedom Fighter', completed: 9, total: 10 },
                  ].map((item, index) => (
                    <li key={index} className="d-flex align-items-center mb-3">
                      <div className="me-3">{item.icon}</div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="fw-bold">{item.name}</span>
                          <small className="text-muted">{item.completed}/{item.total} completed</small>
                        </div>
                        <div className="progress" style={{ height: '5px' }}>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${(item.completed / item.total) * 100}%` }}
                            aria-valuenow={item.completed}
                            aria-valuemin="0"
                            aria-valuemax={item.total}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Currency Card (Adjusted) */}
          <div className="col-lg-4 col-md-6">
            <div className="card bg-white text-dark rounded p-3 h-100 shadow-sm d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Currency</h5>
                <AiOutlineQuestionCircle size={20} className="text-muted" />
              </div>
              <div className="flex-grow-1 d-flex align-items-end justify-content-around p-3">
                {/* Chart bars with varying heights */}
                {[
                  { height: '30%', label: '1' }, { height: '60%', label: '2' },
                  { height: '45%', label: '3' }, { height: '80%', label: '4' },
                  { height: '20%', label: '5' }, { height: '70%', label: '6' },
                  { height: '55%', label: '7' }, { height: '90%', label: '8' },
                  { height: '35%', label: '9' }, { height: '65%', label: '10' },
                  { height: '50%', label: '11' }, { height: '75%', label: '12' },
                  { height: '40%', label: '13' }, { height: '85%', label: '14' },
                  { height: '25%', label: '15' }, { height: '95%', label: '16' },
                  { height: '15%', label: '17' }, { height: '70%', label: '18' },
                  { height: '60%', label: '19' }, { height: '80%', label: '20' },
                  { height: '30%', label: '21' }, { height: '50%', label: '22' },
                  { height: '70%', label: '23' }, { height: '40%', label: '24' },
                ].map((bar, index) => (
                  <div key={index} className="d-flex flex-column align-items-center flex-shrink-0" style={{ width: '10px' }}>
                    <div className="bg-info rounded-top w-100" style={{ height: bar.height }}></div>
                    {/* <small className="mt-1 text-muted">{bar.label}</small> {/* Labels visible only if space allows */}
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-around mt-2 small text-muted">
                <span>1</span>
                <span>...</span>
                <span>24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default UserDashboard;