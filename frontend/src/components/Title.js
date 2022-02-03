import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t, i18n } = useTranslation();
  return <div className="text-danger">{t("header:Reacti18nextTitle")}</div>;
};

export default Title;
