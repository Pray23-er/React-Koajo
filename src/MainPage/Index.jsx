import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StylingText.css'; // Make sure this file is correctly linked and updated
import loginform from '../assets/Login.png';
import blackman from '../assets/img/frame.png';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import ChooseYourPlanSection from './ChooseYourPlanSection';
import KoajoBenefits from './KoajoBenefits'; // Already updated in previous response
import ScrollToTopArrow from './ScrollArrow';

function LandingPage() {
  const podNames = ["Ajo Esusu", "Tandas", "Kye", "Susu", "Panda", "Mikado", "Poro", "Lugh", "More Pods Coming Soon"];

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      section.classList.add('section-slide-in');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      <HeroSection />

      {/* Section: Solving Real financial Challenges */}
      <div className="py-5 bg-light">
        <div className="container"> {/* This ensures content is constrained */}
          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="mb-2">
              Solving Real <span className="text-warning fw-bold">financial</span>{' '}
              <span aria-hidden="true">💰</span> <span aria-hidden="true">➕</span> Challenges
            </h2>
            <h2>Reshaping Financial Freedom At Scale!</h2>
          </div>

          {/* Features Grid */}
          <div className="row align-items-center gy-4">
            {/* Image Column */}
            <div className="col-lg-6 text-center">
              <img
                src={blackman}
                alt="Mobile Banking App Interface"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text Column */}
            <div className="col-lg-6">
              {/* Feature Item */}
              <div className="mb-4">
                <h3 className="h5 text-dark">Take control of your money:</h3>
                <p className="text-muted">
                  Most people let bills, debt, and lifestyle expenses dictate their money
                  for them. Without a plan, their income disappears before they can use
                  it to build security. Kojo helps break the Paycheck-to-Paycheck Cycle
                  by making saving structured, intentional, and...
                </p>
              </div>

              {/* Feature Item */}
              <div className="mb-4">
                <h3 className="h5 text-dark">Financial Freedom</h3>
                <p className="text-muted">
                  People struggle to save — not because they don't want to, but because
                  they don't have a system that works. Access Lump Sum Savings Without
                  Loans; think of it as borrowing money from your future self. Kojo
                  makes saving a predictable, effortless and motivating experience.
                </p>
              </div>

              {/* Feature Item */}
              <div>
                <h3 className="h5 text-dark">Stop the Cycle:</h3>
                <p className="text-muted">
                  Existing financial systems benefit those who are already ahead,
                  charging the highest fees to those who can least afford them. Kojo
                  levels the playing field. Users can use their lump-sum savings for
                  emergencies, major payments, business growth, or faster debt payoff.
                  Kojo makes saving structured, intentional, and easy without
                  predatory practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Explore Different Pod Types - Primary suspect for overflow */}
      <section className="py-5 bg-white text-dark text-center overflow-hidden section-slide-in">
        <div className="container">
          <h2 className="mb-4">Explore Different Pod Types</h2>
          {/* Ensure scrolling-text-container has overflow: hidden in CSS */}
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              {podNames.map((name, index) => (
                <span key={index} className="pod-item rounded-pill px-4 py-2 me-3" style={{ backgroundColor: '#666', color: 'white' }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Empowering Millions */}
      <section className="py-5 text-white text-center section-slide-in" style={{ backgroundColor: '#00332B' }}>
        <div className="container"> {/* This ensures content is constrained */}
          <h2 className="fw-bold">See How We Are <span className="text-warning fw-bold"> Empowering Millions</span> </h2>
        </div>
      </section>

      {/* Section: Sign Up Steps */}
      <section className="py-5" style={{ background: 'linear-gradient(to top right, #00332B 78%, gray 100%)' }}>
        <div className="container text-white"> {/* This ensures content is constrained */}
          <div className="row align-items-center">
            {/* Left: Login/Signup Form as Image */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <img
                src={loginform}
                alt="Login Form Mockup"
                className="img-fluid rounded-lg shadow-lg"
                style={{ maxWidth: '450px', borderRadius: '15px' }}
              />
            </div>

            {/* Right: Steps Guide */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-5 py-4">
                {/* Step 1 */}
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 me-3">
                    <span className="badge bg-warning rounded-circle p-2 px-3 fw-bold fs-5">01</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Sign Up & Get Started</h3>
                    <p className="">
                      Create your Koajo account in just a few minutes and easily verify
                      your identity to enjoy seamless access to all features and services.
                    </p>
                    <p className="small">No hassle, no sign-up fees.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 me-3">
                    <span className="badge bg-warning rounded-circle p-2 px-3 fw-bold fs-5">02</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Choose or Create a Pod</h3>
                    <p className="">
                      Join a savings pod that fits your saving & financial goals or start
                      your own with people you trust. Each pod runs for 12 weeks at a
                      time, giving you short term access to the Lumpsum.
                    </p>
                  </div>
                </div>
                {/* Steps 3 and 4 should be here if they exist, otherwise remove placeholder comment */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KoajoBenefits component handles its own internal layout */}
      <KoajoBenefits />

      <ChooseYourPlanSection />
      <ScrollToTopArrow />

      <Footer />
    </>
  );
}

export default LandingPage;