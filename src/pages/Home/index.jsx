import './style.css'
import { fetchEmployees } from '../../services/api'
import { useState, useEffect } from 'react';

function Home() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };

    getEmployees();
  }, []);

  return (
    <div>
      <h1>Funcionários</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
