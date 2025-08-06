import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const quotes = [
  { status: 'SENT', amount: '£12,151.00', variant: 'warning' },
  { status: 'ACCEPTED', amount: '£1,624.00', variant: 'success' },
  { status: 'REJECTED', amount: '£502.25', variant: 'danger' },
];

const ReplyQuoteTotals = () => (
  <Card className="shadow-sm p-3 h-100">
    <h6>Reply Quote Totals - 6mos</h6>
    <ListGroup variant="flush">
      {quotes.map((item, i) => (
        <ListGroup.Item key={i} className={`bg-${item.variant}-subtle`}>
          <div className="d-flex justify-content-between">
            <span>{item.status}</span>
            <strong>{item.amount}</strong>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Card>
);

export default ReplyQuoteTotals;
