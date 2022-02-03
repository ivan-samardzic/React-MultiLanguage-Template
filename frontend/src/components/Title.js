import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-danger">
        {t("header:DynamicKey", {
          what: "Ars Futura Web Team",
          how: "the best",
        })}
      </div>
      <div className="text-danger">{t("header:Reacti18nextTitle")}</div>
    </div>
  );
};

export default Title;
