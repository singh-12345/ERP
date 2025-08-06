import React from 'react';


const timesheetData = [
  {
    name: 'Cho Chang',
    avatar: '/images/cho.png',
    week: ['8h 51m', '8h 48m', '9h 46m', '9h 6m', '8h 26m', 'Rest Day', '2h 0m'],
    total: '46h 57m'
  },
  {
    name: 'Dean Thomas',
    avatar: '/images/dean.png',
    week: ['9h 2m', '8h 41m', '8h 2m', '11h 53m', '9h 5m', 'Rest Day', '-'],
    total: '46h 43m'
  },
  {
    name: 'Draco Malfoy',
    avatar: '/images/draco.png',
    week: ['8h 16m', '9h 1m', '9h 12m', '8h 51m', '8h 16m', 'Rest Day', '-'],
    total: '43h 36m'
  },
  {
    name: 'Harry Potter',
    avatar: '/images/harry.png',
    week: ['8h 52m', '8h 49m', '8h 34m', '9h 27m', '8h 10m', 'Rest Day', '3h 35m'],
    total: '47h 27m'
  },
  {
    name: 'Hermione Granger',
    avatar: '/images/hermione.png',
    week: ['10h 16m', '9h 16m', '9h 10m', '7h 27m', '8h 13m', 'Rest Day', '-'],
    total: '44h 22m'
  },
  {
    name: 'Lavender Brown',
    avatar: '/images/lavender.png',
    week: ['8h 54m', '9h 9m', '8h 45m', '9h 26m', '9h 9m', 'Rest Day', 'Rest Day'],
    total: '45h 23m'
  },
  {
    name: 'Ron Weasley',
    avatar: '/images/ron.png',
    week: ['8h 32m', '9h 45m', '9h 0m', '8h 36m', '8h 38m', 'Rest Day', '-'],
    total: '44h 31m'
  },
];

const Timesheet = () => {
  return (
    <div className="timesheet-tab">
      <div className="header d-flex justify-content-between align-items-center">
        <h2>Timesheets</h2>
        <div className="filters">
          <select><option>Weekly Timesheets</option></select>
          <input type="date" /> - <input type="date" />
          <button className="btn btn-outline-secondary">Export</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Staff</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {timesheetData.map((staff, index) => (
              <tr key={index}>
                <td>
                  <div className="staff-info">
                    <img src={staff.avatar} alt={staff.name} className="avatar" />
                    <span>{staff.name}</span>
                  </div>
                </td>
                {staff.week.map((hours, i) => (
                  <td key={i} className={hours.includes('h') && hours.includes('m') && parseInt(hours) >= 9 ? 'text-danger' : ''}>{hours}</td>
                ))}
                <td><strong>{staff.total}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timesheet;