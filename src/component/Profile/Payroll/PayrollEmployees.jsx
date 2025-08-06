import React from 'react';
import { Card } from 'react-bootstrap';

const PayrollEmployees = () => {
  return (
    <div className="col-md-4 mb-3">
      <Card className="shadow-sm h-100">
        <Card.Body>
          <div className="text-muted small">Employee Summary</div>
          <div className="fw-bold">Active Employees</div>
          <div className="fs-4 fw-semibold mt-2">1308</div>
          <a href="#" className="small text-primary">View Employees</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PayrollEmployees;
