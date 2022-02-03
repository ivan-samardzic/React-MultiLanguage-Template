import React from "react";
import { useTranslation } from "react-i18next";

const People = () => {
  const { t } = useTranslation();

  return <div>{t("People")}</div>;
};

export default People;
