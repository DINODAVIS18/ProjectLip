import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import HighlightSection from "./components/HighlightSection";
import TrendingProductSection from "./components/TrendingProductSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <HighlightSection />
        <TrendingProductSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
