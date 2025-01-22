import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SiNextdotjs, SiFoodpanda, SiReactquery, SiFirebase, SiFramer, SiNestjs, SiSocketdotio, SiAxios, SiSass, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiStyledcomponents, SiContactlesspayment, SiReact, SiRedux, SiStripe } from "react-icons/si";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
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
          <img src="/images/projects/MovieGo.png" />
          <div className="content">
            <h1>MovieGo</h1>
            <h3>Movie Streaming Service</h3>
            <div className="prolang">
              <SiNextdotjs title="NextJS" />
              <SiNestjs title="NestJS" />
              <SiMongodb title="MongoDB" />
              <SiFoodpanda  title="Zustand"/>
              <SiReactquery title="React Query" />
              <SiFirebase title="Firebase" />
              <SiSocketdotio title="WebSocket" />
              <SiFramer title="Framer Motion" />
              <SiTailwindcss title="Tailwind CSS" />
              <MdMarkEmailUnread title="Verify Email" />
              <SiStripe title="Stripe" />
            </div>
            <div className="link">
              <a target="_blank" href="https://moviego.uz">
                <AiOutlineLink />
                <span>Link</span>
              </a>
              <a target="_blank" href="https://github.com/Shoxruxasadov/MovieGo">
                <AiOutlineGithub />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
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
              <SiReactquery title="React Query" />
              <SiAxios title="Axios" />
              <SiSocketdotio title="WebSocket" />
              <SiFirebase title="Firebase" />
              <SiFramer title="Framer Motion" />
              <SiTailwindcss title="Tailwind CSS" />
              <MdMarkEmailUnread title="Verify Email" />
              <SiStripe title="Stripe" />
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
      </div>
      <img id="pill" src="/images/elements/pill.svg" alt="pill" />
      <img id="cubo" src="/images/elements/cubo.svg" alt="cubo" />
    </section>
  );
}
