import React from "react";
import { useTranslation } from "react-i18next";

const People = () => {
  const { t, i18n } = useTranslation();

  return <div>{t("People")}</div>;
};

export default People;
