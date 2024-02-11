import React from "react";
import { useTranslation } from "react-i18next";

import tuit from "../../images/education/tatu.png";
import shift from "../../images/education/shift.png";
import regular from "../../images/education/regular.png";
import empire from "../../images/education/empire.png";

export default function Education() {
  const [t, i18n] = useTranslation("global");

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
        <div className="exp regular">
          <img src={regular} />
          <div className="exp-title">
            <h1>{t("section-three.regularName")}</h1>
            <h2>{t("section-three.regularDire")}</h2>
            <h3>{t("section-three.regularYear")}</h3>
          </div>
        </div>
        <div className="exp kwork">
          <img src={empire} />
          <div className="exp-title">
            <h1>{t("section-three.empireName")}</h1>
            <h2>{t("section-three.empireDire")}</h2>
            <h3>{t("section-three.empireYear")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
