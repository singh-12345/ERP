import React from 'react';
import { Card } from 'react-bootstrap';

const PayrollDeduction = () => {
  const items = [
    { title: 'EPF', amount: '₹39,73,913.00' },
    { title: 'ESI', amount: '₹91,010.00' },
    { title: 'TDS DEDUCTION', amount: '₹1,15,89,089.00' },
  ];

  return (
    <>
      {items.map((item, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-muted small">{index === 2 ? 'Previous Month' : 'Deduction Summary'}</div>
              <div className="fw-bold">{item.title}</div>
              <div className="fs-5 fw-semibold mt-2">{item.amount}</div>
              <a href="#" className="small text-primary">View Details</a>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default PayrollDeduction;
