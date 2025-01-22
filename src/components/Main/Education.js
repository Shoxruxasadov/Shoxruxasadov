import React from "react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="section section-three">
      <div className="education">
        <p>{t("section-three.edu")}</p>
        <div className="wrapper">
          <div className="edu">
            <img src="/images/education/tatu.png" />
            <div className="edu-title">
              <h1>{t("section-three.tuitName")}</h1>
              <h2>{t("section-three.tuitDire")}</h2>
              <h3>{t("section-three.tuitYear")}</h3>
            </div>
          </div>
          <div className="edu">
            <img src="/images/education/shift.png" />
            <div className="edu-title">
              <h1>{t("section-three.shiftName")}</h1>
              <h2>{t("section-three.shiftDire")}</h2>
              <h3>{t("section-three.shiftYear")}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <p>{t("section-three.exp")}</p>
        <div className="wrapper">
          <div className="exp">
            <img src="/images/education/empire.png" />
            <div className="exp-title">
              <h1>{t("section-three.webnumName")}</h1>
              <h2>{t("section-three.webnumDire")}</h2>
              <h3>{t("section-three.webnumYear")}</h3>
            </div>
          </div>
          <div className="exp">
            <img src="/images/education/empire.png" />
            <div className="exp-title">
              <h1>{t("section-three.comnetName")}</h1>
              <h2>{t("section-three.comnetDire")}</h2>
              <h3>{t("section-three.comnetYear")}</h3>
            </div>
          </div>
          <div className="exp">
            <img src="/images/education/regular.png" />
            <div className="exp-title">
              <h1>{t("section-three.regularName")}</h1>
              <h2>{t("section-three.regularDire")}</h2>
              <h3>{t("section-three.regularYear")}</h3>
            </div>
          </div>
          <div className="exp">
            <img src="/images/education/empire.png" />
            <div className="exp-title">
              <h1>{t("section-three.empireName")}</h1>
              <h2>{t("section-three.empireDire")}</h2>
              <h3>{t("section-three.empireYear")}</h3>
            </div>
          </div>
          <div className="exp">
            <img src="/images/education/empire.png" />
            <div className="exp-title">
              <h1>{t("section-three.rustName")}</h1>
              <h2>{t("section-three.rustDire")}</h2>
              <h3>{t("section-three.rustYear")}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
