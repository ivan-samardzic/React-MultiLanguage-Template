import React from "react";
import { useTranslation } from "react-i18next";

const Hello = () => {
  const { t } = useTranslation();
  return <div style={{ fontSize: "32px" }}>{t("Hello")}</div>;
};

export default Hello;
