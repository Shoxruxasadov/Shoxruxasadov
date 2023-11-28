import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowSquareInBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

import lorenzon from "../../images/SectionFour/lorenzon.png";
import gamehub from "../../images/SectionFour/gamehub.png";

import { SiMui, SiFramer, SiReact, SiRedux, SiFirebase } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";

export default function SectionFour() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section section-four">
      <h1 className="portfolio">
        {t("section-four.portfolio")} <span>&</span> {t("section-four.project")}{" "}
      </h1>
      <p onClick={() => navigate("/project")} className="all-project">
        <span>{t("section-four.seeall")}</span> <IoIosArrowForward />
      </p>
      <div className="projects">
        <div className="project first">
          <img src={lorenzon} />
          <div className="content">
            <p>Unfinished Project</p>
            <h1>Lorenzon</h1>
            <div className="prolang">
              <SiReact title="React" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiMui title="Material UI" />
              <SiFramer title="Framer Motion" />
            </div>
            <h3>
              Listening to your favorite music <br />
              anytime, anywhere
            </h3>
            <a target="_blank" href="https://lorenzon.uz">
              <AiOutlineLink />
              <span>Live</span>
            </a>
          </div>
        </div>
        {/* <div className="project second">
        <img src={gamehub} />
          <div className="content">
            <p>Unfinished Project</p>
            <h1>Gamehub</h1>
            <div className="prolang">
              <SiReact title="React" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiMui title="Material UI" />
              <SiFramer title="Framer Motion" />
            </div>
            <h3>
              Marketplace of game goods and services!
            </h3>
            <a target="_blank" href="https://gamehub.uz">
              <AiOutlineLink />
              <span>Live</span>
            </a>
          </div>
          
        </div> */}
      </div>
    </section>
  );
}
