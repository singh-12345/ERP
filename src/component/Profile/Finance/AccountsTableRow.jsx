import React from 'react';
import { Image } from 'react-bootstrap';
import { Pencil, Trash, ArrowClockwise } from 'react-bootstrap-icons';

const AccountsTableRow = (props) => {
  return (
    <tr>
      <td>{props.service}</td>
      <td>{props.created}</td>
      <td>{props.month}</td>
      <td>{props.number}</td>
      <td>{props.provider}</td>
      <td>{props.company}</td>
      <td>
        <a href="#">{props.contract}</a>
      </td>
      <td>{props.payment}</td>
      <td>{props.accountType}</td>
      <td>{props.amount}</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <Image src="https://via.placeholder.com/30" roundedCircle />
          <div>
            <strong>{props.creator}</strong><br />
            <small className="text-muted">{props.role}</small>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex gap-2">
          <Pencil className="text-primary" role="button" />
          <ArrowClockwise className="text-success" role="button" />
          <Trash className="text-danger" role="button" />
        </div>
      </td>
    </tr>
  );
};

export default AccountsTableRow;
