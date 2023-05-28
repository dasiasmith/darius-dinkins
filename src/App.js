import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import MoreAbout from "./components/MoreAbout";
import Shows from "./components/Shows";

export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      <About />
      <Shows />
      <MoreAbout />
      <Testimonials />
      <Contact />
    </main>
  );
}