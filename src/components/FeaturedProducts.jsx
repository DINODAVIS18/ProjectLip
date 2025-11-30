import React, { useState, useRef } from "react";
import "../styles/FeaturedProducts.css";
import image2 from "../assets/Group839.png";
import image4 from "../assets/Group833.png";
import image3 from "../assets/Group835.png";
import image5 from "../assets/PlacementArea-4.png";
import image1 from "../assets/MaskGroup4.png";

const FeaturedProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "PLUMP JUICE",
      description: "Plumping & hydrating lip oil",
      price: "£18.00",
      image: image2,
      colors: ["#FFB6C1", "#FF6B6B"]
    },
    {
      id: 2,
      name: "EXTREME MATTE PLUMPING PRIMER",
      description: "Extreme plumping lip primer",
      price: "£16.00",
      image: image3,
      colors: []
    },
    {
      id: 3,
      name: "PLUMP & FILL",
      description: "Plumping lip liner",
      price: "£16.00",
      image: image4,
      colors: ["#D4A5A5", "#C9999B", "#A67C7C", "#8B6868", "#6B5454", "#B8696F", "#E8B4B8", "#F5D5D8"]
    },
    {
      id: 4,
      name: "MAXIMUM PLUMP",
      description: "Maximum plumping gloss",
      price: "£18.00",
      image: image2,
      colors: ["#FFB6C1", "#FF6B6B", "#FFA07A"]
    },
    {
      id: 5,
      name: "LIP PLUMP SERUM",
      description: "Intensive plumping serum",
      price: "£22.00",
      image: image3,
      colors: ["#FF8C94"]
    }
  ];

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.querySelector('.product-card').offsetWidth;
    const gap = 20;
    const scrollAmount = cardWidth + gap;

    if (direction === 'right') {
      const newPosition = scrollPosition + scrollAmount;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const finalPosition = Math.min(newPosition, maxScroll);
      carousel.scrollTo({ left: finalPosition, behavior: 'smooth' });
      setScrollPosition(finalPosition);
    } else {
      const newPosition = Math.max(scrollPosition - scrollAmount, 0);
      carousel.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const isAtStart = scrollPosition === 0;
  const isAtEnd = carouselRef.current 
    ? scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    : false;

  return (
    <section className="featured-products">
      <div className="featured-container">
        <div className="featured-header">
          <h2 className="featured-title">BEST IN PLUMP</h2>
          <div className="featured-arrows">
            {!isAtStart && (
              <button 
                className="arrow-btn arrow-left" 
                onClick={() => handleScroll('left')}
                aria-label="Previous products"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            {!isAtEnd && (
              <button 
                className="arrow-btn arrow-right" 
                onClick={() => handleScroll('right')}
                aria-label="Next products"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="featured-content">
          <div className="featured-banner">
            <div className="banner-top">
              <img 
                src={image1}
                alt="Featured background" 
                className="banner-bg"
              />
            </div>
            <div className="banner-bottom">
              <img 
                src={image5} 
                alt="Featured product" 
                className="banner-product"
              />
              <div className="banner-overlay"></div>
              <button className="banner-btn">SHOP ALL</button>
            </div>
          </div>

          <div className="products-carousel" ref={carouselRef}>
            <div className="carousel-track">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}</p>
                    {product.colors.length > 0 && (
                      <div className="product-colors">
                        {product.colors.slice(0, 6).map((color, index) => (
                          <span 
                            key={index}
                            className="color-circle"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 6 && (
                          <span className="color-more">+{product.colors.length - 6}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
