import { formatDate } from '../../utils/formatDate';
import './style.css'

const EmployeeTable = ({ employees, loading }) => {
    if (loading) {
        return <div>Carregando...</div>;
    }

    if (employees.length === 0) {
        return <div>Nenhum colaborador encontrado</div>;
    }

    return (
        <div className="table-container">
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>FOTO</th>
                        <th>NOME</th>
                        <th>CARGO</th>
                        <th>DATA DE ADMISSÃO</th>
                        <th>TELEFONE</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <img
                                    src={employee.image}
                                    alt="Foto do colaborador"
                                    className="employee-image"
                                />
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{formatDate(employee.admission_date)}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable
