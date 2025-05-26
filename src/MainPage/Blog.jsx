import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import blog1 from '../assets/blog_images/blog1.jpeg';
import blog2 from '../assets/blog_images/blog2.jpeg';
import blog3 from '../assets/blog_images/blog3.jpeg';
import blog4 from '../assets/blog_images/blog4.png';
import blog5 from '../assets/blog_images/blog5.jpeg';
import blog6 from '../assets/blog_images/blog6.jpeg';
import './StylingText.css'; // Import your custom styles

function BlogPage () {
    const sectionRef = useRef(null); // Create a ref for the section

    useEffect(() => {
        const currentSection = sectionRef.current;

        if (currentSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            // Optionally, stop observing once it's visible
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.1, // Trigger when 10% of the section is visible
                }
            );

            observer.observe(currentSection);

            // Cleanup function to disconnect the observer when the component unmounts
            return () => {
                if (currentSection) {
                    observer.unobserve(currentSection);
                }
                observer.disconnect();
            };
        }
    }, []); // Empty dependency array means this runs once on mount

    const blogPosts = [
        {
            title: 'Getting the Hang of Budgeting',
            content: 'Check out some easy ways to set up and stick to a budget that fits your life.',
            date: 'January 15, 2025',
            image: blog1,
        },
        {
            title: 'Awesome Tools for Keeping Track of Your Money',
            content: 'Find out the coolest apps and tools that make tracking your spending and saving super easy.',
            date: 'February 2, 2025',
            image: blog2,
        },
        {
            title: 'Starting Your Credit Journey',
            content: 'Uncover some solid tips to boost your credit score and build a great financial reputation.',
            date: 'February 20, 2025',
            image: blog3,
        },
        {
            title: 'Easy Peasy Retirement Planning',
            content: 'Here are some simple ideas to kickstart your retirement planning for a chill and secure future.',
            date: 'March 5, 2025',
            image: blog4,
        },
        {
            title: 'Money-Saving Tips for Millennials',
            content: 'Check out these practical saving hacks that can help millennials reach financial freedom.',
            date: 'March 18, 2025',
            image: blog5,
        },
        {
            title: 'Common Financial Blunders to Dodge',
            content: 'Get the scoop on common money mistakes and how to dodge them for a more secure future.',
            date: 'April 1, 2025',
            image: blog6,
        },
    ];

    return (
        <>
            <Header />
            <br /> <br />
            {/* Apply the ref and the initial animation class */}
            <section ref={sectionRef} className="py-5 bg-white animate-on-scroll">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-5">
                            Cool News and <span className="text-warning">Updates</span>
                        </h2>
                        <p className="text-secondary fs-5">
                            Get the scoop with handy tips, money advice, and the freshest updates to help you along your financial path.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="row g-4">
                        {blogPosts.map((post, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="card h-100 border-0 shadow-sm">
                                    <img src={post.image} className="card-img-top rounded" alt={post.title} />
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">{post.title}</h5>
                                        <p className="card-text text-secondary">{post.content}</p>
                                        <p className="text-muted small">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogPage;