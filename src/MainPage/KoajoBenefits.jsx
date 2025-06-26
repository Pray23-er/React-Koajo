import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StylingText.css'; // This is where our custom CSS lives
import automatedPayoutsImg from '../assets/img/content.png';
import './KoajoBenefit.css'  
import koajoBarChartImg from '../assets/img/BarGraph.png';
// Assuming you'll have an image for the automated payouts.

function KoajoBenefits() {
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

  const [section1Ref, isSection1Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section2Ref, isSection2Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section3Ref, isSection3Visible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <>
      {/* Section 1: Why Choose Koajo (Remains unchanged) */}
      <section
        ref={section1Ref}
        className={`py-5 ${isSection1Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'} koajo-choose-section` }
      >
        <div className="container" style={{ backgroundColor: 'white' }}>
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
                  <div className="d-flex align-items-start feature-card-item">
                    <div className="flex-shrink-0 me-3">
                      <i className="bi bi-coin feature-icon-lg"></i>
                    </div>
                    <div className="feature-text-block">
                      <h4 className="fw-bold mb-1 feature-heading">Flexible for Every Financial Goal</h4>
                      <p className="small text-muted">
                        Whether you’re saving for emergencies, major purchases, or future investments, our platform keeps you on track, on a plan that fits.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 2: Built on Trust & Transparency */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start feature-card-item">
                    <div className="flex-shrink-0 me-3">
                      <i className="bi bi-shield-check feature-icon-lg"></i>
                    </div>
                    <div className="feature-text-block">
                      <h4 className="fw-bold mb-1 feature-heading">Built on Trust & Transparency</h4>
                      <p className="small text-muted">
                        With verified users, secure platform and third-party industry-leading payment processors, we ensure a safe and reliable experience.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 3: Reduced risk */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start feature-card-item">
                    <div className="flex-shrink-0 me-3">
                      <i className="bi bi-credit-card-fill feature-icon-lg"></i>
                    </div>
                    <div className="feature-text-block">
                      <h4 className="fw-bold mb-1 feature-heading">Reduced risk</h4>
                      <p className="small text-muted">
                        Save without the fear of other members or group leaders absconding with your hard-earned savings with Koajo.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature 4: Customized Flexibility */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start feature-card-item">
                    <div className="flex-shrink-0 me-3">
                      <i className="bi bi-arrow-repeat feature-icon-lg"></i>
                    </div>
                    <div className="feature-text-block">
                      <h4 className="fw-bold mb-1 feature-heading">Customized Flexibility</h4>
                      <p className="small text-muted">
                        Tailor your saving plans to your unique financial needs. Adjust contributions, payout schedules, and pod goals to fit your life.
                      </p>
                    {/* Corrected text to be more distinct from "Reduced risk" */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Financial security isn't just about wealth... - UPDATED CONTENT */}
      <section
        ref={section2Ref}
        className={`py-5 bg-white text-dark ${isSection2Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
        
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
            Financial security isn't just about <span style={{ color:'#ff8c42' }}>wealth</span> {' '}
              it's about <span style={{ color:'#ff8c42' }}> mental</span> peace
            </h2>
            <p className="lead text-muted px-lg-5">
              Unlike informal rotating savings, we are revolutionizing the way you experience savings
            </p>
          </div>

          <div className="row justify-content-center g-4 koajo-financial-grid"> {/* Added koajo-financial-grid for custom layout */}
            {/* Left Column - Runtime Circle */}
            <div className="col-lg-4 col-md-12">
              <div className="koajo-runtime-card h-100 p-4 border-0 shadow-sm">
                <div className="runtime-circle-container mb-4">
                  <div className="runtime-circle">
                    <span className="runtime-text">Runtime</span>
                    <span className="runtime-weeks">12 Weeks <br/> or 24 weeks</span>
                  </div>
                </div>
                <h4 className="fw-bold mb-2 text-center text-white">12 or 24 Week Structured Pod Cycle</h4>
                <p className="small text-white text-center">
                  Stay focused with a reliable 90-day or 180-day savings cycle guaranteeing consistency and steady financial growth.
                </p>
              </div>
            </div>

            {/* Middle Column - Stacked Feature Cards */}
            <div className="col-lg-4 col-md-12 d-flex flex-column justify-content-between">
                <div className="koajo-feature-card mb-4 p-4 border-0 shadow-sm flex-grow-1"> {/* Increased padding slightly */}
                    <h4 className="fw-bold mb-2">Secure Verification & Fraud Prevention</h4>
                    <p className="small text-white">
                        With verified users, secure platform and third party industry leading payment processors, we ensure a safe and reliable experience.
                    </p>
                </div>
                <div className="koajo-feature-card p-4 border-0 shadow-sm flex-grow-1"> {/* Increased padding slightly */}
                    <h4 className="fw-bold mb-2">Debt-Free Wealth Building</h4>
                    <p className="small text-white">
                        Build your finances without loans or credit, breaking free from the cycle of debt. Grow your savings and stay debt-free, without the worry of high interest rates.
                    </p>
                </div>
            </div>


            {/* Right Column - Automated Contributions */}
            <div className="col-lg-4 col-md-12">
              <div className="koajo-automated-card h-100 p-4 border-0 shadow-sm">
            <div className="text-center mb-3">
                <img 
                    src={automatedPayoutsImg} 
                    alt="Automated Payments Illustration" 
                    className="img-fluid automated-payouts-img d-block mx-auto" 
                />
            </div>
            <h4 className="fw-bold mb-2 text-white">Automated Contributions and Payouts</h4>
            <p className="small text-white">
                Enjoy a smooth, hands-free experience with automated transactions. Monitor your savings, contributions, and upcoming payouts anytime through your dashboard.
              </p>
              </div>
            </div>
        </div> {/* End of row for feature boxes */}
        </div>
      </section>

      {/* Section 3: Koajo Vs How You used to do it (Remains unchanged) */}
      <section
    ref={section3Ref}
    className={`py-5 ${isSection3Visible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
    style={{ backgroundColor: '#f8f9fa' }} /* Light background as per your last instruction */
>
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-dark"> {/* Changed to text-dark for light background */}
                Koajo <span style={{ color: '#ff8c42' }}>Vs</span> How You used to do it
            </h2>
            <p className="lead text-muted px-lg-5"> {/* Reverted to text-muted for light background */}
                While loans can help in a pinch, they come with interest and strings. Savings give YOURS to keep. No
                payments, no pressure. Just the financial freedom to enjoy life on YOUR terms.
            </p>
        </div>

        <div className="row justify-content-center d-flex align-items-stretch"> {/* d-flex and align-items-stretch for equal height columns */}
            <div className="col-lg-8 d-flex flex-column"> {/* d-flex flex-column to manage internal stretching */}
                <div className="table-responsive mb-4 koajo-comparison-table-new flex-grow-1"> {/* koajo-comparison-table-new and flex-grow-1 */}
                    <table className="table table-borderless text-start" style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', height: '100px' }}> {/* PRESERVED YOUR INLINE STYLES, including height: '100px' */}
                        <thead style={{ backgroundColor: '#e9ecef' }}>
                            <tr>
                                <th scope="col" className="py-3 px-3"></th>
                                <th scope="col" className="py-3 px-3" style={{ backgroundColor:'lightblue', color:'black' }}>Koajo</th> {/* PRESERVED YOUR INLINE STYLES */}
                                <th scope="col" className="py-3 px-3" style={{ backgroundColor:'lightblue', color:'black' }}>Personal loans</th> {/* PRESERVED YOUR INLINE STYLES */}
                                <th scope="col" className="py-3 px-3" style={{ backgroundColor:'lightblue', color:'black' }}>Credit cards</th> {/* PRESERVED YOUR INLINE STYLES */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-3 fw-bold small" style={{ backgroundColor:'black', color:'white' }}>No credit check required</td> {/* PRESERVED YOUR INLINE STYLES */}
                                <td className="py-2 px-3 text-success fs-5"><i className="bi bi-check-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5"><i className="bi bi-x-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5" style={{ backgroundColor:'lightblue', color:'black' }}><i className="bi bi-x-circle-fill"></i></td> {/* PRESERVED YOUR INLINE STYLES */}
                            </tr>
                            <tr>
                                <td className="py-2 px-3 fw-bold small" style={{ backgroundColor:'black', color:'white' }}>No hidden fees</td> {/* PRESERVED YOUR INLINE STYLES */}
                                <td className="py-2 px-3 text-success fs-5"><i className="bi bi-check-circle-fill"></i></td>
                                <td className="py-2 px-3 text-success fs-5"><i className="bi bi-check-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5" style={{ backgroundColor:'lightblue', color:'black' }}><i className="bi bi-x-circle-fill"></i></td> {/* PRESERVED YOUR INLINE STYLES */}
                            </tr>
                            <tr>
                                <td className="py-2 px-3 fw-bold small" style={{ backgroundColor:'black', color:'white' }}>No late fees</td> {/* PRESERVED YOUR INLINE STYLES */}
                                <td className="py-2 px-3 text-success fs-5"><i className="bi bi-check-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5"><i className="bi bi-x-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5" style={{ backgroundColor:'lightblue', color:'black' }}><i className="bi bi-x-circle-fill"></i></td> {/* PRESERVED YOUR INLINE STYLES */}
                            </tr>
                            <tr>
                                <td className="py-2 px-3 fw-bold small" style={{ backgroundColor:'black', color:'white' }}>No debt</td> {/* PRESERVED YOUR INLINE STYLES */}
                                <td className="py-2 px-3 koajo-col-data text-success fs-5"><i className="bi bi-check-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5"><i className="bi bi-x-circle-fill"></i></td>
                                <td className="py-2 px-3 text-danger fs-5" style={{ backgroundColor:'lightblue', color:'black' }}><i className="bi bi-x-circle-fill"></i></td> {/* PRESERVED YOUR INLINE STYLES */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-muted mt-3 small text-center px-lg-5">
                    Choose your contribution payments, however, all bi-weekly payment options are due on the 1st & 16th of each month,
                    monthly payments are due on the 1st and you choose the length and members for your pod.
                </p>
            </div>
            <div className="col-lg-4 d-flex flex-column">
                <div className="koajo-control-card h-100 p-4 border-0 shadow-sm flex-grow-1" style={{ backgroundColor:'black' }}>
                    <div className="card-body d-flex flex-column justify-content-between text-center">
                        <h4 className="fw-bold mb-3 text-white">
                            Koajo gives you <span className="text-warning">100% control</span> over your money,
                            unlike traditional financial systems that set the rules for you. Here, your savings habits define
                            your financial power, not a number.
                        </h4>
                        <p className="small text-light opacity-75">
                            We’ve got the financial tools and data to help you make the right choices for your money, on a platform designed to help you manage your financial power like a pro.
                        </p>
                        <img 
                            src={koajoBarChartImg} 
                            alt="Koajo Bar Chart" 
                            className="img-fluid rounded-lg mt-3 koajo-bar-chart-img d-block mx-auto" 
                            style={{ borderRadius: '8px', height:'auto'}} 
                        />
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