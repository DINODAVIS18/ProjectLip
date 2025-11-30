import React from "react";
import "../styles/CategorySection.css";
import lipImage from "../assets/PlacementArea.png";
import faceImage from "../assets/PlacementArea-1.png";
import kitsImage from "../assets/PlacementArea-2.png";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "SHOP",
      subtitle: "LIP",
      image: lipImage,
      link: "/shop/lip"
    },
    {
      id: 2,
      title: "SHOP",
      subtitle: "FACE",
      image: faceImage,
      link: "/shop/face"
    },
    {
      id: 3,
      title: "SHOP",
      subtitle: "KITS",
      image: kitsImage,
      link: "/shop/kits"
    }
  ];

  const features = [
    "CLINICALLY PROVEN TO PLUMP",
    "100% NATURAL",
    "VEGAN",
    "CRUELTY-FREE",
    "CERTIFIED ORGANIC"
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-grid">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.subtitle}
                className="category-image"
              />
              <div className="category-overlay"></div>
              <div className="category-content">
                <span className="category-label">{category.title}</span>
                <h3 className="category-title">{category.subtitle}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="features-marquee">
          <div className="marquee-content">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="marquee-item">
                {features.map((feature, i) => (
                  <React.Fragment key={i}>
                    <span className="feature-text">{feature}</span>
                    <span className="feature-dot">•</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
