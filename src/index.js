import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "rodal/lib/rodal.css";
import "./styles/style.scss";
import "./styles/media.scss";
import "./styles/global.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_ru from "./translations/ru/global.json";
import global_uz from "./translations/uz/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng:
    localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang"),
  resources: {
    en: {
      global: global_en,
    },
    ru: {
      global: global_ru,
    },
    uz: {
      global: global_uz,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
      <Analytics />
    </I18nextProvider>
  </React.StrictMode>
);
