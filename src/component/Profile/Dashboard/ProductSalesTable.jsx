import React from 'react';
import { Table, Button } from 'react-bootstrap';

const products = [
  { name: 'Scissors', id: '#1005', desc: 'Hand Operated Tool', type: 'Surgical', price: '$70' },
  { name: 'Forceps', id: '#1006', desc: 'For Grasping Tissue', type: 'Surgical', price: '$300' },
  { name: 'Socks', id: '#359', desc: 'Short White Socks', type: 'Hosiery', price: '$25' },
  { name: 'Wound Retractors', id: '#1007', desc: 'For Protecting', type: 'Surgical', price: '$600' },
];

const ProductSalesTable = () => (
  <div className="card shadow-sm p-3">
    <div className="d-flex justify-content-between mb-3">
      <h5>Product Sales</h5>
      <Button variant="primary">Add Product</Button>
    </div>
    <Table hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product ID</th>
          <th>Product Description</th>
          <th>Product Type</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod, index) => (
          <tr key={index}>
            <td>{prod.name}</td>
            <td>{prod.id}</td>
            <td>{prod.desc}</td>
            <td>{prod.type}</td>
            <td>{prod.price}</td>
            <td>
              <Button variant="link" size="sm">Edit</Button>
              <Button variant="link" size="sm" className="text-danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default ProductSalesTable;
