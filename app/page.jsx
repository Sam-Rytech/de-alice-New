"use client";
import { useEffect, useState } from "react";

import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 160);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(headerActive);

  return (
    <div>
      <Topbar />

      {/* Static Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Animated Header */}
      <div
        className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Hero />
      <About />
      <Work />
      <Stats />
      <Faq />
      <Testimonial />
      <Services />
      <Contact />
      <Footer />

      {/* temp div */}

      <div className="j-[1000px]"></div>
    </div>
  );
};

export default Home;
