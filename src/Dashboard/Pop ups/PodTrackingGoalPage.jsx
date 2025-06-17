import React, { useState } from 'react';

function PodTrackingGoalPage2() {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    { id: 'mortgage', name: 'Mortgage' },
    { id: 'collegeTuition', name: 'College Tuition' },
    { id: 'debtPayoff', name: 'Debt Payoff' },
    { id: 'emergencyFund', name: 'Emergency Fund' },
    { id: 'businessCapital', name: 'Business Capital' },
    { id: 'savings', name: 'Savings' },
    { id: 'other', name: 'Other' },
  ];

  const handleGoalSelect = (goalId) => {
    setSelectedGoal(goalId);
  };

  return (
    <>
      {/* Link to Bootstrap CSS CDN */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '700px', width: '100%' }}>
          <div className="modal-content rounded-4 shadow-lg p-4">
            {/* Modal Header */}
            <div className="modal-header border-0 pb-0 d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-link text-dark p-0" aria-label="Back">
                {/* BsArrowLeft icon replaced with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
                </svg>
              </button>
              <h5 className="modal-title fw-bold text-dark text-center flex-grow-1">Pod Tracking Goal</h5>
              <div></div> {/* Empty div to balance header for centring title */}
            </div>
            <p className="text-center text-muted small mt-2 mb-4">
              help you create visual tracking reports on their dashboard for each goal
            </p>

            {/* Modal Body */}
            <div className="modal-body pt-0">
              <p className="fw-bold text-dark mb-3">Choose your financial goal by marking the box clearly.</p>
              <div className="row g-3">
                {goals.map((goal) => (
                  <div key={goal.id} className="col-md-4 col-6"> {/* Responsive columns */}
                    <button
                      className={`btn btn-outline-secondary w-100 py-3 rounded-pill d-flex align-items-center justify-content-between ${selectedGoal === goal.id ? 'active border-warning' : ''}`}
                      onClick={() => handleGoalSelect(goal.id)}
                      style={{
                        borderColor: selectedGoal === goal.id ? '#ff8c42' : '#e0e0e0', // Warning color if active
                        color: selectedGoal === goal.id ? '#ff8c42' : '#6c757d', // Text color if active
                        fontWeight: selectedGoal === goal.id ? 'bold' : 'normal',
                        backgroundColor: selectedGoal === goal.id ? '#fff3e0' : 'white', // Light background if active
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      <span>{goal.name}</span>
                      <span className="checkbox-custom"
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              border: `2px solid ${selectedGoal === goal.id ? '#ff8c42' : '#ccc'}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: selectedGoal === goal.id ? '#ff8c42' : 'transparent',
                              transition: 'all 0.2s ease-in-out'
                            }}>
                        {selectedGoal === goal.id && (
                          // BsCheckCircleFill icon replaced with inline SVG
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 pt-4 d-flex justify-content-end">
              <button type="button" className="btn btn-warning fw-bold rounded-pill px-4 py-2">
                Next <span className="ms-2" style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                  {/* BsArrowLeft icon rotated, replaced with inline SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PodTrackingGoalPage2;