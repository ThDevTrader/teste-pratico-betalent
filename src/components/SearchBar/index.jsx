import "./style.css";
import searchIcon from "../../assets/search-icon.png";
import { useTranslation } from "react-i18next";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    const { t } = useTranslation();

    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchTerm}
                onChange={handleChange}
            />
            <img
                src={searchIcon}
                alt={t("altMagnifyingGlassIcon")}
                className="search-icon"
            />
        </div>
    );
};

export default SearchBar;
