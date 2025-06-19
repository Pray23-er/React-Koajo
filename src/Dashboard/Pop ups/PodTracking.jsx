import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function PodTracking() {
  // State to manage the currently selected goal, 'Other' is selected in your image
  const [selectedGoal, setSelectedGoal] = useState('Other'); 

  // Array of financial goals
  const goals = [
    'Mortgage',
    'College Tuition',
    'Debt Payoff',
    'Emergency Fund',
    'Business Capital',
    'Savings',
    'Other',
  ];

  // Handler for when a goal is selected (via the hidden radio input)
  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
  };

  return (
    // Main container to center the content vertically and horizontally
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {/* Card-like container for the entire UI */}
      <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', borderRadius: '15px', border: 'none' }}>

        {/* Header Section */}
        <div className="d-flex align-items-center justify-content-center position-relative mb-4">
          {/* Back Arrow - Using a simple button with text. Bootstrap doesn't have a built-in arrow icon. */}
          <button className="btn btn-link text-dark position-absolute start-0 p-0 fs-4" aria-label="Go back">
            &larr; 
          </button>
          <div className="text-center flex-grow-1">
            <h4 className="fw-bold mb-1">Pod Tracking goal</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              help you create visual tracking reports on their dashboard for each goal
            </p>
          </div>
        </div>

        {/* Instruction Text */}
        <p className="mb-4 fw-bold">Choose your financial goal by marking the box clearly.</p>

        {/* Goal Options Grid - Using Bootstrap's custom button group for radios */}
        <div className="row g-3 mb-5">
          {goals.map((goal) => (
            <div className="col-12 col-sm-6 col-md-4" key={goal}>
              {/* Bootstrap's 'btn-check' pattern for radio buttons styled as buttons */}
              <input
                type="radio"
                className="btn-check"
                name="financial-goal"
                id={`goal-${goal.replace(/\s+/g, '-')}`}
                checked={selectedGoal === goal}
                onChange={() => handleGoalSelect(goal)}
                autoComplete="off"
              />
              <label 
                className={`btn btn-outline-secondary rounded-pill w-100 py-3 ${selectedGoal === goal ? 'active' : ''}`} 
                htmlFor={`goal-${goal.replace(/\s+/g, '-')}`}
              >
                {goal}
              </label>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="d-flex justify-content-end">
          {/* Bootstrap's default primary button color will be used here */}
         <a href="/podtracking2">
          <button className="btn btn-warning rounded-pill px-4 py-2 fw-bold">
            Next &rarr;
          </button>
         </a>
        </div>
      </div>
    </div>
  );
}

export default PodTracking;