import "./style.css";
import { fetchEmployees } from "../../services/api";
import { useState, useEffect } from "react";
import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true);
      const data = await fetchEmployees();
      setEmployees(data);
      setFilteredEmployees(data);
      setLoading(false);
    };

    getEmployees();
  }, []);

  useEffect(() => {
    if (searchTerm === "" || searchTerm.trim() === "") {
      setFilteredEmployees(employees);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(term) ||
          employee.job.toLowerCase().includes(term) ||
          employee.phone.includes(term)
      );
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header />
      <h1 className="home-title">{t("appTitle")}</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <EmployeeTable employees={filteredEmployees} loading={loading} />
    </div>
  );
}

export default Home;
