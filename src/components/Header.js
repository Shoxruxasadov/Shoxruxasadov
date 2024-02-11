import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import i18next from "i18next";
import Rodal from "rodal";

import { BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub, BiSolidCloudDownload, BiSolidHome, BiSolidUser, BiSolidBookmark, } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

import uz from "../images/languages/uz.svg"
import ru from "../images/languages/ru.svg"
import en from "../images/languages/en.svg"
import profile from "../images/profil.png";
import logo from "../images/logo.png"

export default function Header() {
  const [t, i18n] = useTranslation("global");
  const [rodal, setRodal] = useState(false);
  const [count, setCount] = useState(i18n.language == "uz" ? 2 : i18n.language == "ru" ? 1 : 0);
  const [language, setLanguage] = useState(["en", "ru", "uz"])

  function handleChangeLanguage() {
    if (count < language.length - 1) setCount(prev => prev + 1)
    else setCount(0)
  }

  useEffect(() => {
    localStorage.setItem("lang", language[count]);
    i18next.changeLanguage(language[count])
  }, [count])

  return (
    <>
      <Rodal visible={rodal} onClose={() => setRodal(false)}>
        <div id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={profile} className="img-fluid rounded-circle" />
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
                <a className="social resume" href="https://docviewer.yandex.ru/view/1108099949/?*=ToKnn%2BO4dS%2F1WE1OtccrgRkDbP97InVybCI6InlhLWRpc2stcHVibGljOi8vSWkxK21yRXVLeStGbUlFOUZQZzF6TEVoT2FHN0RJYTJiY3J6RmtrRWQwc0g0OTFObXVGVG5iOG5vcVlsa2hMQ3EvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoiU2hveHJ1eCBBc2Fkb3YgKEVuZ2xpc2ggQ1YpLnBkZiIsIm5vaWZyYW1lIjpmYWxzZSwidWlkIjoiMTEwODA5OTk0OSIsInRzIjoxNzA3NTU3Mzg4MTk1LCJ5dSI6IjIzNzc0MTA4NzE3MDAwNjc4NDMifQ%3D%3D">
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
          </div>
        </div>
      </Rodal>
      <header>
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h3>Shoxrux</h3>
          </Link>
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
            <div className="lang" onClick={handleChangeLanguage}>
              {i18n.language === "en" && <img src={en} />}
              {i18n.language === "ru" && <img src={ru} />}
              {i18n.language === "uz" && <img src={uz} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
