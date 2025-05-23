import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// You would typically define your slide-in CSS in a global stylesheet
// or a CSS module like 'animations.module.css' and import it:
// import styles from './animations.module.css'; // Example for CSS Modules

// Import the image for the bottom of the hero section
import heroBottomImage from '../assets/img/Cards.png'; // <--- UPDATE THIS PATH


function HeroSection() {
  return (
    <section
      className="d-flex flex-column text-white text-center" // Removed position-relative and overflow-hidden
      style={{
        background: 'linear-gradient(to bottom right, #004d40, #ff8c42)', // Approximated gradient from image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'auto', // Allow height to be determined by content
        paddingTop: '80px', // REDUCED TOP PADDING for less space at the top
        paddingBottom: '0', // No padding bottom on the section itself, managed by image margin
      }}
    >
      <div className="container d-flex flex-column flex-grow-1 justify-content-center pt-4 pb-4"> {/* Added padding to container for overall internal spacing */}
        {/* Top Reviews/Stars */}
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <p className="small mb-0 me-2">1200+ 5 Stars Reviews</p>
          {/* Placeholder for star icons */}
          <span className="d-flex gap-1">
            <span className="text-warning">&#9733;</span> {/* Star icon */}
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
          </span>
        </div>

        {/* Main Heading and Subheading - Placeholder for slide-in animation */}
        <div className="fade-in-slide-up my-auto"> {/* my-auto to push content to center */}
          <h1 className="display-3 fw-bold mb-3">
            Savings. financial security.
            <br />
            <span style={{ color: '#ff8c42' }}>financial freedom</span>
          </h1>
          <p className="lead mb-5 px-lg-5">
            We are on a mission to redefine savings and wealth-building for millions.
          </p>
        </div>

        {/* Call-to-action Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-5"> {/* Added mb-5 to create space between buttons and image */}
          <button className="btn btn-light btn-lg px-4 py-2 rounded-pill">
            Learn More
          </button>
          <button className="btn btn-warning btn-lg px-4 py-2 rounded-pill d-flex align-items-center gap-2">
            Join the Community <span aria-hidden="true">→</span>
          </button>
        </div>
      </div> {/* End of container for main content */}

      {/* New Image at the bottom of the Hero Section - Now in normal flow */}
      <div className="w-100 mt-auto"> {/* Use mt-auto to push it to the bottom within the flex column */}
        <img
          src={heroBottomImage} // <--- YOUR IMAGE HERE
          alt="Hero Section Bottom Visual"
          className="img-fluid d-block mx-auto" // Responsive, center-aligned block image
          style={{
            maxWidth: '100vw', // Max width of viewport
            width: 'auto', // Let its natural width determine
            height: 'auto',
            display: 'block', // Ensure it behaves as a block element
            margin: '0 auto', // Center it
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;