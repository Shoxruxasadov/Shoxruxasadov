import mouse from "../../images/SectionTwo/mouse.svg";
import light from "../../images/SectionTwo/light.png";
import branch from "../../images/SectionTwo/branch.png";
import skillbg from "../../images/SectionTwo/skillsbg.svg";
import diosamule from "../../images/SectionTwo/diosamule.svg";
import blur from "../../images/SectionTwo/blur.png";

import git from "../../images/SectionTwo/skills/git.svg";
import react from "../../images/SectionTwo/skills/react.svg";
import redux from "../../images/SectionTwo/skills/redux.svg";
import ts from "../../images/SectionTwo/skills/ts.svg";

import { useTranslation } from "react-i18next";

export default function SectionTwo() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");

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
        <h1
          style={
            language === "ru"
              ? { right: "130px" }
              : language === "uz"
              ? { right: "120px" }
              : { right: "215px" }
          }
        >
          {t("section-two.skill")}
        </h1>
        <img className="skill react" src={react} />
        <img className="skill redux" src={redux} />
        <img className="skill ts" src={ts} />
        <img className="skill git" src={git} />
        <p className="skillname react">React</p>
        <p className="skillname redux">Redux</p>
        <p className="skillname ts">TypeScript</p>
        <p className="skillname git">Git/GitHub</p>
        
      </div>
    </section>
  );
}
