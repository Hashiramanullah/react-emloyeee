import React from 'react';
import Header from '../other/header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  const { employeeData, user, changeUser } = props; // Destructure all props here
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={employeeData} user={user} changeUser={props.changeUser} />
      <TaskListNumber data={employeeData} />
      <TaskList data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
