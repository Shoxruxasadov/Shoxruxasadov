import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Shoxruxasadov from "../../images/hero/Shoxruxasadov.webp";

import knot from "../../images/elements/knot.svg"
import cube from "../../images/elements/cube.svg"
import torus from "../../images/elements/torus.svg"
import toruslight from "../../images/elements/toruslight.svg"
import balllight from "../../images/elements/balllight.svg"

export default function Hero() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="home" className="section">
      <img id="cube" src={cube} alt="cube" />
      <img id="torus" src={torus} alt="torus" />
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="title"
      >
        <h1>
          <span className="mern"><span id="m">M</span><span id="e">E</span><span id="r">R</span><span id="n">N</span>{t("section-one.mern")}</span><br />
          <span className="and">&nbsp;<img id="balllight" src={balllight} alt="balllight" /></span>
          <span className="dev">{t("section-one.dev")}&nbsp;&nbsp;&nbsp;</span>
          <img id="knot" src={knot} /><br />
          <span className="dev">{t("section-one.design")}</span>
        </h1>
        <div className="links">
          <a
            href="https://docviewer.yandex.ru/view/1108099949/?*=7QdMJEBu66DaEwuaZs84iwnKkr17InVybCI6InlhLWRpc2s6Ly8vZGlzay9yZXN1bWUucGRmIiwidGl0bGUiOiJyZXN1bWUucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiIxMTA4MDk5OTQ5IiwidHMiOjE3MDk5OTI3Nzg2NDcsInl1IjoiMjM3NzQxMDg3MTcwMDA2Nzg0MyJ9"
            target="_blank"
          >
            <span>{t("section-one.resume")}</span>
          </a>
          <div className="dot">
            <img src={toruslight} />
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
        <img src={Shoxruxasadov} />
        <div className="top">
          <div className="rectangle1"></div>
          <div className="rectangle2"></div>
        </div>
        <div className="rectangle3"></div>
      </motion.div>
    </section>
  );
}