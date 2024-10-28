import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ data, user, changeUser }) => { // Destructuring changeUser here
  const [userName, setUserName] = useState('Admin');

  useEffect(() => {
    if (data && data.firstName) {
      setUserName(data.firstName);
    }
  }, [data]);

  const { theme, toggleTheme } = useTheme();
  
  const logoutHandler = () => {
    localStorage.removeItem('loggedInUser');
    changeUser('');  
  };

  return (
    <div>
      <div className={`flex items-end justify-between ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>
        <h1 className={`text-2xl font-medium ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>
          Hello <br />  
          <span className={`text-3xl font-semibold ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>
            {userName} 👋
          </span>
        </h1>
        <div>
          <button 
            onClick={logoutHandler} 
            className={`px-5 py-3 rounded-sm text-lg font-medium m-2 ${theme === 'light' ? 'bg-[#38393b] text-white' : 'bg-red-500 text-white'}`}>
            Log Out
          </button>
          <button 
            onClick={toggleTheme}
            className={`px-5 py-3 rounded-sm text-lg font-medium m-2 ${theme === 'light' ? 'bg-[#38393b] text-white' : 'bg-red-500 text-white'}`}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
