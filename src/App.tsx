import { useState } from 'react';
import './App.scss';
import { employees } from './data/employees';

function App() {
  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter((employee) => {
    return search.toLowerCase() === ''
      ? employee
      : employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
          employee.last_name.toLowerCase().includes(search.toLowerCase()) ||
          employee.job.toLowerCase().includes(search.toLowerCase()) ||
          employee.email.toLowerCase().includes(search.toLowerCase()) ||
          employee.phone.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="wrapper">
      <h1>Seek and thou shall find.</h1>
      <div className="form">
        <form action="">
          <input
            type="text"
            placeholder="Seek.."
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        {filteredEmployees.length > 0 ? (
          <table>
            <thead className="table-head">
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Function</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => {
                const { first_name, last_name, job, email, phone } = employee;

                return (
                  <tr key={index}>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{job}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="no-results">
            <p>Sorry, no results found..</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
