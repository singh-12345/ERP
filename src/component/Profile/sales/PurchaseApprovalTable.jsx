import React from 'react';
import { Table, Card } from 'react-bootstrap';

const PurchaseApprovalTable = () => {
  return (
    <Card className="shadow-sm p-3">
      <h6>Purchases Awaiting Approval</h6>
      <Table responsive hover className="mb-0 mt-3">
        <thead>
          <tr>
            <th>PO NUMBER</th>
            <th>SUPPLIER</th>
            <th>PO DATE</th>
            <th>BUYER</th>
            <th>STATUS</th>
            <th>PURCHASE ORDER STAGE</th>
            <th>GRN</th>
            <th>NET TOTAL EX VAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">11622</a></td>
            <td>Flowers</td>
            <td>Sep 30, 2021</td>
            <td>Sean Carlin</td>
            <td>In Progress</td>
            <td>None</td>
            <td>Received</td>
            <td>£11,000.00</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default PurchaseApprovalTable;
