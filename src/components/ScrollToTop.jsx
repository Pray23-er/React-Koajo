
import { useEffect, useLayoutEffect } from 'react'; // Import useLayoutEffect
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => { // CHANGE: Use useLayoutEffect here
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Keep 'instant' for immediate scroll
    });
  }, [pathname]); // Rerun effect whenever the pathname changes

  return null; // This component doesn't render any UI
}

export default ScrollToTop;