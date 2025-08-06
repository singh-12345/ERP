import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const orders = [
  { status: 'IN PROGRESS', amount: '£39,456.77', variant: 'warning' },
  { status: 'SENT', amount: '£154,464.39', variant: 'info' },
  { status: 'CONFIRMED', amount: '£1,167,746.44', variant: 'primary' },
  { status: 'CLOSED', amount: '£2,444,448.16', variant: 'success' },
];

const SalesOrderTotals = () => (
  <Card className="shadow-sm p-3 h-100">
    <h6>Sales Order Totals</h6>
    <ListGroup variant="flush">
      {orders.map((item, i) => (
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

export default SalesOrderTotals;
