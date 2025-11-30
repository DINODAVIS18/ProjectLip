import React from "react";
import "../styles/TrendingProductSection.css";
import trendingImage from "../assets/PlacementArea1.png";
import productImage from "../assets/Image6.png";
import fabulousLogo from "../assets/fab-mag.png";
import closerLogo from "../assets/Closer_logo.png";
import refinery29Logo from "../assets/refinery-29.png";
import mailOnlineLogo from "../assets/mailonline-vector-logo.png";
import thisMorningLogo from "../assets/This_Morning_TV_Logo.png";
import cosmopolitanLogo from "../assets/cosmo.png";

const TrendingProductSection = () => {
  return (
    <section className="trending-section">
      <div className="trending-container">
        <div className="trending-top">
          <div className="trending-image-column">
            <div className="trending-image-wrapper">
              <img 
                src={trendingImage} 
                alt="Your Lips But Juicier" 
                className="trending-bg-image"
              />
              <div className="trending-overlay">
                <span className="trending-badge">TRENDING ON TIKTOK</span>
                <h2 className="trending-headline">
                  YOUR LIPS<br />BUT JUICIER
                </h2>
              </div>
            </div>
          </div>

          <div className="trending-product-column">
            <div className="product-card-wrapper">
              <div className="product-image-section">
                <img 
                  src={productImage} 
                  alt="Plump Juice" 
                  className="product-main-image"
                />
                <button className="product-arrow-btn" aria-label="View product">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="product-info-section">
                <h3 className="product-title">PLUMP JUICE</h3>
                <p className="product-subtitle">Coconut • Clear</p>
                <p className="product-price">£18.00</p>
                <button className="btn-outline-orange">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        <div className="trending-bottom">
          <h3 className="featured-heading">FEATURED IN</h3>
          <div className="featured-logos">
            <img src={fabulousLogo} alt="Fabulous" className="featured-logo" />
            <img src={closerLogo} alt="Closer" className="featured-logo" />
            <img src={refinery29Logo} alt="Refinery29" className="featured-logo" />
            <img src={mailOnlineLogo} alt="Mail Online" className="featured-logo" />
            <img src={thisMorningLogo} alt="This Morning" className="featured-logo" />
            <img src={cosmopolitanLogo} alt="Cosmopolitan" className="featured-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductSection;
