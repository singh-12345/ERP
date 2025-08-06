import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PayrollHeader = () => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body className="d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h5 className="mb-2">Process Pay Run for July 2025 <span className="badge bg-warning text-dark">Approved</span></h5>
          <p className="mb-0 text-muted small">Pay your employees on 31 May 2024. Record it here once you made the payment.</p>
        </div>
        <div className="d-flex flex-wrap mt-3 mt-md-0 gap-4">
          <div>
            <div className="text-muted small">EMPLOYEES’ NET PAY</div>
            <div className="fw-bold fs-5">₹17,25,23,654.00</div>
          </div>
          <div>
            <div className="text-muted small">PAYMENT DATE</div>
            <div className="fw-bold">31 May 2024</div>
          </div>
          <div>
            <div className="text-muted small">NO. OF EMPLOYEES</div>
            <div className="fw-bold">1308</div>
          </div>
          <div>
            <Button variant="dark">View Details</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PayrollHeader;
