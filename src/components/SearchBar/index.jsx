import './style.css'
import searchIcon from "../../assets/search-icon.png"

const SearchBar = ({ searchTerm, onSearchChange }) => {
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={handleChange}
            />
            <img
                src={searchIcon}
                alt="ícone de lupa"
                className="search-icon"
            />
        </div>
    );
}

export default SearchBar