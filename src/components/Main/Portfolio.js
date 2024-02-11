import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SiMonkeytie, SiFramer, SiReact, SiRedux, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiDjango, SiPython } from "react-icons/si";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import pill from "../../images/elements/pill.svg"
import cubo from "../../images/elements/cubo.svg"

import lorenzon from "../../images/projects/lorenzon.png";
import school from "../../images/projects/regularschool.png";
import company from "../../images/projects/regularcompany.png";
import arsim from "../../images/projects/arsim.png";

export default function Portfolio() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section section-four">
      <img id="pill" src={pill} alt="pill" />
      <img id="cubo" src={cubo} alt="cubo" />
      <div className="title">
        <h1 className="portfolio">{t("section-four.project")}</h1>
        <hr />
        <p onClick={() => navigate("/work")} className="all-project"><span>{t("section-four.seeall")}</span><IoIosArrowForward /></p>
      </div>
      <div className="projects">
        <div className="project">
          <img src={lorenzon} />
          <div className="content">
            <h1>Lorenzon</h1>
            <div className="prolang">
              <SiNodedotjs title="NodeJS" />
              <SiReact title="ReactJS" />
              <SiRedux title="Redux" />
              <SiMongodb title="MongoDB" />
              <SiExpress title="ExpressJS" />
              <SiFramer title="Framer Motion" />
            </div>
            <h3>
              Musiqa tinglash uchun o'zbekistondagi eng birinchi sifatli websayt,
              bu websayt ustida ko'p vaqt ishlangan, <span>oxiriga yetmagan loyiha</span>!
            </h3>
            <div className="link">
              <a target="_blank" href="https://lorenzon.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/Shoxruxasadov/Lorenzon">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={school} />
          <div className="content">
            <h1>Regular School</h1>
            <div className="prolang">
              <SiPython title="Python" />
              <SiReact title="React" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiDjango title="Django" />
              <SiFramer title="Framer Motion" />
            </div>
            <h3>
              Regular IT School uchun <br /> crm sistema va landing page.
            </h3>

            <div className="link">
              <a target="_blank" href="https://regularschool.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/regularschool/regularschool">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={arsim} />
          <div className="content">
            <h1>AR SIM Hotel</h1>
            <div className="prolang">
              <SiReact title="React" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiFramer title="Framer Motion" />
              <SiMonkeytie title="Reservation" />
            </div>
            <h3>
              AR SIM mehmonxonasi uchun <br /> crm sistema va landing page, <span>deploy jarayonida</span>!
            </h3>

            <div className="link">
              <a target="_blank" href="https://shoxruxasadov.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/Shoxruxasadov">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={company} />
          <div className="content">
            <h1>Regular Company</h1>
            <div className="prolang">
              <SiReact title="React" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiFramer title="Framer Motion" />
            </div>
            <h3>
              Regular IT Company uchun <br /> landing page va servis xizmatlar.
            </h3>
            <div className="link">
              <a target="_blank" href="https://regularcompany.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/regularschool/regularcompany">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
