import React, { useState } from 'react';
import UserManagement from './UserManagement';
import SystemPreferences from './SystemPreferences';
import SecuritySettings from './SecuritySettings';
import ThemeSettings from './ThemeSettings';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('profile-theme') || 'system';
  });

  return (
    <div className="container settings-page mt-5">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'user' ? 'active' : ''}`} onClick={() => setActiveTab('user')}>User Management</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Preferences</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>Security Settings</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'theme' ? 'active' : ''}`} onClick={() => setActiveTab('theme')}>Theme Settings</button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'user' && <UserManagement />}
        {activeTab === 'system' && <SystemPreferences />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'theme' && <ThemeSettings theme={theme} setTheme={setTheme} />}
      </div>
    </div>
  );
};

export default SettingsPage;
