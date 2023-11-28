import { useTranslation } from "react-i18next";
import Ellipse1 from "../../images/SectionOne/Ellipse1.png";
import Ellipse2 from "../../images/SectionOne/Ellipse2.png";
import Ellipse3 from "../../images/SectionOne/Ellipse3.png";
import Shokhdev from "../../images/SectionOne/Shokhdev.webp";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="home" className="section section-one">
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="title"
      >
        <h1>
          {t("section-one.frontend")} <br /> <span>&</span>{" "}
          {t("section-one.developer")} <br />
          {t("section-one.react")} <span>&</span> {t("section-one.redux")}
        </h1>
        <div>
          <Link
            className="toContact"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span>{t("section-one.toContact")}</span>
          </Link>
          <div className="dot">
            <img src={Ellipse1} />
            <img src={Ellipse2} />
            <img src={Ellipse3} />
          </div>
          <p>{t("section-one.available")}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className="image"
      >
        <img src={Shokhdev} />
        <div className="top">
          <div className="rectangle1"></div>
          <div className="rectangle2"></div>
        </div>
        <div className="rectangle3"></div>
      </motion.div>
    </section>
  );
}