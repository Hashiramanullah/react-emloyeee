import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-lg font-bold">My Website</h1>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
