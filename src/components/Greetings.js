import React from "react";
import { useTranslation } from "react-i18next";

const Greetings = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex d-flex flex-column align-items-center p-5">
        <div
          className="border-bottom border-5 border-danger"
          style={{
            textAlign: "center",
            fontSize: "58px",
            fontWeight: "700",
            marginBottom: "20px",
            borderWidth: "10px",
            lineHeight: "60px",
          }}
        >
          {t("Hello")}
        </div>
        <div
          className="text-center"
          style={{
            marginBottom: "20px",
            maxWidth: "800px",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          {t("People")}
        </div>
        <div
          className="text-danger text-center"
          style={{ fontWeight: "600", fontSize: "18px" }}
        >
          {t("DynamicKey", {
            what: "Internationalization",
            how: t("Best", { ns: "general" }),
          })}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
