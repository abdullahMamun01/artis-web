'use client'
import { useEffect } from 'react';

const SmoothScroll = ({children}) => {
  useEffect(() => {
    // Get all links that start with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add click event listeners to all smooth scroll links
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Cleanup event listeners
    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return children; // Return children instead of null
};

export default SmoothScroll;
