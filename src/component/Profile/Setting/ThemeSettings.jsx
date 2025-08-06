import React, { useEffect } from 'react';

const ThemeSettings = ({ theme, setTheme }) => {
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (selectedTheme) => {
    const root = document.getElementById('profile-theme-wrapper');

    if (!root) return;

    root.classList.remove('light-theme', 'dark-theme');

    if (selectedTheme === 'light') {
      root.classList.add('light-theme');
    } else if (selectedTheme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
    }

    localStorage.setItem('profile-theme', selectedTheme);
  };

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="theme-settings p-3">
      <div className="form-group">
        <label>Choose Theme</label>
        <select className="form-control" value={theme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>
    </div>
  );
};

export default ThemeSettings;
