import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("About")}</p>
    </div>
  );
};

export default About;
