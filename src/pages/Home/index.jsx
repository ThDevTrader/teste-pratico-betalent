import './style.css'
import { fetchEmployees } from '../../services/api'
import { useState, useEffect } from 'react';
import EmployeeTable from '../../components/EmployeeTable';

function Home() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true);
      const data = await fetchEmployees();
      setEmployees(data);
      setLoading(false);
    };

    getEmployees();
  }, []);

  return (

    <div>
      <EmployeeTable employees={employees} loading={loading} />
    </div>

  )
}

export default Home
