import LanguageSwitcher from "../LanguageSwitcher";
import "./style.css";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src="/src/assets/Logo.png"
                    alt={t("altHeaderLogo")}
                />
            </div>
            <LanguageSwitcher className="language-switcher" />
        </header>
    );
};

export default Header;
