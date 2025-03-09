import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";
import "./style.css";
import { useTranslation } from "react-i18next";

const EmployeeTable = ({ employees, loading }) => {
    const { t } = useTranslation();

    if (loading) {
        return <div>{t("loading")}</div>;
    }

    if (employees.length === 0) {
        return <div className="no-employees-found">{t("noEmployeesFound")}</div>;
    }

    return (
        <div className="table-container">
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>{t("tableHeaders.photo")}</th>
                        <th>{t("tableHeaders.name")}</th>
                        <th>{t("tableHeaders.job")}</th>
                        <th>{t("tableHeaders.admissionDate")}</th>
                        <th>{t("tableHeaders.phone")}</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <img
                                    src={employee.image}
                                    alt={t("altEmployeeImage")}
                                    className="employee-image"
                                />
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{formatDate(employee.admission_date)}</td>
                            <td>{formatPhone(employee.phone)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
