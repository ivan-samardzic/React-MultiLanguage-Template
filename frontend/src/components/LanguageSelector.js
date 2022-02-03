import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div
      onChange={changeLanguage}
      className="d-flex align-items-center justify-content-around"
      style={{ width: "200px" }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <input type="radio" value="en" name="language" defaultChecked />
        <p className="m-3">English</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <input type="radio" value="de" name="language" />
        <p className="m-3">German</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <input type="radio" value="es" name="language" />
        <p className="m-3">Spanish</p>
      </div>
    </div>
  );
};

export default LanguageSelector;
