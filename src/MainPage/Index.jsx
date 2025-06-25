import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StylingText.css'; // Make sure this file is correctly linked and updated
import loginform from '../assets/img/Login Field.png';
import blackman from '../assets/img/frame.png'; // Image for the "Solving Real Financial Challenges" section
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import ChooseYourPlanSection from './ChooseYourPlanSection';
import KoajoBenefits from './KoajoBenefits'; // Already updated in previous response
import ScrollToTopArrow from './ScrollArrow';

function LandingPage() {
  const podNames = ["Ajo Esusu", "Tandas", "Kye", "Susu", "Panda", "Mikado", "Poro", "Lugh", "More Pods Coming Soon"];

  useEffect(() => {
    // Select all elements that should have the scroll animation.
    // This will target all <section> elements (including the new combined one)
    // and the specific div for "Solving Real Financial Challenges".
    const animatedElements = document.querySelectorAll('section, .py-5.bg-light');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.15, // Adjust as needed
      }
    );

    // For each element, add the initial 'section-slide-in' class and start observing it.
    animatedElements.forEach((el) => {
      el.classList.add('section-slide-in'); // Ensures the element starts in its hidden state
      observer.observe(el);
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Header />
      <HeroSection />

      {/* Section: Solving Real financial Challenges */}
      <div className="py-5 bg-light mt-60 pt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-2">
              Solving Real <span className="text-orange fw-bold">financial</span>{' '}
              <span aria-hidden="true">💰</span> <span aria-hidden="true">✨</span> Challenges
            </h2>
            <h2>Reshaping Financial Freedom At Scale! </h2>
          </div>
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 text-center">
              <img
                src={blackman}
                alt="Mobile Banking App Interface"
                className="img-fluid financial-challenge-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="mb-4 d-flex align-items-start">
                <div className="flex-shrink-0 me-3 mt-1">
                  <span className="h4 d-block" role="img" aria-label="money bag">💰</span>
                </div>
                <div>
                  <h3 className="h5 text-dark mt-0">Take control of your money:</h3>
                  <p className="text-muted mb-0">
                    Most people let bills, debt, and lifestyle expenses dictate their money
                    for them. Without a plan, their income disappears before they can use
                    it to build security. Koajo helps break the Paycheck-to-Paycheck Cycle
                    by making saving structured, intentional, and...
                  </p>
                </div>
              </div>
              <div className="mb-4 d-flex align-items-start">
                <div className="flex-shrink-0 me-3 mt-1">
                  <span className="h4 d-block" role="img" aria-label="sparkles">✨</span>
                </div>
                <div>
                  <h3 className="h5 text-dark mt-0">Financial Freedom</h3>
                  <p className="text-muted mb-0">
                    People struggle to save — not because they don't want to, but because
                    they don't have a system that works. Access Lump Sum Savings Without
                    Loans; think of it as borrowing money from your future self. Koajo
                    makes saving a predictable, effortless and motivating experience.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0 me-3 mt-1">
                  <i className="bi bi-x-circle-fill h4 text-danger d-block"></i>
                </div>
                <div>
                  <h3 className="h5 text-dark mt-0">Stop the Cycle:</h3>
                  <p className="text-muted mb-0">
                    Existing financial systems benefit those who are already ahead,
                    charging the highest fees to the highest fees to those who can least afford them. Koajo
                    levels the playing field. Users can use their lump-sum savings for
                    emergencies, major payments, business growth, or faster debt payoff.
                    Koajo makes saving structured, intentional, and easy without
                    predatory practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Explore Different Pod Types */}
      <section className="py-5 bg-white text-dark text-center overflow-hidden section slide in">
        <div className="container">
          <h2 className="mb-4">Explore Different Pod Types</h2>
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              {podNames.map((name, index) => (
                <span
                  key={index}
                  className="pod-item rounded-pill px-4 py-2 me-3"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Combined Section: Empowering Millions & Sign Up Steps --- */}
    
          <section className="sign-up-steps-section" >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            See How We Are{' '}
            <span className="text-orange">Empowering Millions</span>
          </h2>
        </div>

        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-lg-6 text-center mb-4">
            <img src={loginform} alt="Login Form" />
          </div>

          {/* Right: Steps */}
          <div className="col-lg-6">
            <div className="sign-up-steps-container">
              {/* Step 1 */}
              <div className="sign-up-step-item">
                <span className="sign-up-step-badge">01</span>
                <div>
                  <h3>Sign Up & Get Started</h3>
                  <p>
                    Create your Koajo account in just a few minutes and easily verify
                    your identity to enjoy seamless access to all features and services.
                  </p>
                  <p className="small">No hassle, no sign-up fees.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="sign-up-step-item">
                <span className="sign-up-step-badge">02</span>
                <div>
                  <h3>Choose or Create a Pod</h3>
                  <p>
                    Join a savings pod that fits your saving & financial goals or start
                    your own with people you trust. Each pod runs for 12 weeks at a
                    time, giving you short-term access to the lump sum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      

      <KoajoBenefits />
      <ChooseYourPlanSection />
      <ScrollToTopArrow />
      <Footer />
    </>
  );
}

export default LandingPage;