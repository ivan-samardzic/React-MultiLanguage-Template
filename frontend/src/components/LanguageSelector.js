import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState("en");
  const [label, setLabel] = useState(t("English", { ns: "header" }));

  const dropdownOptions = useMemo(
    () => [
      { label: t("English", { ns: "header" }), value: "en" },
      { label: t("German", { ns: "header" }), value: "de" },
      { label: t("Spanish", { ns: "header" }), value: "es" },
    ],
    [t]
  );
  const data = useMemo(() => [...dropdownOptions], [dropdownOptions]);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setValue(event.target.value);
  };

  useEffect(() => {
    setLabel(
      dropdownOptions.map(
        (dropdownOption, index) =>
          value === dropdownOption.value && dropdownOption.label
      )
    );
  }, [value, t, dropdownOptions]);

  return (
    <Dropdown
      label={label}
      options={data}
      value={value}
      onChange={changeLanguage}
    />
  );
};

export default LanguageSelector;
