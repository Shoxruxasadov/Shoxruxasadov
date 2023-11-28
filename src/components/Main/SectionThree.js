import { useTranslation } from "react-i18next";
import shift from "../../images/SectionThree/shift.png";
import tuit from "../../images/SectionThree/tatu.png";
import upwork from "../../images/SectionThree/upwork.jpg";
import kwork from "../../images/SectionThree/kwork.jpg";

export default function SectionThree() {
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");

  return (
    <section className="section section-three">
      <div className="education">
        <p>{t("section-three.edu")}</p>
        <div className="edu tuit">
          <img src={tuit} />
          <div className="edu-title">
            <h1>{t("section-three.tuitName")}</h1>
            <h2>{t("section-three.tuitDire")}</h2>
            <h3>{t("section-three.tuitYear")}</h3>
          </div>
        </div>
        <div className="edu shift">
          <img src={shift} />
          <div className="edu-title">
            <h1>{t("section-three.shiftName")}</h1>
            <h2>{t("section-three.shiftDire")}</h2>
            <h3>{t("section-three.shiftYear")}</h3>
          </div>
        </div>
      </div>
      <div className="experience">
        <p>{t("section-three.exp")}</p>
        <div className="exp upwork">
          <img src={upwork} />
          <div className="exp-title">
            <h1>{t("section-three.upworkName")}</h1>
            <h3>{t("section-three.upworkYear")}</h3>
          </div>
        </div>
        <div className="exp kwork">
          <img src={kwork} />
          <div className="exp-title">
            <h1>{t("section-three.kworkName")}</h1>
            <h3>{t("section-three.kworkYear")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
