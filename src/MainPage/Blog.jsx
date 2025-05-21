import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';  


function BlogPage () {
    const blogPosts = [
        {
            title: 'Getting the Hang of Budgeting',
            content: 'Check out some easy ways to set up and stick to a budget that fits your life.',
            date: 'January 15, 2025',
            image: 'path/to/budgeting-image.jpg',
        },
        {
            title: 'Awesome Tools for Keeping Track of Your Money',
            content: 'Find out the coolest apps and tools that make tracking your spending and saving super easy.',
            date: 'February 2, 2025',
            image: 'path/to/tools-tracking-money.jpg',
        },
        {
            title: 'Starting Your Credit Journey',
            content: 'Uncover some solid tips to boost your credit score and build a great financial reputation.',
            date: 'February 20, 2025',
            image: 'path/to/credit-journey.jpg',
        },
        {
            title: 'Easy Peasy Retirement Planning',
            content: 'Here are some simple ideas to kickstart your retirement planning for a chill and secure future.',
            date: 'March 5, 2025',
            image: 'path/to/retirement-planning.jpg',
        },
        {
            title: 'Money-Saving Tips for Millennials',
            content: 'Check out these practical saving hacks that can help millennials reach financial freedom.',
            date: 'March 18, 2025',
            image: 'path/to/saving-tips.jpg',
        },
        {
            title: 'Common Financial Blunders to Dodge',
            content: 'Get the scoop on common money mistakes and how to dodge them for a more secure future.',
            date: 'April 1, 2025',
            image: 'path/to/money-mistakes.jpg',
        },
    ];

    return (
        <>
            <Header />
            <section className="py-5 bg-white">
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
