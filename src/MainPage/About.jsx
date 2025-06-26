import React, { useRef, useEffect, useState } from 'react'; // Import useRef, useEffect, useState
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylingText.css'; // Your existing CSS file
 // Import your animations CSS
import aboutheroImage from '../assets/img/image.png'; // 
import aboutphoneImage from '../assets/img/about_image_phone.jpeg'; // <--- UPDATE THIS PATH
import whatDrivesKoajoImage from '../assets/img/phone.png'; 
import williamIkwoagoImage from '../assets/img/william.png';
import amaAdeniyiImage from '../assets/img/ama.png'; // <--- UPDATE THIS PATH
// <--- UPDATE THIS PATH

import Footer from './Footer';
import Header from './Header';
import ScrollToTopArrow from './ScrollArrow'; // Import your scroll arrow component

// Import your image for this section
 // Adjust the path as necessary for your image


// Custom Hook for animation
// This hook will observe an element and set a state when it's visible
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

    // Cleanup function
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]); // Re-run effect if options change

  return [elementRef, isVisible];
};


function AboutPage() {
  // Apply the custom hook to the main hero section
  const [aboutHeroSectionRef, isAboutHeroSectionVisible] = useElementOnScreen({ threshold: 0.15 }); // Using your 0.15 threshold
  const [securitySectionRef, isSecuritySectionVisible] = useElementOnScreen({ threshold: 0.15 });
  const [whatDrivesKoajoSectionRef, isWhatDrivesKoajoSectionVisible] = useElementOnScreen({ threshold: 0.15 });
   const [teamSectionRef, isTeamSectionVisible] = useElementOnScreen({ threshold: 0.15 });
  return (
    <>
      <Header />

      {/* Section 1: About Koajo Hero */}
      <section
        ref={aboutHeroSectionRef} // Attach the ref here
        // Apply the animation classes conditionally
        className={`py-5 text-white position-relative overflow-hidden ${isAboutHeroSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
    style={{
  backgroundImage: 'linear-gradient(to top right, #1c645f 50%, #FF9966 100%)',
  backgroundBlendMode: 'overlay',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '120px',
  paddingBottom: '80px',
  backgroundSize: 'cover'
}}

      >
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-4 fw-bold" style={{ marginTop: '80px' }}>
                About <span style={{ color: '#ff8c42' }}>Koajo.</span>
              </h1>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                Koajo is revolutionizing the way people can save and build wealth. By modernizing the traditional rotating savings model, we provide a secure, automated, and transparent platform that empowers individuals to achieve financial stability and long-term growth.
              </p>
              <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                Credit and loans do not always work for your best interest, and moving funds to your savings account is not always sustainable, that's why many Americans have substantial debts and inexistent savings, but we want to solve that problem.
              </p>

              {/* Video Placeholder (based on the play button icon in the image) */}
              <div className="video-placeholder position-relative d-inline-block mt-4" style={{ width: '100%', maxWidth: '900px', aspectRatio: '16/9', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '15px', overflow: 'hidden' }}>
                <img src={aboutheroImage} // <--- FIXED: Added src attribute
                   // <--- FIXED: Added src attribute
                  alt="People interacting with Koajo platform"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
                {/* Play button overlay */}
                <div className="position-absolute top-50 start-50 translate-middle" style={{ cursor: 'pointer', zIndex: 2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ff8c42" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section
          ref={securitySectionRef} // Attach ref for animation
          className={`py-5 ${isSecuritySectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
          style={{ backgroundColor: '#fff' }} // Assuming a white or light background based on the image
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-4">
                  Our commitment to security & compliance
                </h2>
                <p className="lead text-muted mb-3">
                  Our reputation, platform, and integrity are built on keeping Koajo safe from bad actors while ensuring that our pods pay out reliably, and unlike traditional ajo, is non-reliant on the integrity of others.
                </p>
                <p className="lead text-muted mb-3">
                  A strong compliance program is at the core of our business model. Our robust system is designed using industry-standard practices while incorporating a modernized approach to rotating savings. We prioritize both sophistication and innovation without compromising accessibility and functionality.
                </p>
                <p className="lead text-muted mb-0">
                  We take pride in setting the highest standards for user protection. Trust and security are at the heart of Koajo, and our advanced security measures ensure that your information and funds remain safe. If you experience any issues verifying your identity, please contact us at support@koajo.com
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={aboutphoneImage} // <--- FIXED: Added src attribute
                  alt="Koajo security and compliance dashboard on mobile phones"
                  className="img-fluid rounded shadow-lg"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }}
                />
              </div>
            </div>
          </div>
        </section>
      {/* Section 3: What Drives Koajo */}
       <section
  ref={whatDrivesKoajoSectionRef} // Attach ref for animation
  className={`py-5 ${isWhatDrivesKoajoSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
  style={{ background: '#ffffff', color: '#000000' }} // White background, black text for the section
>
  <div className="container text-center">
    <h2 className="display-4 fw-bold mb-3">
      What drives <span style={{ color: '#ff8c42' }}>Koajo</span>?
    </h2>
    <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px', opacity: 0.8 }}>
      Our commitment to excellence is reflected in the platform we have built and the financial empowerment we offer to those who access Koajo.
    </p>

    <div className="row justify-content-center align-items-stretch g-4 mt-5">
      <div className="col-lg-3 col-md-6 d-flex">
        <div className="card text-center p-4 h-100" style={{ background: '#ffffff', border: '1px solid #ccc', borderRadius: '15px', color: '#000000' }}> {/* White card, solid gray border, black text */}
          <div className="card-body d-flex flex-column justify-content-center">
            <div className="mb-3">
              {/* Note: If you want the icon to be visible on a white background,
                  you might need a different icon or to remove the filter property
                  which was originally to make it visible on a dark background.
                  Consider using a Bootstrap Icon here instead of an image.
              */}
              <i className="bi bi-geo-alt-fill" style={{ fontSize: '40px', color: '#ff8c42' }}></i> {/* Example: Bootstrap icon for Mission */}
              {/* <img src={whatDrivesKoajoImage} alt="Mission Icon Placeholder" style={{ width: '60px', height: 'auto', filter: 'none' }} /> */}
            </div>
            <h4 className="fw-bold mb-2">Mission</h4>
            <p className="small opacity-75">
              We are on a mission to empower the world to save more and unlock financial possibilities. Our drive is to help people break free from the cycle of debt, save consistently, and build wealth together.
            </p>
            <a href="#" className="text-warning small text-decoration-none mt-auto">See more →</a> {/* Example link */}
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12 d-flex">
        <div className="card text-center p-3 h-100" style={{ background: '#ffffff', border: '1px solid #ccc', borderRadius: '15px', overflow: 'hidden' }}> {/* White card, solid gray border */}
          <img
            src={whatDrivesKoajoImage} // Using the same image for the large screenshot
            alt="Koajo Dashboard Mobile App"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-flex">
        <div className="card text-center p-4 h-100" style={{ background: '#ffffff', border: '1px solid #ccc', borderRadius: '15px', color: '#000000' }}> {/* White card, solid gray border, black text */}
          <div className="card-body d-flex flex-column justify-content-center">
            <div className="mb-3">
              <i className="bi bi-currency-dollar" style={{ fontSize: '40px', color: '#ff8c42' }}></i> {/* Example: Bootstrap icon for Value */}
              {/* <img src={whatDrivesKoajoImage} alt="Value Icon Placeholder" style={{ width: '60px', height: 'auto', filter: 'none' }} /> */}
            </div>
            <h4 className="fw-bold mb-2">The Value</h4>
            <p className="small opacity-75">
              We are driven to become the trusted financial ecosystem for everyone, regardless of background or income level, to save, grow wealth, and achieve financial freedom; without the burden of debt, high-interest rates, or predatory financial systems.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-flex">
        <div className="card text-center p-4 h-100" style={{ background: '#ffffff', border: '1px solid #ccc', borderRadius: '15px', color: '#000000' }}> {/* White card, solid gray border, black text */}
          <div className="card-body d-flex flex-column justify-content-center">
            <div className="mb-3">
              <i className="bi bi-eye-fill" style={{ fontSize: '40px', color: '#ff8c42' }}></i> {/* Example: Bootstrap icon for Vision */}
              {/* <img src={whatDrivesKoajoImage} alt="Vision Icon Placeholder" style={{ width: '60px', height: 'auto', filter: 'none' }} /> */}
            </div>
            <h4 className="fw-bold mb-2">The Vision</h4>
            <p className="small opacity-75">
              We are driven to become the trusted financial ecosystem for everyone, regardless of background or income level, to save, grow wealth, and achieve financial freedom.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 d-flex">
        <div className="card text-center p-4 h-100" style={{ background: '#ffffff', border: '1px solid #ccc', borderRadius: '15px', color: '#000000' }}> {/* White card, solid gray border, black text */}
          <div className="card-body d-flex flex-column justify-content-center">
            <div className="mb-3">
              <i className="bi bi-hand-thumbs-up-fill" style={{ fontSize: '40px', color: '#ff8c42' }}></i> {/* Example: Bootstrap icon for Promise */}
              {/* <img src={whatDrivesKoajoImage} alt="Promise Icon Placeholder" style={{ width: '60px', height: 'auto', filter: 'none' }} /> */}
            </div>
            <h4 className="fw-bold mb-2">The Promise</h4>
            <p className="small opacity-75">
              On this journey, Koajo's promise is to provide a simple, secure, and transparent savings experience that helps you take control of your financial future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
       </section>

      <section
        ref={teamSectionRef} // Attach ref for animation
        className={`py-5 ${isTeamSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        style={{ backgroundColor: '#f8f9fa' }} // Light gray background
      >
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-3">
            Meet the <span style={{ color: '#ff8c42' }}>Team</span>
          </h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            The dreamers, doers, and financial innovators working together to make saving easier and financial freedom achievable for everyone.
          </p>

          <div className="row justify-content-center g-4">
            {/* Team Member 1: William Ikwoago */}
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img
                    src={williamIkwoagoImage} // Replace with actual image path
                    alt="William Ikwoago"
                    className="card-img-top img-fluid"
                    style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
                  />
                  {/* Orange square with cross icon (placeholder) */}
                  <div className="position-absolute bottom-0 end-0 p-3" style={{ background: '#ff8c42', borderTopLeftRadius: '15px' }}>
                    <i className="bi bi-plus-lg text-white" style={{ fontSize: '24px' }}></i> {/* Bootstrap plus icon */}
                  </div>
                </div>
                <div className="card-body text-start p-4">
                  <h5 className="card-title fw-bold mb-1">William Ikwoago</h5>
                  <p className="card-text text-muted small">
                    Co-founder / Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2: Ama Adeniyi */}
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="position-relative">
                  <img
                    src={amaAdeniyiImage} // Replace with actual image path
                    alt="Ama Adeniyi"
                    className="card-img-top img-fluid"
                    style={{ objectFit: 'cover', height: '400px' }} // Adjust height as needed
                  />
                  {/* Orange square with cross icon (placeholder) */}
                  <div className="position-absolute bottom-0 end-0 p-3" style={{ background: '#ff8c42', borderTopLeftRadius: '15px' }}>
                    <i className="bi bi-plus-lg text-white" style={{ fontSize: '24px' }}></i> {/* Bootstrap plus icon */}
                  </div>
                </div>
                <div className="card-body text-start p-4">
                  <h5 className="card-title fw-bold mb-1">Ama Adeniyi</h5>
                  <p className="card-text text-muted small">
                    Co-founder / Chief Revenue Officer
                  </p>
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

export default AboutPage;