// src/components/Report.jsx
import React, { useState } from 'react';
// import '../styles/Report.scss';
import { Table, Form, Row, Col, Button, Pagination } from 'react-bootstrap';

const Report = () => {
  const [filter, setFilter] = useState('');
  const reports = [
    { id: 1, title: 'Monthly Revenue', department: 'Sales', status: 'Completed', date: '2025-08-01' },
    { id: 2, title: 'Bug Analysis', department: 'QA', status: 'Pending', date: '2025-08-03' },
    { id: 3, title: 'Resource Allocation', department: 'HR', status: 'Completed', date: '2025-08-05' },
    { id: 4, title: 'Server Uptime Report', department: 'IT', status: 'In Progress', date: '2025-08-06' },
  ];

  const filteredReports = reports.filter((r) =>
    r.department.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="advanced-report container mt-4">
      <h3 className="report-heading mb-4">ERP Reports</h3>

      {/* Filters */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="departmentFilter">
              <Form.Label>Filter by Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. HR, IT, Sales"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-end">
            <Button variant="primary" onClick={() => setFilter('')}>Clear Filter</Button>
          </Col>
        </Row>
      </Form>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <div className="summary-card">
            <h5>Total Reports</h5>
            <p>{filteredReports.length}</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="summary-card">
            <h5>Completed</h5>
            <p>{filteredReports.filter(r => r.status === 'Completed').length}</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="summary-card">
            <h5>Pending / In Progress</h5>
            <p>{filteredReports.filter(r => r.status !== 'Completed').length}</p>
          </div>
        </Col>
      </Row>

      {/* Chart Placeholder */}
      <div className="chart-placeholder mb-4">
        <p>[ Chart or Graph Here (use Chart.js or Recharts) ]</p>
      </div>

      {/* Table */}
      <div className="table-wrapper card shadow-sm">
        <div className="card-body">
          <Table responsive bordered hover className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Report Title</th>
                <th>Department</th>
                <th>Status</th>
                <th>Generated On</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.title}</td>
                  <td>{report.department}</td>
                  <td>
                    <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                      {report.status}
                    </span>
                  </td>
                  <td>{report.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination (Static Example) */}
          <Pagination className="mt-3">
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Report;
