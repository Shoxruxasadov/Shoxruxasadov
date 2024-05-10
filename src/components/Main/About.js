import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="about" className="section section-two">
      <div className="about">
        <img className="blur" src="/images/about/blur.png" />
        <img className="blur2" src="/images/about/blur.png" />
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
        <img className="light" src="/images/about/light.png" />
        <img className="branch" src="/images/about/branch.png" />
        <img className="diosamule" src="/images/about/diosamule.svg" />
        <img className="skillbg" src="/images/about/skillsbg.svg" />
        <img className="mouse" src="/images/about/mouse.svg" />
        <h1>{t("section-two.skill")}</h1>
        <img className="skill mongo" src="/images/skills/mongo.svg" />
        <img className="skill express" src="/images/skills/express.svg" />
        <img className="skill react" src="/images/skills/react.svg" />
        <img className="skill node" src="/images/skills/node.svg" />
        <p className="skillname mongo">MongoDB</p>
        <p className="skillname express">ExpressJS</p>
        <p className="skillname react">ReactJS</p>
        <p className="skillname node">NodeJS</p>
      </div>
    </section>
  );
}
