import React from 'react';
import { Button } from 'react-bootstrap';

const AccountsHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold">Finance</h4>
      <div>
        <Button variant="primary" className="me-2">+ Add an account</Button>
        <Button variant="outline-secondary">Actions</Button>
      </div>
    </div>
  );
};

export default AccountsHeader;
