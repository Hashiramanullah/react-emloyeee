import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  
    const {theme,toggelTheme} = useTheme();

  return (
    <div className={`"p-8" ${theme == 'light' ? 'bg-gray-700 text-white' : 'bg-gray text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Welcome to My Website</h2>
      <p>This is a sample website with a light/dark theme toggle.</p>
    </div>
  );
};

export default Home;
