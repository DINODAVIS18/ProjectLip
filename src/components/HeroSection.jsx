import React from "react";
import "../styles/HeroSection.css";
import mass from "../assets/MaskGroup26.png";

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <div className="hero-body">
          <div className="hero-text">
            <div className="hero-text-inner">
              <h1 className="hero-heading">BIG LIPS, BIGGER ENERGY</h1>
              <p className="hero-desc">
                Our famous lip liner lines, fills and plumps so you can cheat
                your way to an instant lip lift.
              </p>
              <button className="btn-outline-orange">SHOP PLUMP &amp; FILL</button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img className="hero-image" src={mass} alt="Lip product" />
            <span className="hero-image-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
