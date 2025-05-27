import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
//import { Link } from 'react-router-dom';
import './StylingText.css';
import faqimage from '../assets/fine girl.png'; // Import your image here


// Custom Hook for animation (defined here for simplicity, ideally in a separate file)
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


const faqData = [
  {
    category: 'contributions',
    question: 'How do I make my contributions?',
    answer: 'You can make contributions through various payment methods supported by our platform.',
  },
  {
    category: 'contributions',
    question: 'Can I change my contribution amount after setting it for my pod?',
    answer: 'In most cases, you cannot change your contribution amount once it\'s set for an active pod.',
  },
  {
    category: 'contributions',
    question: 'How do I pause my contributions?',
    answer: 'Pausing contributions might not be allowed in all pods. Refer to your pod\'s specific rules or contact support.',
  },
  {
    category: 'contributions',
    question: 'Is there a minimum contribution amount for pods?',
    answer: 'Yes, each pod creator sets a minimum contribution amount.',
  },
  {
    category: 'contributions',
    question: 'Can I choose how much I contribute?',
    answer: 'Yes, within the limits set by the pod creator.',
  },
  {
    category: 'contributions',
    question: 'Are there any fees for making contributions?',
    answer: 'Any applicable fees will be transparently displayed during the payment process.',
  },
    {
    category: 'contributions',
    question: 'Can I see early or make extra contributions?',
    answer: 'Might be possible depending on the pod\'s settings. Check your pod rules or contact the admin.',
  },
  {
    category: 'contributions',
    question: 'What payment methods are supported?',
    answer: 'We support various payment methods, including bank transfers, mobile money, and major credit/debit cards.',
  },
  {
    category: 'payouts',
    question: 'How and when do I receive my payout?',
    answer: 'Payouts are typically processed automatically to your linked bank account according to the pod\'s schedule.',
  },
  {
    category: 'payouts',
    question: 'Can I choose my payout creation?',
    answer: 'The payout order is usually determined by the pod\'s rules, which could be a rotating schedule, a draw, or another agreed-upon method.',
  },
  {
    category: 'payouts',
    question: 'Can I delay or reschedule my payout?',
    answer: 'Delaying or rescheduling your payout might disrupt the pod\'s flow and is generally not permitted.',
  },
  {
    category: 'payouts',
    question: 'How do I update my linked bank account?',
    answer: 'You can update your linked bank account in your profile settings under the "Payment Methods" section.',
  },
  {
    category: 'security',
    question: 'How secure is my money on Koajo?',
    answer: 'Your security is our top priority. We use industry-leading encryption and security measures to protect your funds and personal information.',
  },
  {
    category: 'security',
    question: 'What measures do you have in place to prevent fraud?',
    answer: 'We have several measures in place to prevent fraud, including user verification processes, monitoring for suspicious activity, and secure payment processing.',
  },
];



const FAQPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqData.filter(item => {
        return (
            (activeCategory === 'all' || item.category === activeCategory) &&
            item.question.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const [faqHeroRef, isFaqHeroVisible] = useElementOnScreen({ threshold: 0.15 });
    const [faqContentRef, isFaqContentVisible] = useElementOnScreen({ threshold: 0.15 });
    const [iconBoxSectionRef, isIconBoxSectionVisible] = useElementOnScreen({ threshold: 0.15 });
    const [securityComplianceSectionRef, isSecurityComplianceSectionVisible] = useElementOnScreen({ threshold: 0.15 });


    return (
        <>
            <Header />
            <hr style={{ margin: 0, border: '1px solid #ccc' }} />
            <br />
            {/* Section 1: FAQ Hero / Header */}
            <section
              ref={faqHeroRef}
              className={`py-5 text-dark position-relative overflow-hidden ${isFaqHeroVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
              style={{
                  background: '#ffffff',
                  minHeight: '40vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '120px',
                  paddingBottom: '80px',
                  borderRadius: '15px',
                  margin: '20px',
                  position: 'relative',
                  overflow: 'hidden'
              }}
            >
                {/* The subtle orange square pattern from the image */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '150px',
                        background: 'repeating-conic-gradient(#fff 0% 25%, #ffe6cc 0% 50%) 0 / 25px 25px',
                        opacity: 0.3,
                        transform: 'translate(50px, -50px)',
                        zIndex: 0
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100px',
                        height: '100px',
                        background: 'repeating-conic-gradient(#fff 0% 25%, #ffe6cc 0% 50%) 0 / 20px 20px',
                        opacity: 0.3,
                        transform: 'translate(-30px, 30px)',
                        zIndex: 0
                    }}
                ></div>


                <div className="container text-center position-relative z-1">
                    <h1 className="display-4 fw-bold mb-3" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}> {/* Added font smoothing */}
                        Frequently Asked <span style={{ color: '#ff8c42' }}>Questions</span>
                    </h1>
                    <p className="lead mx-auto" style={{ maxWidth: '600px', color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}> {/* Added font smoothing */}
                        Find answers to the most common questions about Koajo, our services, and how we can help you.
                    </p>
                </div>
            </section>

            <section
            ref={iconBoxSectionRef} // Attach ref for animation
            className={`py-5 ${isIconBoxSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
            style={{ backgroundColor: '#f8f9fa' }} // Light gray background
            >
            <div className="container">
                <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}> {/* Applied to heading */}
                    How Can We <span style={{ color: '#ff8c42' }}>Help You?</span>
                </h2>
                <p className="lead mx-auto" style={{ maxWidth: '700px', color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}> {/* Applied to paragraph */}
                    Explore our comprehensive support resources and guides to find the answers you need.
                </p>
                </div>

                 <div className="row justify-content-center g-4">
                    {/* Icon Box 1: Getting Started */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-calendar-check-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Getting Started</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Learn how to set up your account and start using our platform effectively.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 2: Customer Service */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-chat-dots-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Customer Service</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Get help with any questions or issues you have with our platform.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 3: Account Security */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-shield-lock-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Account Security</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Learn how to keep your account secure and protect your data.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 4: Advanced Settings */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-gear-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Advanced Settings</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Customize your experience with advanced features and settings.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 5: Troubleshooting */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-exclamation-triangle-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Troubleshooting</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Find solutions to common issues and errors.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 6: Community Forum */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-people-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Community Forum</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Connect with other users, ask questions, and share knowledge.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 7: Documentation */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-file-earmark-text-fill display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Documentation</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Access detailed guides and documentation for our platform.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Icon Box 8: Best Practices */}
                    <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
                        <div className="card h-100 border-0 shadow-sm text-center p-3" style={{ borderRadius: '15px' }}>
                        <div className="card-body">
                            <div className="mb-3">
                            <i className="bi bi-book-half display-5" style={{ color: '#ff8c42' }}></i>
                            </div>
                            <h5 className="card-title fw-bold mb-2" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>Best Practices</h5>
                            <p className="card-text small" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
                            Learn how to get the most out of our platform with expert tips and advice.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
               {/* End row */}

            </div> {/* End container */}
            </section>

           


<section
  ref={securityComplianceSectionRef} // Attach ref for animation
  className={`py-5 ${isSecurityComplianceSectionVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
  style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }} // White background
>
  <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image (MOVED TO LEFT) */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={faqimage} 
              alt="Woman with cellphone"
              className="img-fluid rounded-4 shadow-lg" // Rounded corners and shadow
              style={{ maxHeight: '500px', objectFit: 'cover' }} // Adjust height as needed
            />
          </div>

          {/* Right Column: Text Content (MOVED TO RIGHT) */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              Team Up In Help Center To Smoothly Resolve Every Case
            </h2>
            <p className="lead mb-4" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              Lorem ipsum dolor sit amet consectetur. Morbi urna id vitae eu pulvinar Amet ultrices est dolor lorem. Porttitor placerat sed enim mauris cursus condimentum ornare nullam dui. Ut accumsan etiam mus egestas nulla sed. In hac morbi nisl bibendum leo porttitor. Mattis consectetur imperdiet arcu nunc purus augue.
            </p>
            <h5 className="fw-bold mb-3" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              Bright Solutions. Profitable Results
            </h5>
            <p className="mb-0" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              Lorem ipsum dolor sit amet consectetur. Morbi urna id vitae eu pulvinar Amet ultrices est dolor lorem. Porttitor placerat sed enim mauris cursus condimentum ornare nullam dui. Ut accumsan etiam mus egestas nulla sed. In hac morbi nisi bibendum leo porttitor. Mattis consectetur imperdiet arcu nunc purus augue.
            </p>
          </div>
        </div>
      </div>
    </section>

            {/* Section 2: FAQ Accordion Content */}
            <section
                ref={faqContentRef}
                className={`container py-5 ${isFaqContentVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
                style={{ backgroundColor: '#ffffff' }}
            >
                <h2 className="text-center mb-4 display-6 fw-bold" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>All Your Questions, Answered</h2>
                <div className="input-group mb-4 w-50 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ borderRadius: '8px 0 0 8px' }}
                    />
                    <button className="btn btn-warning" style={{ borderRadius: '0 8px 8px 0' }}>Search</button>
                </div>
                <nav className="mb-4">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeCategory === 'all' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeCategory === 'contributions' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('contributions')}
                            >
                                Contributions
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeCategory === 'payouts' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('payouts')}
                            >
                                Payouts
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeCategory === 'security' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('security')}
                            >
                                Security
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="accordion" id="faqAccordion">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((item, index) => (
                            <div key={index} className="accordion-item mb-3 rounded-3 shadow-sm" data-category={item.category}>
                                <h2 className="accordion-header" id={`heading-${index}`}>
                                    <button
                                        className="accordion-button fw-bold collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#faq-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`faq-${index}`}
                                        style={{ borderRadius: '15px', color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }} // Applied to button
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div id={`faq-${index}`} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" style={{ color: '#000000', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}> {/* Applied to body */}
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted mt-5">No FAQs found for your search/filter.</p>
                    )}
                </div>
            </section>

            {/* Section 3: Call to Action (e.g., still have questions?) */}
            <section
                className={`py-5 text-center text-white ${isFaqContentVisible ? 'animate-on-scroll is-visible' : 'animate-on-scroll'}`}
                style={{ background: 'linear-gradient(to bottom right, #004d40, #ff8c42)' }}
            >
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3">
                        Still Have Questions?
                    </h2>
                    <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
                        Our support team is here to help! Reach out to us for personalized assistance.
                    </p>
                    <button className="btn btn-light btn-lg">
                        Contact Support <i className="bi bi-chat-dots-fill ms-2"></i>
                    </button>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default FAQPage;