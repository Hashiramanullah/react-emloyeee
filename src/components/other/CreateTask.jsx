import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const employeeData = JSON.parse(localStorage.getItem('employee'));
    if (!employeeData) {
      console.error("No employee data found in local storage.");
      return;
    }
  
    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const updatedEmployeeData = employeeData.map((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
      }
      return elem;
    });
  
    // Update `employee` data in localStorage
    localStorage.setItem('employee', JSON.stringify(updatedEmployeeData));
  
    // Agar loggedInUser wo employee hai jise task assign hua, toh `loggedInUser` ko bhi update karna zaroori hai
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.data && loggedInUser.data.firstName === asignTo) {
      loggedInUser.data.tasks = updatedEmployeeData.find((e) => e.firstName === asignTo).tasks;
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      setLoggedInUserData(loggedInUser.data); // State update for real-time sync
    }
  
    setAsignTo('');
    setCategory('');
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
  };
  

  return (
    <div>
      <div className={`p-2  md:p-5 mt-7 rounded ${theme === 'light' ? 'bg-[#9a9ca1] text-black' : 'bg-[#1c1c1c]'}`}>
        <form onSubmit={handleSubmit} className='flex w-full flex-wrap item-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className={`text-sm mb-0.5 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text" 
                className='text-sm py-1 px-2 w-3/5 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                placeholder='Make a UI design' 
              />
            </div>

            <div>
              <h3 className={`text-sm mb-0.5 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date" 
                className='text-sm py-1 px-2 w-3/5 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 cursor-pointer' 
              />
            </div>

            <div>
              <h3 className={`text-sm mb-0.5 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>Assign To</h3>
              <input 
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text" 
                className='text-sm py-1 px-2 w-3/5 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                placeholder='Employee name' 
              />
            </div>

            <div>
              <h3 className={`text-sm mb-0.5 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text" 
                className='text-sm py-1 px-2 w-3/5 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                placeholder='dev, designer, coder etc' 
              />
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className={`text-sm mb-0.5 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className='w-full h-32 md:h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' 
              name="" 
              id="" 
              cols="30" 
              rows="10"
            ></textarea>
            <button className='bg-emerald-500 py-2 md:px-5 md:py-3 hover:bg-emerald-600 px-2 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask;