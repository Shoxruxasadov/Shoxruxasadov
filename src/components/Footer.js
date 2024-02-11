import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub, BiSolidCloudDownload, } from "react-icons/bi";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";

export default function Footer() {
  const [t, i18n] = useTranslation("global");

  return (
    <footer id="contact">
      <div className="container">
        <h1 className="LetsWork">
          {t("footer.have")} <br /> {t("footer.lets")}
        </h1>
        <div className="footer-top">
          <div className="contacts">
            <div className="contact calllock">
              <div className="contact call">
                <IoCall />
                <span>+998 91 415 78 33</span>
              </div>
              <div className="contact location">
                <IoLocationSharp />
                <span>Tashkent, Uzbekistan</span>
              </div>
            </div>
            <div className="contact mail">
              <IoMdMailUnread />
              <span>Shoxruxasadov05@mail.ru</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="social">
            <div>
              <Link
                to={"https://instagram.com/Shoxruxasadovv"}
                className="social instagram"
                target="_blank"
              >
                <BiLogoInstagramAlt />
              </Link>
              <Link
                to={"https://github.com/Shoxruxasadov"}
                className="social github"
                target="_blank"
              >
                <BiLogoGithub />
              </Link>
            </div>
            <div>
              <Link
                to={"https://linkedin.com/in/shoxruxasadov/"}
                className="social linkedin"
                target="_blank"
              >
                <BiLogoLinkedin />
              </Link>
              <a className="social resume" >
                <BiSolidCloudDownload />
              </a>
            </div>
          </div>
          <div className="ooo">
            <p>Copyright © 2023 | <Link to="https://Shoxruxasadov.uz">Powered By</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
