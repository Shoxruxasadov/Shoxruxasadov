import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";

import Header from "../../components/Header";
import Hero from "../../components/Main/Hero";
import About from "../../components/Main/About";
import Education from "../../components/Main/Education";
import Potfolio from "../../components/Main/Portfolio";
import Footer from "../../components/Footer";
import Skills from "../../components/Main/Skills";

export default function Home() {
  const [visible, setVisible] = useState(false)
  window.addEventListener('scroll', toggleVisible);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true)
    } else if (scrolled <= 200) {
      setVisible(false)
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Potfolio />
      </main>
      <Footer />
      <Scroll
        id="upper"
        activeClass={!visible && "non-active"}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      ><PiArrowFatLinesUpDuotone /></Scroll>
    </>
  );
}
