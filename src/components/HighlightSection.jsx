import React from "react";
import "../styles/HighlightSection.css";
import highlightImage from "../assets/Untitled-1.png"; 

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-container">
        <div className="highlight-image-wrapper">
          <img 
            src={highlightImage} 
            alt="Products Proven to Plump" 
            className="highlight-image"
          />
        </div>

        <div className="highlight-content">
          <h2 className="highlight-title">
            PRODUCTS PROVEN<br />TO PLUMP
          </h2>
          <p className="highlight-description">
            Clean, conscious and clinically proven, our plumpers deliver real results so you can plump up your beauty, naturally.
          </p>
          <button className="btn-outline-orange">SEE THE RESULTS</button>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
