import React from "react";
import { useTranslation } from "react-i18next";
import flagBrazil from "../../assets/flag_Brazil.png";
import flagSpain from "../../assets/flag_Spain.png";
import flagUSA from "../../assets/flag_United_States.png";
import "./style.css";

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-switcher">
            <img
                src={flagBrazil}
                alt={t("altBrazilFlag")}
                className={`flag-icon ${i18n.language === "pt-BR" ? "active" : ""}`}
                onClick={() => changeLanguage("pt-BR")}
            />
            <img
                src={flagUSA}
                alt={t("altUSAFlag")}
                className={`flag-icon ${i18n.language === "en" ? "active" : ""}`}
                onClick={() => changeLanguage("en")}
            />
            <img
                src={flagSpain}
                alt={t("altSpainFlag")}
                className={`flag-icon ${i18n.language === "es" ? "active" : ""}`}
                onClick={() => changeLanguage("es")}
            />
        </div>
    );
};

export default LanguageSwitcher;
