import React from 'react';
import { Row, Col, Form, Button, Badge } from 'react-bootstrap';

const AccountFilters = () => {
  return (
    <div className="account-filters mb-4">
      {/* <div className="bg-warning-subtle text-dark p-3 rounded mb-3">
        <span className="me-3">
          <strong>Progress according to your request:</strong> Accounts created: 5/10. Error: 0
        </span>
        <a href="#" className="text-decoration-underline">Go to step</a>
      </div> */}

      <Row className="gy-2 gx-3">
        <Col md={2}>
          <Form.Select>
            <option>All</option>
            <option>Utilities №1</option>
            <option>Utilities №2</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>Utilities №1</option>
            <option>Utilities №2</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Control type="month" placeholder="From date" />
        </Col>
        <Col md={2}>
          <Form.Control type="month" placeholder="To date" />
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>All suppliers</option>
            <option>ABC</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select>
            <option>All payment methods</option>
            <option>1/3 Plan</option>
          </Form.Select>
        </Col>
        <Col md={2} className="mt-2">
          <Button variant="outline-primary" className="w-100">To Counterparty</Button>
        </Col>
        <Col md={4} className="mt-2">
          <Form.Control placeholder="Search" />
        </Col>
      </Row>
    </div>
  );
};

export default AccountFilters;
