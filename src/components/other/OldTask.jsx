import React, { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthProvider';

const OldTask = () => {
   const authData = useContext(AuthContext);

  const { theme, toggleTheme } = useTheme();

  return (
    <div id='tasklist' className={`${theme === 'light' ? 'bg-[#405078]' : 'bg-[#242323]'} p-5 mt-5 rounded h-48 overflow-auto bg-black`}>
      <div className='bg-red-400 py-2 mt-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee </h2>
        <h3 className='w-1/5'>New Tasks</h3>
        <h5 className='w-1/5'>Active Tasks</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
      <div className="">
        {authData ? authData.EmployeeData.map((elem,idx)=>{
       return <div key={idx} className='border-2 mt-3 border-emerald-500 mb-5 py-2 px-4 flex justify-between'>
         <h2 className='text-lg font-medium w-1/5'>{elem ? elem.firstName : 'no'}</h2>
         <h2 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newTask}</h2>
         <h2 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h2>
         <h2 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h2>
         <h2 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskCount.failed}</h2>
       </div>
        })
          :<p>No employees found.</p>
        }
      </div>
    </div>
  );
}

export default OldTask;
