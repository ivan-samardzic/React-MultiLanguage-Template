import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-row align-items-center">
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "60px",
          justifyContent: "center",
          alignContent: "center",
          margin: "0px 8px",
        }}
      >
        <img
          src={t("ArsFuturaImage")}
          alt={`${t("ArsFuturaImage")}-alt`}
          style={{ width: "60px", height: "60px", alignContent: "center" }}
        />
        <div
          className="text-danger"
          style={{ width: "60px", fontSize: "12px", alignContent: "center" }}
        >
          Ars Futura
        </div>
      </div>
      <div className="d-flex flex-column align-items-center w-10 my-4">
        <img
          src={t("I18NextImage")}
          alt={`${t("I18NextImage")}-alt`}
          style={{ width: "60px", height: "60px", alignContent: "center" }}
        />
        <div
          className="text-success"
          style={{
            width: "60px",
            fontSize: "12px",
            alignContent: "center",
            marginLeft: "12px",
          }}
        >
          i18next
        </div>
      </div>
    </div>
  );
};

export default Title;
