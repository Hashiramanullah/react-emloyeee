import React from 'react'

const TaskListNumber = ({data}) => {
  if (!data || !data.taskCount) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex mt-10 screen    gap-5 justify-around '>
   <div className='rounded-xl w-[35%] p-10  bg-red-400'>
   <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>

   <div className='rounded-xl w-[35%] p-10  bg-blue-400'>
   <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   <div className='rounded-xl w-[35%] p-10  bg-green-400'>
   <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   <div className='rounded-xl w-[35%] p-10  bg-yellow-400'>
   <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   {/* <div className='rounded-xl w-[35%] p-10  bg-gray-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>

   <div className='rounded-xl w-[35%] p-10  bg-emerald-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div> */}
    </div>
  )
}

export default TaskListNumber