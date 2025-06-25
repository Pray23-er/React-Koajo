import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylingText.css'; // Custom styles

function ChooseYourPlanSection() {
  const plans = [
    {
      id: 1,
      title: '$100 Pod Plan',
      description: '$100 contribution payment due on the 1st & 16th of each month for 3 or 6 months.',
      isCustom: false,
    },
    {
      id: 2,
      title: '$200 Pod Plan',
      description: '$200 contribution payment due on the 1st & 16th of each month for 3 or 6 months.',
      isCustom: false,
    },
    {
      id: 3,
      title: '$500 Pod Plan',
      description: '$500 contribution payment due on the 1st & 16th of each month for 3 or 6 months.',
      isCustom: false,
    },
    {
      id: 4,
      title: '$1000 Pod Plan',
      description: '$1000 contribution payment due on the 1st & 16th of each month for 3 or 6 months.',
      isCustom: false,
    },
    {
      id: 5,
      title: 'Custom Pod Plan',
      subTitle: 'Pod Plan',
      description: 'Choose your contribution payments. All bi-weekly payments are due on the 1st & 16th, monthly on the 1st. You choose the length and members.',
      isCustom: true,
    },
  ];

  return (
    <section className="py-5 choose-plan-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">
            Choose your <span className="text-dark" style={{ color: '#004d40' }}>Plan</span>
          </h2>
          <p className="lead text-muted">
            Our mission is to empower individuals financially and build wealth within our communities...
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm plan-card">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title fw-bold mb-2" style={{ color: '#343a40' }}>
                    {plan.title}
                  </h3>
                  {plan.isCustom && (
                    <p className="card-subtitle text-muted mb-3">{plan.subTitle}</p>
                  )}
                  <p className="card-text text-muted mb-4 flex-grow-1">
                    {plan.description}
                  </p>
                  <a
                    href="#"
                    className="btn btn-orange rounded-pill align-self-start py-2 px-4 d-flex align-items-center gap-2"
                  >
                    Get Started <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseYourPlanSection;
