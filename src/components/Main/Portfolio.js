import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SiNextdotjs, SiFoodpanda, SiReactquery, SiFirebase, SiFramer, SiNestjs, SiSocketdotio, SiAxios, SiSass, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiStyledcomponents, SiContactlesspayment, SiReact, SiRedux } from "react-icons/si";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section section-four">
      <div className="title">
        <h1 className="portfolio">{t("section-four.project")}</h1>
        <hr />
        <p onClick={() => navigate("/works")} className="all-project"><span>{t("section-four.seeall")}</span><IoIosArrowForward /></p>
      </div>
      <div className="projects">
        <div className="project">
          <img src="/images/projects/Lorenzon.png" />
          <div className="content">
            <h1>Lorenzon</h1>
            <h3>Music Streaming Service | Similar to Spotify</h3>
            <div className="prolang">
              <SiNextdotjs title="NextJS" />
              <SiNestjs title="NestJS" />
              <SiMongodb title="MongoDB" />
              <SiFoodpanda  title="Zustand"/>
              {/* <SiNodedotjs title="NodeJS"/> */}
              {/* <SiExpress title="ExpressJS"/> */}
              <SiReactquery title="React Query" />
              {/* <SiAxios title="Axios" /> */}
              {/* <SiSocketdotio title="Web Socket" /> */}
              {/* <SiFirebase title="Firebase" /> */}
              <SiFramer title="Framer Motion" />
              {/* <SiSass title="SASS"/> */}
              <SiTailwindcss title="Tailwind CSS" />
              {/* <SiStyledcomponents title="Style Component"/> */}
              <MdMarkEmailUnread title="Verify Email" />
              <PiContactlessPaymentFill title="Payment" />
            </div>
            <div className="link">
              <a target="_blank" href="https://lorenzon.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/Shoxruxasadov/lorenzon">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src="/images/projects/Regular School.png" />
          <div className="content">
            <h1>Regular School</h1>
            <h3>
              Landing page ( CRM system coming soon ) !
            </h3>
            <div className="prolang">
              <SiReact title="React" />
              <SiReactquery title="React Query" />
              <SiRedux title="Redux" />
              <SiFirebase title="Firebase" />
              <SiFramer title="Framer Motion" />
              (<SiNestjs title="NestJS" />
              <SiMongodb title="MongoDB" />)
            </div>
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
          <img src='/images/projects/Regular Company.png' />
          <div className="content">
            <h1>Regular Company</h1>
            <h3>
            Landing page and Serivces.
            </h3>
            <div className="prolang">
              <SiReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiFramer title="Framer Motion" />
            </div>
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
      <img id="pill" src="/images/elements/pill.svg" alt="pill" />
      <img id="cubo" src="/images/elements/cubo.svg" alt="cubo" />
    </section>
  );
}
