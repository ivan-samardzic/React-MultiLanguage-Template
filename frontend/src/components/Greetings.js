import React, { Suspense } from "react";
import Hello from "./Hello";
import { useTranslation } from "react-i18next";
import People from "./People";

const Greetings = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="d-flex flex-row align-igtems-center w-100">
      <div className="w-100 d-flex flex-column align-items-center p-5">
        <Hello />
        <People />
      </div>
    </div>
  );
};

export default Greetings;
