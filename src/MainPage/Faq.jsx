import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
//import { Link } from 'react-router-dom'; // Removed react-router-dom

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

    return (
        <>
            <Header />
            <hr style={{ margin: 0, border: '1px solid #ccc' }} />
          <br />
            <section className="bg-dark text-white text-center p-5 mt-4" style={{
                background: `linear-gradient(to bottom right, #004d40, #ff8c42), url('faq_hero.jpg')`,
                backgroundSize: 'cover'
            }}>
                <h1 className="display-4 fw-bold mb-3">Frequently ask questions</h1>
                <p className="lead">Unleash your financial potential by joining trusted Koajo savings circles. Your path to secure and collaborative saving starts here.</p>
            </section>

            <section className="container py-5">
                <h2 className="text-center mb-4 display-6 fw-bold">Frequently Asked Questions</h2>
                <div className="input-group mb-4 w-50 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-orange">Search</button>
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
                    {filteredFaqs.map((item, index) => (
                        <div key={index} className="accordion-item faq-item" data-category={item.category}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq-${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div id={`faq-${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default FAQPage;
