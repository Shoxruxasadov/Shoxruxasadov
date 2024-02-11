import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Main/Hero";
import About from "../../components/Main/About";
import Education from "../../components/Main/Education";
import Potfolio from "../../components/Main/Portfolio";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Potfolio />
      </main>
      <Footer />
    </>
  );
}
