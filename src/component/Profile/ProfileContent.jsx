import React from 'react';
import '../../sass/_profile.scss';
import logo1 from '../../assets/logo-5.png'
import { useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StaffProfile from './StaffProfile';
// import WorkInformation from './WorkInformation';
// import Timesheet from './TimeSheet';
import DashboardContent from './Dashboard/DashboardContent';
import Accounts from './Finance/Account';
import { Link } from 'react-router-dom';
import Payroll from './Payroll/Payroll';
import Sales from './sales/Sales';
import Product from './Products/Product';
import ReportPage from './Report/Report';
import SettingsPage from './Setting/Setting';
import HelpCenter from './Help-center/HelpCenter';
import { useState } from 'react';

const Profile = () => {

  const [theme, setTheme] = useState('light-theme');

  return (
    <div className="erp-container d-flex">
      {/* Sidebar */}
     <aside className="sidebar bg-black shadow-sm">
  <div className="sidebar-header px-3 py-4">
    <h4 className="brand-name text-white">ERP Admin</h4>
  </div>
  <ul className="nav flex-column sidebar-menu px-3">
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/dashboard">Dashboard</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/finance">Finance</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/products">Products</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/sales">Sales</Link></li>
    {/* <li className="nav-item"><Link className="nav-link text-blue" to="/users">Users</Link></li> */}
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/payrolls">Payrolls</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/reports">Reports</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/settings">Setting</Link></li>
    <li className="nav-item"><Link className="nav-link text-blue" to="/profile/help">Help Center</Link></li>
  </ul>
</aside>

      {/* Main Content */}

      <main id="profile-theme-wrapper" className="profile-content p-4">

        {/* Profile Top Bar */}
              <div className="profile-topbar d-flex justify-content-between align-items-center px-4 py-3 mb-3">
        {/* Left: Organization Info */}
        <div className="organization-info">
          <div className="text-muted small">Your organization</div>
          <div className="fw-bold d-flex align-items-center mt-1">
            <img src={logo1} alt="Logo" className="me-2 org-logo" />
            TechnoHunk
          </div>
        </div>
      
        {/* Center: Search Bar */}
        <div className="search-bar flex-grow-1 mx-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search modules, reports, data..."
              aria-label="Search"
            />
            <span className="input-group-text"><i className="bi bi-search"></i></span>
          </div>
        </div>
      
        {/* Right: Notification and Profile */}
        <div className="d-flex align-items-center">
          {/* Notification Bell */}
          <button className="btn position-relative me-3 p-0">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle notification-dot"></span>
          </button>
      
          {/* Profile Dropdown */}
          <div className="dropdown">
            <div
              className="d-flex align-items-center dropdown-toggle"
              role="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={logo1}
                alt="User"
                className="rounded-circle me-2"
                width="36"
                height="36"
              />
              <span className="nam fw-semibold">Aman Kumar Singh</span>
            </div>
          
            <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="profileDropdown">
          
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/login">
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Profile
                </a>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/change-password">
                  <i className="bi bi-shield-lock-fill me-2"></i>
                  Change Password
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/login">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
          
          </div>
        </div>

       {/* Dashboard profile content routes */}
      <Routes>
        <Route path="dashboard" element={<DashboardContent />} />
        <Route path="finance" element={<Accounts />} />
        <Route path="payrolls" element={<Payroll />} />
        <Route path="sales" element={<Sales />} />
        <Route path="products" element={<Product />} />
        <Route path="reports" element={<ReportPage />} />
        <Route path="settings" element={<SettingsPage setTheme={setTheme} />} />
        <Route path="help" element={<HelpCenter />} />
      </Routes>

         
       {/* Staff Tab Navigation */}

        {/* <div className="staff-tabs mb-4">
          <nav className="breadcrumb-nav mb-2">
            <span>Staffs / Staff list / </span>
            <span className="text-primary fw-semibold">Staff detail</span>
          </nav>
         <ul className="nav nav-tabs profile-tabs mb-3">
           <li className="nav-item">
             <NavLink to="/profile/staff" className="nav-link">Staff profile</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to="/profile/work" className="nav-link">Work information</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to="/profile/timesheet" className="nav-link">Timesheet & Attendance</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to="/profile/contracts" className="nav-link">Contracts & Documents</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to="/profile/payroll" className="nav-link">Payroll & Benefits</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to="/profile/assets" className="nav-link">Company assets</NavLink>
           </li>
         </ul>

        </div> */}

        
        

<Routes>
  <Route path="" element={<StaffProfile />} />
  {/* <Route path="work" element={<WorkInformation />} />
  <Route path="timesheet" element={<Timesheet />} />
  <Route path="contracts" element={<ContractsTab />} />
  <Route path="payroll" element={<PayrollTab />} />
  <Route path="assets" element={<AssetsTab />} />
  <Route path="*" element={<Navigate to="staff" />} /> */}
</Routes>

      </main>
    </div>
  );
};

export default Profile;
