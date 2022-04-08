import React from "react";
import { useTranslation } from "react-i18next";

const Greetings = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex d-flex flex-column align-items-center p-5">
        <div
          style={{ textAlign: "center", fontSize: "58px", fontWeight: "700" }}
        >
          {t("Hello")}
        </div>
        <div className="text-center">{t("People")}</div>
        <div className="text-danger">
          {t("header:DynamicKey", {
            what: "Internationalization",
            how: t("header:Best"),
          })}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
