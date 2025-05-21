// 

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StylingText.css';
import loginform from '../assets/Login.png';
import blackman from '../assets/img/abt_img2.png';
import Footer from './Footer';
import Header from './Header';

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

      {/* Hero Section */}
      <section
        className="py-5 text-white text-center section-slide-in"
        style={{
          background: 'linear-gradient(to bottom right, #20c997, #fd7e14)',
          paddingLeft: '0',
          paddingRight: '0',
          marginLeft: '0',
          marginRight: '0',
        }}
      >
        <div className="container-fluid">
          <p className="mb-4">
            <small>
              1200+ 5 Stars Reviews
              <span style={{ color: 'yellow' }}>★★★★★</span>
            </small>
          </p>
          <h1 className="display-4 fw-bold mb-3">
            Savings. financial security.<br />
            <span style={{ color: '#fd7e14' }}>financial freedom</span>
          </h1>
          <p className="lead mb-4">
            We are on a mission to redefine savings and wealth-building for millions.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-light btn-lg rounded-pill px-4 me-3">
              Learn More
            </button>
            <button className="btn btn-warning btn-lg rounded-pill px-4 d-flex align-items-center">
              Join the Community <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="py-5 bg-light ">
        <div className="container">
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

      <section className="py-5 bg-black text-white text-center overflow-hidden section-slide-in">
        <div className="container">
          <h2 className="mb-4">Explore Different Pod Types</h2>
          <div className="scrolling-text-container">
            <div className="scrolling-text">
              {podNames.map((name, index) => (
                <span key={index} className="pod-item rounded-pill px-4 py-2 me-3" style={{ backgroundColor: '#333' }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white text-center section-slide-in">
        <div className="container">
          <h2 className="fw-bold mb-2">See how it all fits in</h2>
          <h2 className="display-4 text-warning fw-bold">4 easy steps!</h2>
        </div>
      </section>

      <section className="py-5 bg-dark text-white section-slide-in">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              {/* Placeholder for the login form image */}
              <img
                src={loginform} // Replace with the actual image path
                alt="Login Form"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <div className="row gy-4">
                <div className="col-12 d-flex align-items-start">
                  <div className="bg-warning text-dark rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                    <span className="fw-bold">01</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Sign Up & Get Started</h3>
                    <p>Create your Koajo account in just a few minutes and easily verify your identity to enjoy seamless access to all features and services.</p>
                    <p className="fst-italic">No hassle, no sign-up fees.</p>
                  </div>
                </div>

                <div className="col-12 d-flex align-items-start">
                  <div className="bg-warning text-dark rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                    <span className="fw-bold">02</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Choose or Create a Pod</h3>
                    <p>Join a savings pod that fits your saving & financial goals or start your own with people you trust. Each pod runs for 12 weeks at a time, giving you short term access to the Lumpsum.</p>
                  </div>
                </div>

                {/* Placeholder for steps 3 and 4 - you'll need to provide the content for these */}
                <div className="col-12 d-flex align-items-start">
                  <div className="bg-warning text-dark rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                    <span className="fw-bold">03</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Contribute & Grow Together</h3>
                    <p>Regularly contribute your agreed-upon amount to the pod. Watch your savings grow collectively with other members.</p>
                  </div>
                </div>

                <div className="col-12 d-flex align-items-start">
                  <div className="bg-warning text-dark rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                    <span className="fw-bold">04</span>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Receive Your Lump Sum</h3>
                    <p>At the designated time in the pod cycle, receive your agreed-upon lump sum, empowering you to achieve your financial goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-white text-dark section-slide-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Why choose koajo</h2>
              <p className="lead mb-4">Traditional Ajo systems have served communities for centuries, but they need to evolve to keep up with modern financial demands.</p>
              <div className="d-flex align-items-center">
                <span className="text-warning me-2" style={{ fontSize: '1.2rem' }}>★</span>
                <p className="mb-0"><small>Rated 4.9/5 from over 600 reviews</small></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="bg-warning text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                          <i className="bi bi-columns-gap"></i> {/* Example icon - you might need a different one */}
                        </span>
                        <h5 className="card-title fw-bold mb-0">Flexible for Every Financial Goal</h5>
                      </div>
                      <p className="card-text"><small>Whether you're saving for emergencies, major purchases, or future investments, our platform keeps you on track, on a plan that fits.</small></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="bg-primary text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                          <i className="bi bi-shield-check"></i> {/* Example icon */}
                        </span>
                        <h5 className="card-title fw-bold mb-0">Built on Trust & Transparency</h5>
                      </div>
                      <p className="card-text"><small>With verified users, secure platform and third party industry leading payment processors, we ensure a safe and reliable experience.</small></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="bg-danger text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                          <i className="bi bi-exclamation-triangle"></i> {/* Example icon */}
                        </span>
                        <h5 className="card-title fw-bold mb-0">Reduced risk</h5>
                      </div>
                      <p className="card-text"><small>Save without the fear of other members or group leaders absconding with your hard earned savings, with Koajo.</small></p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="bg-info text-white rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                          <i className="bi bi-sliders"></i> {/* Example icon */}
                        </span>
                        <h5 className="card-title fw-bold mb-0">Customized Flexibility</h5>
                      </div>
                      <p className="card-text"><small>Enjoy the flexibility to choose or create pods that align with your specific financial timelines and goals.</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gray-100 text-white text-center section-slide-in">
        <div className="container">
          <h2 className="mb-3"><span className="text-warning fw-bold">koajo</span> Vs Other methods</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th scope="col" className="bg-warning text-dark">Compare Methods</th>
                  <th scope="col">Koajo</th>
                  <th scope="col">Personal Loans</th>
                  <th scope="col">Credit Cards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No credit check</td>
                  <td><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                </tr>
                <tr>
                  <td>No hidden fees</td>
                  <td><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                </tr>
                <tr>
                  <td>No late fees</td>
                  <td><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                </tr>
                <tr>
                  <td>No debt</td>
                  <td><i className="bi bi-check-circle-fill text-success"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                  <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                </tr>
                {/* Add more comparison rows here if needed */}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;