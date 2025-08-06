import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import AccountsTableRow from './AccountsTableRow';

const dummyData = new Array(10).fill(null).map((_, i) => ({
  service: `Utilities №${i % 2 + 1}`,
  created: '15.03.2022',
  month: 'October 2021',
  number: 'AB1013707',
  provider: 'ABC',
  company: i % 2 === 0 ? 'IE' : 'LLC',
  contract: '60A167-624-820',
  payment: 'For a decade (5-12%)',
  accountType: 'To the plan Payment 1/3',
  amount: i % 2 === 0 ? '63.35' : '3 641.86/35',
  creator: i % 2 === 0 ? 'Alex Miller' : 'Consumer',
  role: i % 2 === 0 ? 'Admin Manager' : 'Consumer',
}));

const AccountsTable = () => {
  return (
    <div className="table-responsive">
      <Table bordered hover className="align-middle">
        <thead>
          <tr className="table-light">
            <th>Service</th>
            <th>Creation date/time</th>
            <th>Per month</th>
            <th>Account number</th>
            <th>Provider</th>
            <th>Company</th>
            <th>Contract</th>
            <th>Payment method</th>
            <th>Account type</th>
            <th>Amount, USD</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, i) => (
            <AccountsTableRow key={i} {...item} />
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center px-2">
        <small>Results: 1-50 of 168</small>
        <Pagination className="mb-0">
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default AccountsTable;
