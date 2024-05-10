import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="home" className="section">
      <img id="cube" src="/images/elements/cube.svg" alt="cube" />
      <img id="torus" src="/images/elements/torus.svg" alt="torus" />
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="title"
      >
        <h1>
          <span className="mern"><span id="m">M</span><span id="e">E</span><span id="r">R</span><span id="n">N</span>{t("section-one.mern")}</span><br />
          <span className="and">&nbsp;<img id="balllight" src="/images/elements/balllight.svg" alt="balllight" /></span>
          <span className="dev">{t("section-one.dev")}&nbsp;&nbsp;&nbsp;</span>
          <img id="knot" src="/images/elements/knot.svg" /><br />
          <span className="dev">{t("section-one.design")}</span>
        </h1>
        <div className="links">
          <a
            href="/resume.pdf"
            target="_blank"
          >
            <span>{t("section-one.resume")}</span>
          </a>
          <div className="dot">
            <img src="/images/elements/toruslight.svg" />
          </div>
          <p>{t("section-one.hire")}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="image"
      >
        <img src="/images/hero/Shoxruxasadov.webp" />
        <div className="top">
          <div className="rectangle1"></div>
          <div className="rectangle2"></div>
        </div>
        <div className="rectangle3"></div>
      </motion.div>
    </section>
  );
}