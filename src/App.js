import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import MoreAbout from "./components/MoreAbout";
import Shows from "./components/Shows";
import ShowPage from "./assets/html/showPage";

export default function App() {
  const [showPageClicked, setShowPageClicked] = useState(false);

  const handleShowPageClick = () => {
    setShowPageClicked(true);
  };

  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      {showPageClicked ? (
        <ShowPage />
      ) : (
        <div>
          <About />
          <Shows onShowPageClick={handleShowPageClick} />
          <MoreAbout />
          <Testimonials />
          <Contact />
        </div>
      )}
    </main>
  );
}