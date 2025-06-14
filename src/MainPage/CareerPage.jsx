import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylingText.css'; // Your existing CSS file
 // Your animation CSS

import Footer from './Footer';
import Header from './Header';
import ScrollToTopArrow from './ScrollArrow'; // Import your scroll to top arrow component

// Placeholder for any career-specific images you might upload later
// import careerHeroImage from './career-hero.jpg';
// import cultureImage from './our-culture.jpg';

// Custom Hook for animation (copy this from your AboutPage.jsx if it's not global)
const useElementOnScreen = (options) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};


function CareerPage() {
  // Refs and visibility states for each section
  const [careerHeroRef, isCareerHeroVisible] = useElementOnScreen({ threshold: 0.15 });
  const [cultureSectionRef, isCultureSectionVisible] = useElementOnScreen({ threshold: 0.15 });
  const [openingsSectionRef, isOpeningsSectionVisible] = useElementOnScreen({ threshold: 0.15 });
  const [ctaSectionRef, isCtaSectionVisible] = useElementOnScreen({ threshold: 0.15 });
  const [jobHeroSectionRef, isJobHeroSectionVisible] = useElementOnScreen({ threshold: 0.15 });
  const [applicationFormRef, isApplicationFormVisible] = useElementOnScreen({ threshold: 0.15 });


  return (
    <>
      <Header />


      <section
        ref={jobHeroSectionRef} // Attach ref for animation
        className={`py-5 text-dark position-relative overflow-hidden ${isJobHeroSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        style={{
          background: '#ffffff', // White background based on the image
          minHeight: '40vh', // Adjust as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '120px',
          paddingBottom: '80px',
          borderRadius: '15px', // Rounded corners on the section itself
          margin: '20px', // Some margin from edges if it's a floating hero
          position: 'relative',
          overflow: 'hidden' // Ensure particles/patterns don't overflow
        }}
      >
        {/* The subtle orange square pattern from the image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '150px', // Adjust size as needed
            height: '150px', // Adjust size as needed
            background: 'repeating-conic-gradient(#fff 0% 25%, #ffe6cc 0% 50%) 0 / 25px 25px', // Orange squares (approximation)
            opacity: 0.3,
            transform: 'translate(50px, -50px)', // Position top-right
            zIndex: 0
          }}
        ></div>
         <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100px', // Adjust size as needed
            height: '100px', // Adjust size as needed
            background: 'repeating-conic-gradient(#fff 0% 25%, #ffe6cc 0% 50%) 0 / 20px 20px', // Orange squares (approximation)
            opacity: 0.3,
            transform: 'translate(-30px, 30px)', // Position bottom-left
            zIndex: 0
          }}
        ></div>


        <div className="container text-center position-relative z-1"> {/* z-1 to ensure content is above the patterns */}
          <h1 className=" fw-bold mb-3">
           Start your journey towards <br /> the career of your dreams
          </h1>
          <p className="lead mx-auto text-muted" style={{ maxWidth: '600px' }}>
            Join Koajo and be a part of a dynamic team revolutionizing financial savings in Africa. We're building a future where financial wellness is accessible to everyone, and we need passionate innovators like you.
          </p>
          {/* You can add job-specific buttons or details here if this is a single job page */}
          {/*
          <div className="mt-4">
            <button className="btn btn-warning btn-lg me-3">Apply Now <i className="bi bi-arrow-right"></i></button>
            <button className="btn btn-outline-secondary btn-lg">Job Description</button>
          </div>
          */}
        </div>
      </section>


    <section
      ref={openingsSectionRef} // Attach ref for animation
      className={`py-5 ${isOpeningsSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
      style={{ backgroundColor: '#f8f9fa' }} // Light gray background
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">
            Explore Our <span style={{ color: '#ff8c42' }}>Openings</span>
          </h2>
          <p className="lead mx-auto text-muted" style={{ maxWidth: '700px' }}>
            Find your next career opportunity with Koajo and help us build a more secure financial future.
          </p>
        </div>

        {/* Job Categories/Filters */}
        <div className="d-flex justify-content-center mb-5">
          <div className="btn-group" role="group" aria-label="Job categories">
            <button type="button" className="btn btn-dark active" style={{ borderRadius: '8px' }}>All</button>
            <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '8px' }}>Product & Engineering</button> {/* Changed category */}
            <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '8px' }}>Marketing & Growth</button> {/* Changed category */}
            <button type="button" className="btn btn-outline-dark" style={{ borderRadius: '8px' }}>Operations & Support</button> {/* Changed category */}
          </div>
        </div>

        {/* Job Listing Cards */}
        <div className="row justify-content-center g-4">
          {/* Job Card 1: Senior Software Engineer */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2">Senior Software Engineer</h5>
                <p className="card-text text-muted small mb-2">
                  <i className="bi bi-hourglass-split me-1"></i> Full Time
                  <span className="mx-2">|</span>
                  <i className="bi bi-geo-alt-fill me-1"></i> Remote / Lagos
                </p>
                <p className="small mb-3 text-muted">
                  We're seeking a talented Senior Software Engineer to help build and scale our robust financial platform. You'll contribute to core features that impact thousands of users.
                </p>
                <h4 className="fw-bold mb-3">Competitive Salary</h4> {/* Changed to be more flexible */}
                <a href="#" className="btn btn-warning btn-sm">Apply Now <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* Job Card 2: Product Designer (UI/UX) */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2">Product Designer (UI/UX)</h5>
                <p className="card-text text-muted small mb-2">
                  <i className="bi bi-hourglass-split me-1"></i> Full Time
                  <span className="mx-2">|</span>
                  <i className="bi bi-geo-alt-fill me-1"></i> Remote / Abuja
                </p>
                <p className="small mb-3 text-muted">
                  Shape the user experience of Koajo's platform. You'll work on intuitive designs that make financial management simple and delightful for our users.
                </p>
                <h4 className="fw-bold mb-3">Competitive Salary</h4>
                <a href="#" className="btn btn-warning btn-sm">Apply Now <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* Job Card 3: Marketing Specialist */}
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2">Marketing Specialist</h5>
                <p className="card-text text-muted small mb-2">
                  <i className="bi bi-hourglass-split me-1"></i> Full Time
                  <span className="mx-2">|</span>
                  <i className="bi bi-geo-alt-fill me-1"></i> Lagos
                </p>
                <p className="small mb-3 text-muted">
                  Drive our growth and connect with more users. You'll develop and execute strategies to expand Koajo's reach and impact across Nigeria.
                </p>
                <h4 className="fw-bold mb-3">Competitive Salary</h4>
                <a href="#" className="btn btn-warning btn-sm">Apply Now <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* You would repeat the Job Card structure for as many jobs as you have */}
        </div>
      </div>
    </section>


    <section
      ref={applicationFormRef} // Attach ref for animation
      className={`py-5 ${isApplicationFormVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
      style={{ backgroundColor: '#ffffff' }} // White background
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text Content */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
            <p className="text-muted small text-uppercase fw-bold mb-2">Ready to Impact?</p> {/* Changed tagline */}
            <h2 className="display-4 fw-bold mb-3">
              Join the Koajo Team Today!
            </h2>
            <p className="lead text-muted mx-auto mx-lg-0" style={{ maxWidth: '450px' }}>
              We're always looking for passionate individuals who are driven to make a difference in financial inclusion. If you're ready for a rewarding challenge and want to grow with us, we'd love to hear from you.
            </p>
          </div>

          {/* Application Form */}
          <div className="col-lg-5">
            <div className="card border-0 shadow p-4" style={{ borderRadius: '20px', backgroundColor: '#f8f9fa' }}> {/* Light gray background for the card */}
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label small text-muted">Name</label>
                    <input type="text" className="form-control form-control-lg" id="nameInput" placeholder="Enter Your Name" style={{ borderRadius: '10px', backgroundColor: '#e9ecef', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label small text-muted">Email</label>
                    <input type="email" className="form-control form-control-lg" id="emailInput" placeholder="Enter Your email" style={{ borderRadius: '10px', backgroundColor: '#e9ecef', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label small text-muted">Phone Number</label> {/* Corrected label */}
                    <input type="tel" className="form-control form-control-lg" id="phoneInput" placeholder="Enter Your Phone number" style={{ borderRadius: '10px', backgroundColor: '#e9ecef', border: 'none' }} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categorySelect" className="form-label small text-muted">Desired Role Category</label> {/* Corrected label */}
                    <select className="form-select form-select-lg" id="categorySelect" style={{ borderRadius: '10px', backgroundColor: '#e9ecef', border: 'none' }}>
                      <option>Choose Category</option>
                      <option>Product & Engineering</option>
                      <option>Marketing & Growth</option>
                      <option>Operations & Support</option>
                      <option>Finance & Legal</option> {/* Added a relevant category */}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="experienceInput" className="form-label small text-muted">Relevant Experience</label> {/* Better label */}
                    <input type="text" className="form-control form-control-lg" id="experienceInput" placeholder="Years of Experience" style={{ borderRadius: '10px', backgroundColor: '#e9ecef', border: 'none' }} />
                  </div>
                  <button type="submit" className="btn btn-warning btn-lg w-100" style={{ borderRadius: '10px' }}>
                    Submit Application {/* Changed button text */}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <ScrollToTopArrow/>
      <Footer />
    </>
  );
}

export default CareerPage;