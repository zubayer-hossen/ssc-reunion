import React, { useState, useEffect } from "react";
import "./BackToTop.css"; // Styles for the button

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and toggle button visibility
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      className={`back-to-top-button ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
    >
      Go to Top
    </button>
  );
};

export default BackToTop;
