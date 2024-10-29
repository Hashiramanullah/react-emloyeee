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
    <div className='mx-auto'>
      <div className={`flex items-end justify-between ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>

        <h1 className={`md:text-2xl text-base font-medium ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>
          Hello <br />  
          <span className={`md:text-3xl text-base  font-semibold ${theme === 'light' ? 'bg-slate-200 text-black' : 'body'}`}>
            {userName} 👋
          </span>
        </h1>
        <div className='flex'>
          <button 
            onClick={logoutHandler} 
            className={`px-3 py-2 rounded-sm text-base md:text-2xl font-medium hover:bg-red-600 m-2 ${theme === 'light' ? 'bg-[#38393b] text-white' : 'bg-red-500 text-white'}`}>
            Log Out
          </button>
          <button 
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-sm text-lg font-medium hover:bg-red-600 focus:outline-none focus:ring  xl:bg-black   m-2 ${theme === 'light' ? 'bg-[#38393b] text-white' : 'bg-red-500 text-white'}`}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
