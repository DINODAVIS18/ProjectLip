import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${isMenuOpen ? "menu-open" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="info-header">
          <h2>FREE UK SHIPPING ON ORDERS OVER £40</h2>
        </div>

        <div className="nav-header">
          <nav className="nav-section nav-left">
            <a href="#shop">SHOP</a>
            <a href="#about">ABOUT</a>
            <a href="#learn">LEARN</a>
          </nav>

          <div className="nav-section nav-center">
            <p className="logo-text">PROJECT</p>
          </div>

          <nav className="nav-section nav-right">
            <a href="#search" className="nav-pill">
              SEARCH
            </a>
            <div className="cart-pill">
              <a href="#cart">CART</a>
              <span className="cart-count">0</span>
            </div>
          </nav>

          <button
            className="mobile-burger"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`sidebar-overlay ${isMenuOpen ? "show" : ""}`}>
        <div className="sidebar-panel">
          <div className="sidebar-header">
            <span className="sidebar-logo">PROJECT</span>
            <button
              className="sidebar-close"
              type="button"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="sidebar-info">
            FREE UK SHIPPING ON ORDERS OVER £40
          </div>

          <nav className="sidebar-nav">
            <a href="#shop" onClick={() => setIsMenuOpen(false)}>SHOP</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            <a href="#learn" onClick={() => setIsMenuOpen(false)}>LEARN</a>
            <a href="#search" onClick={() => setIsMenuOpen(false)}>SEARCH</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;