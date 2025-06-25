import React, { useState, useEffect } from 'react';

function ScrollToTopArrow() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-orange rounded-circle shadow-lg d-flex align-items-center justify-content-center"
          style={{ width: '50px', height: '50px', transition: 'opacity 0.3s ease-in-out' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            fill="currentColor"
            className="bi bi-arrow-up text-white"
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
