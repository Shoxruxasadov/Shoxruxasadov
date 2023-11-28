import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Main/Hero";
import SectionTwo from "../../components/Main/SectionTwo";
import SectionThree from "../../components/Main/SectionThree";
import SectionFour from "../../components/Main/SectionFour";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const language = localStorage.getItem("lang");
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
