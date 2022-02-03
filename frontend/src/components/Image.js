import React from "react";
import { useTranslation } from "react-i18next";

const Image = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-100 d-flex align-items-center justify-content-center p-5">
      <img src={t("Image")} alt={`${t("Image")}-alt`} />
    </div>
  );
};

export default Image;
