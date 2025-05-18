import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Hook for smoothly scrolling to an element by ID
 * Works both on same page and across different pages (returning to homepage)
 */
export const useScrollToElement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToElementById = useCallback((elementId: string) => {
    // If not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on the home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, navigate]);

  return { scrollToElementById };
};