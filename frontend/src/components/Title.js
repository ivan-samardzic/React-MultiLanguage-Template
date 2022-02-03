import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {/* {i18n.exists("header:DynamicKey") && (
        <div className="text-danger">
          {t("header:DynamicKey", {
            what: "Ars Futura Web Team",
            how: t("header:Best"),
          })}
        </div>
      )} */}
      <div className="text-danger">{t("header:Reacti18nextTitle")}</div>
    </div>
  );
};

export default Title;
