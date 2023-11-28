import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { HiMenuAlt3 } from "react-icons/hi";
import Rodal from "rodal";
import { Link } from "react-scroll";
import Profile from "../../images/profil.png";
import { NavLink } from "react-router-dom";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
  BiSolidCloudDownload,
  BiSolidHome,
  BiSolidUser,
  BiSolidBookmark,
} from "react-icons/bi";
import { IoMail } from "react-icons/io5";

import Resume from "../../others/resume.pdf";

export default function Header() {
  const [lang, setLang] = useState(false);
  const [rodal, setRodal] = useState(false);
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  useEffect(() => {
    handleChangeLanguage(language);
  }, [lang]);

  return (
    <>
      <Rodal visible={rodal} onClose={() => setRodal(false)}>
        <div id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={Profile} className="img-fluid rounded-circle" />
              <h1 className="text-light">
                <NavLink to="/">Shoxrux Asadov</NavLink>
              </h1>
              <div className="social-links mt-3 text-center gap-3 d-flex justify-center">
                <a
                  href="https://instagram.com/Shoxruxasadovv"
                  className="social instagram"
                  target="_blank"
                >
                  <BiLogoInstagramAlt />
                </a>
                <a
                  href="https://github.com/Shoxruxasadov"
                  className="social github"
                  target="_blank"
                >
                  <BiLogoGithub />
                </a>
                <a
                  href="https://linkedin.com/in/shoxruxasadov/"
                  className="social linkedin"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
                <a className="social resume" href={Resume} download="resume">
                  <BiSolidCloudDownload />
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setRodal(false)}
                >
                  <BiSolidHome />
                  <div className="list">{t("header.home")}</div>
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setRodal(false)}
                >
                  <BiSolidUser />
                  <div className="list">{t("header.about")}</div>
                </Link>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setRodal(false)}
                >
                  <BiSolidBookmark />
                  <div className="list">{t("header.project")}</div>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setRodal(false)}
                >
                  <IoMail />
                  <div className="list">{t("header.contact")}</div>
                </Link>
              </ul>
            </nav>

            <div className="lang">
              <div onClick={() => setLang(!lang)} className="badge">
                <span>
                  {language === null && "English"}
                  {language === "en" && "English"}
                  {language === "ru" && "Russian"}
                  {language === "uz" && "Uzbek"}
                </span>
                <IoIosArrowDown
                  style={
                    lang
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <ul className={lang ? "active" : ''}>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "en");
                    setLang(false);
                  }}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "ru");
                    setLang(false);
                  }}
                >
                  Russian
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "uz");
                    setLang(false);
                  }}
                >
                  Uzbek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Rodal>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h3>Shoxruxasadov.uz</h3>
            </Link>
          </div>
          <div className="list">
            <ul className="listUl">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <div className="list">{t("header.home")}</div>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <div className="list">{t("header.about")}</div>
              </Link>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <div className="list">{t("header.project")}</div>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <div className="list">{t("header.contact")}</div>
              </Link>
            </ul>
            <HiMenuAlt3 onClick={() => setRodal(true)} className="menu" />
            <div className="lang">
              <div onClick={() => setLang(!lang)} className="badge">
                <span>
                  {language === null && "English"}
                  {language === "en" && "English"}
                  {language === "ru" && "Russian"}
                  {language === "uz" && "Uzbek"}
                </span>
                <IoIosArrowDown
                  style={
                    lang
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <ul className={lang ? "active" : ''}>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "en");
                    setLang(false);
                  }}
                >
                  English
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "ru");
                    setLang(false);
                  }}
                >
                  Russian
                </li>
                <li
                  onClick={() => {
                    localStorage.setItem("lang", "uz");
                    setLang(false);
                  }}
                >
                  Uzbek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
