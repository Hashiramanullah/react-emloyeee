import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ emply }) => {
  console.log(emply);

  return (
    <div
      id="tasklist"
      className="h-[55%] rounded-md bg-[#693f3fde] mt-5 overflow-x-auto items-center flex justify-start gap-5 p-3 flex-nowrap py-5 w-full"
    >
      {emply?.map((employee, idx) => 
        employee.tasks?.map((task, taskIdx) => {
          console.log(task);
          
          if (task.active) {
            return <AcceptTask data={task} key={`${idx}-${taskIdx}`} />;
          } else if (task.newTask) {
            return <NewTask data={task} key={`${idx}-${taskIdx}`} />;
          } else if (task.completed) {
            return <CompleteTask data={task} key={`${idx}-${taskIdx}`} />;
          } else if (task.failedTask) {
            return <FailedTask data={task} key={`${idx}-${taskIdx}`} />;
          } 
          return null;
        })
      )}
      {/* Example task cards for layout purposes */}
      <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-300 rounded-xl">
        <div className="flex justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-2 text-xl font-semibold">Make Youtube video</h2>
        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
          <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
