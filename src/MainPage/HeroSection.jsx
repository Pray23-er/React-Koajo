import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';
import heroBottomImage from '../assets/img/Cards.png';

function HeroSection() {
  return (
    <section className="hero-section-background text-white text-center position-relative overflow-visible">
      <div className="container d-flex flex-column justify-content-center py-5" style={{ minHeight: '70vh', zIndex: 2, position: 'relative' }}>
        {/* Stars and Reviews */}
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <p className="small mb-0 me-2 opacity-75">1200+ 5 Stars Reviews</p>
          <span className="d-flex gap-1">
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
            <span className="text-warning">&#9733;</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="display-3 mb-3 hero-main-heading">
          Savings. financial security.<br />
          <span className="text-orange">financial </span>freedom
        </h1>
        <p className="lead mb-4 px-lg-5 opacity-90">
          We are on a mission to redefine savings and wealth-building for millions.
        </p>

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 ">

          <button className="btn btn-custom-primary btn-lg d-flex align-items-center gap-2 ">
            Join the Community <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Overlapping Image */}
      <img
        src={heroBottomImage}
        alt="Cards Illustration"
        className="hero-overlap-img"
      />
    </section>
  );
}

export default HeroSection;
