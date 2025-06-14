import React, { useState, useEffect } from 'react';

function ScrollToTopArrow() {
  // State to control the visibility of the arrow
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Show button if scrolled down more than 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}> {/* Bootstrap classes for fixed position, bottom-right */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-warning rounded-circle shadow-lg d-flex align-items-center justify-content-center" // Bootstrap classes for button styling
          style={{ width: '50px', height: '50px', transition: 'opacity 0.3s ease-in-out' }} // Inline style for size and transition
        >
          {/* Inline SVG for a clean arrow icon (Bootstrap compatible) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            fill="currentColor"
            className="bi bi-arrow-up text-white" // Bootstrap Icon (bi-arrow-up) equivalent and text color
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopArrow;
