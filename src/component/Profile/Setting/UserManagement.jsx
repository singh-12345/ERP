import React from 'react';
// import '../../styles/UserManagement.scss';

const UserManagement = () => {
  return (
    <div className="user-management">
      <h5>User Management</h5>
      <form className="form-inline">
        <input type="text" placeholder="Search Users" className="form-control mb-2 mr-sm-2" />
        <button className="btn btn-primary mb-2">Add User</button>
      </form>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aman Kumar Singh</td>
            <td>aman@example.com</td>
            <td>Admin</td>
            <td><button className="btn btn-sm btn-secondary">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;