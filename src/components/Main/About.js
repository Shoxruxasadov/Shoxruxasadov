import React from "react";
import { useTranslation } from "react-i18next";

import diosamule from "../../images/about/diosamule.svg";
import skillbg from "../../images/about/skillsbg.svg";
import branch from "../../images/about/branch.png";
import mouse from "../../images/about/mouse.svg";
import light from "../../images/about/light.png";
import blur from "../../images/about/blur.png";

import mongo from "../../images/skills/mongo.svg";
import express from "../../images/skills/express.svg";
import react from "../../images/skills/react.svg";
import node from "../../images/skills/node.svg";

export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about" className="section section-two">
      <div className="about">
        <img className="blur" src={blur} />
        <img className="blur2" src={blur} />
        <p>{t("header.about")}</p>
        <h1>
          {t("section-two.hello")}{" "}
          <span>
            {t("section-two.name")} <br /> {t("section-two.job")} <br />{" "}
            {t("section-two.city")}
          </span>
        </h1>
        <h2>{t("section-two.subtitle")}</h2>
      </div>
      <div className="skills">
        <img className="light" src={light} />
        <img className="branch" src={branch} />
        <img className="diosamule" src={diosamule} />
        <img className="skillbg" src={skillbg} />
        <img className="mouse" src={mouse} />
        <h1>{t("section-two.skill")}</h1>
        <img className="skill mongo" src={mongo} />
        <img className="skill express" src={express} />
        <img className="skill react" src={react} />
        <img className="skill node" src={node} />
        <p className="skillname mongo">MongoDB</p>
        <p className="skillname express">ExpressJS</p>
        <p className="skillname react">ReactJS</p>
        <p className="skillname node">NodeJS</p>
      </div>
    </section>
  );
}
