import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StylingText.css'; // Make sure this file exists and has your animation CSS
// Don't forget to import bootstrap-icons.css in your main App.js/index.js
// import 'bootstrap-icons/font/bootstrap-icons.css'; // (Not needed here if already in App.js)

// Placeholder image imports (keep these if they are actual images, otherwise remove)



function KoajoBenefits() {
  // Custom Hook for animation
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

  // Apply the custom hook to each section you want to animate
  const [section1Ref, isSection1Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section2Ref, isSection2Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section3Ref, isSection3Visible] = useElementOnScreen({ threshold: 0.1 });


  return (
    <>
      {/* Section 1: Why Choose Koajo */}
      <section
        ref={section1Ref}
        className={`py-5 ${isSection1Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        style={{ background: 'linear-gradient(to right, #e0f2f7, #f0f8ff)' }}
      >
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-4">
              <h2 className="display-5 fw-bold mb-3">
                Why choose <span style={{ color: '#ff8c42' }}>koajo</span>
              </h2>
              <p className="lead text-muted mb-4">
                Traditional Ajo systems have served communities for centuries, but they need to evolve to keep up with modern financial demands.
              </p>
              <div className="d-flex align-items-center mb-4">
                <span className="text-warning me-2 fs-4">&#9733;</span> {/* Star icon */}
                <p className="mb-0 small text-muted">Rated 4.9/5 from over <span className="text-dark fw-bold">600</span> review</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row g-4">
                {/* Feature 1: Flexible for Every Financial Goal */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      {/* Using Bootstrap Icon: coin (or cash-stack, wallet) */}
                      <i className="bi bi-coin" style={{ fontSize: '40px', color: '#ff8c42' }}></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Flexible for Every Financial Goal</h4>
                      <p className="small text-muted">
                        Whether you’re saving for emergencies, major purchases, or future investments, our platform keeps you on track, on a plan that fits
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 2: Built on Trust & Transparency */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      {/* Using Bootstrap Icon: shield-check (or handshake, lock) */}
                      <i className="bi bi-shield-check" style={{ fontSize: '40px', color: '#ff8c42' }}></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Built on Trust & Transparency</h4>
                      <p className="small text-muted">
                        With verified users, secure platform and third party industry leading payment processors, we ensure a safe and reliable experience.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 3: Reduced risk */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      {/* Using Bootstrap Icon: credit-card-check (or safe, lock-fill) */}
                      <i className="bi bi-credit-card-fill" style={{ fontSize: '40px', color: '#ff8c42' }}></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Reduced risk</h4>
                      <p className="small text-muted">
                        Save without the fear of other members or group leaders absconding with your hard earned savings, with Koajo
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 4: Customized Flexibility */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      {/* Using Bootstrap Icon: arrow-repeat (or options, gear) */}
                      <i className="bi bi-arrow-repeat" style={{ fontSize: '40px', color: '#ff8c42' }}></i>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Customized Flexibility</h4>
                      <p className="small text-muted">
                        Save without the fear of other members or group leaders absconding with your hard earned savings, with Koajo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Financial security isn't just about wealth... */}
      <section
        ref={section2Ref}
        className={`py-5 bg-dark text-white ${isSection2Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        style={{ background: 'linear-gradient(to bottom right, #00332B 68%, white 100%)' }} // Dark teal background
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Financial security isn't just about wealth{' '}
              <span className="text-warning">it's about mental peace</span>
            </h2>
            <p className="lead text-muted px-lg-5">
              Unlike informal rotating savings, we are revolutionizing the way you experience savings
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Pod Cycle Box */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#004d40', color: 'white' }}>
                <div className="card-body">
                  <h5 className="card-subtitle mb-2">Runtime</h5>
                  <h3 className="card-title fw-bold display-6 mb-3">12 Weeks <br/> or 24 weeks</h3>
                  <p className="card-text small mb-3">Structured Pod Cycle</p>
                  <p className="card-text text-light small opacity-75">
                    Stay focused with a reliable 90 day or 180 day cycle that helps you maintain consistency and steady financial growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Verification & Fraud Prevention */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff', color: '#343a40' }}>
                <div className="card-body">
                  <h4 className="fw-bold mb-2">Secure Verification & Fraud Prevention</h4>
                  <p className="small text-muted mb-3">
                    With verified users, secure platform and third party industry leading payment processors, we ensure a safe and reliable experience.
                  </p>
                  {/* Using Bootstrap Icon for visual emphasis for verification */}
                  <div className="text-center my-3">
                    <i className="bi bi-shield-lock-fill" style={{ fontSize: '60px', color: '#004d40' }}></i>
                  </div>
                  {/* Original image if still desired, otherwise remove */}
                  {/* <img src={secureVerificationImage} alt="Secure verification dashboard" className="img-fluid rounded-lg mt-3" style={{ borderRadius: '8px' }} /> */}
                </div>
              </div>
            </div>

            {/* Debt-Free Wealth Building */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff', color: '#343a40' }}>
                <div className="card-body">
                  <h4 className="fw-bold mb-2">Debt-Free Wealth Building</h4>
                  <p className="small text-muted mb-3">
                    Boost your finances without debt. Make smart money moves, pay off credit, grow your savings and stay debt-free. Take control of your financial journey.
                  </p>
                  {/* Using Bootstrap Icon for visual emphasis for debt-free */}
                  <div className="text-center my-3">
                    <i className="bi bi-currency-dollar" style={{ fontSize: '60px', color: '#004d40' }}></i> {/* Or bi-piggy-bank, bi-cash-coin */}
                  </div>
                  {/* Original image if still desired, otherwise remove */}
                  {/* <img src={automatedPayoutsImage} alt="Automated Payouts Dashboard" className="img-fluid rounded-lg mt-3" style={{ borderRadius: '8px' }} /> */}
                </div>
              </div>
            </div>

            {/* Automated Contributions and Payouts */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#fff', color: '#343a40' }}>
                <div className="card-body">
                  <h4 className="fw-bold mb-2">Automated Contributions and Payouts</h4>
                  <p className="small text-muted mb-3">
                    Simplify your payments, easily track contributions and receive automated transfers. Monitor your financial progress and manage your payouts anytime through your dashboard.
                  </p>
                  {/* Using Bootstrap Icon for visual emphasis for automation */}
                  <div className="text-center my-3">
                    <i className="bi bi-arrow-repeat" style={{ fontSize: '60px', color: '#004d40' }}></i> {/* Or bi-credit-card, bi-arrow-right-circle */}
                  </div>
                  {/* Original image if still desired, otherwise remove */}
                  {/* <img src={automatedPayoutsImage} alt="Automated Payouts Dashboard" className="img-fluid rounded-lg mt-3" style={{ borderRadius: '8px' }} /> */}
                </div>
              </div>
            </div>

          </div> {/* End of row for feature boxes */}
        </div>
      </section>

      {/* Section 3: Koajo Vs How You used to do it (from the bottom part of the image) */}
      <section
        ref={section3Ref}
        className={`py-5 ${isSection3Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Koajo <span style={{ color: '#ff8c42' }}>Vs</span> How You used to do it
            </h2>
            <p className="lead text-muted px-lg-5">
              While loans can help in a pinch, they come with interest and strings. Savings give YOURS to keep. No
              payments, no pressure. Just the financial freedom to enjoy life on YOUR terms.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="table-responsive mb-4">
                <table className="table table-borderless text-start" style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden' }}>
                  <thead style={{ backgroundColor: '#e9ecef' }}> {/* Light grey header */}
                    <tr>
                      <th scope="col" className="py-3 px-4"></th>
                      <th scope="col" className="py-3 px-4">Koajo</th>
                      <th scope="col" className="py-3 px-4">Personal loans</th>
                      <th scope="col" className="py-3 px-4">Credit cards</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 fw-bold">No credit check required</td>
                      <td className="py-3 px-4 text-success fs-5">✓</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 fw-bold">No hidden fees</td>
                      <td className="py-3 px-4 text-success fs-5">✓</td>
                      <td className="py-3 px-4 text-success fs-5">✓</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 fw-bold">No late fees</td>
                      <td className="py-3 px-4 text-success fs-5">✓</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 fw-bold">No debt</td>
                      <td className="py-3 px-4 text-success fs-5">✓</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                      <td className="py-3 px-4 text-danger fs-5">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 p-4 border-0 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#004d40', color: 'white' }}> {/* Dark teal background */}
                <div className="card-body d-flex flex-column justify-content-between">
                  <h4 className="fw-bold mb-3">
                    Koajo gives you <span className="text-warning">100% control</span> over your money.
                  </h4>
                  <p className="small text-light opacity-75">
                    We’ve got the financial tools and data to help you make the right choices for your money, on a platform designed to help you manage your financial power like a pro.
                  </p>
                  {/* Placeholder for training graph image */}
                  <img alt="Training graph" className="img-fluid rounded-lg mt-3" style={{ borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KoajoBenefits;