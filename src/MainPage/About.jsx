import React, { useEffect } from 'react';
import './StylingText.css';
import Footer from './Footer';
import Header from './Header';

function AboutPage() {
  useEffect(() => {
    const sections = document.querySelectorAll('.about-section');
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
   <div className="bg-gray-200 py-5 about-section">
  <div className="container bg-gray-200 ">
    <section className="text-center mt-5 about-section">
      <h2 className="fs-1 fw-bold">
        About <span className="text-warning">Koajo.</span>
      </h2>
      <p className="fs-5">
        Koajo is revolutionizing the way people can save and build wealth. By
        modernizing the traditional rotating savings model, we provide a
        secure, automated, and transparent platform that empowers
        individuals to achieve financial stability and long-term growth.
      </p>
      <p className="fs-5">
        Credit and loans do not always work for your best interest, and moving
        funds to your savings account is not always sustainable; that's why
        many Americans have substantial debts and insistent savings, but we
        want to solve that problem.
      </p>
    </section>

    <section className="mb-5 about-section">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <img
            src="your-image-url.jpg"
            alt="Three People Looking at a Laptop"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>

    <section className="row align-items-center about-section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="">
        <h2 className="fs-2 fw-bold">
          Our Commitment to Security & Compliance
        </h2>
        <p className="fs-5">
          Our reputation, platform, and integrity are built on keeping Koajo
          safe from bad actors while ensuring that our pods pay out reliably,
          and unlike traditional ajo, is non-reliant on the integrity of
          others.
        </p>
        <p className="fs-5">
          A strong compliance program is at the core of our business model.
          Our robust system is designed using industry-standard practices
          while incorporating a modern and superior approach to rotating
          savings. We prioritize both sophistication and innovation without
          compromising accessibility and functionality.
        </p>
        <p className="fs-5">
          We take pride in setting the highest standards for user protection.
          Trust and security are at the heart of Koajo, and our advanced
          security measures ensure that your information and funds remain
          safe.
        </p>
      </div>
      <div className="col-lg-6">
        {/* You might add a relevant image here */}
      </div>
    </section>
  </div>
</div>


    
    <section className="core-values-section bg-light py-5 about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 core-values-heading text-center mb-5">
            <h2 className="fs-1 fw-bold">
              What drives <span className="text-warning">Koajo</span> our core
              values
            </h2>
            <p className="fs-5">
              Our values shape everything we do, ensuring we deliver a platform
              that truly transforms how you manage your finances.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 value-item mission text-center mb-4 about-section">
            <div className="value-icon mb-3">
              <div className="bg-warning p-3 rounded-3">
                <span aria-hidden="true" className="fs-1">
                  🚀
                </span>
              </div>
            </div>
            <h3 className="fs-3 fw-bold">Mission</h3>
            <p className="fs-5">
              We strive to stay ahead by leveraging cutting-edge technology to
              create smarter, more efficient financial solutions.
            </p>
          </div>
          <div className="col-lg-4 value-item transparency text-center mb-4 about-section">
            <div className="value-icon mb-3">
              <div className="bg-warning p-3 rounded-3">
                <span aria-hidden="true" className="fs-1">
                  ✅
                </span>
              </div>
            </div>
            <h3 className="fs-3 fw-bold">Transparency</h3>
            <p className="fs-5">
              No hidden fees, no surprises. We believe in clear and honest
              communication, ensuring you know exactly.
            </p>
          </div>
          <div className="col-lg-4 d-lg-flex justify-content-center about-section">
            <img
              src="your-phone-mockup.jpg"
              alt="Phone Mockup"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-lg-4 value-item vision text-center mb-4 about-section">
            <div className="value-icon mb-3">
              <div className="bg-warning p-3 rounded-3">
                <span aria-hidden="true" className="fs-1">
                  🛡️✅
                </span>
              </div>
            </div>
            <h3 className="fs-3 fw-bold">Vision</h3>
            <p className="fs-5">
              Your trust is our priority. We safeguard your financial data with
              top-notch encryption and fraud protection.
            </p>
          </div>
          <div className="col-lg-4 value-item customer-centricity text-center mb-4 about-section">
            <div className="value-icon mb-3">
              <div className="bg-warning p-3 rounded-3">
                <span aria-hidden="true" className="fs-1">
                  🧑‍🤝‍🧑
                </span>
              </div>
            </div>
            <h3 className="fs-3 fw-bold">Customer-Centricity</h3>
            <p className="fs-5">
              Your success is our success. We design every feature and service
              with your needs in mind, delivering exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default AboutPage;
