import React from 'react'

const TaskListNumber = ({data}) => {
  if (!data || !data.taskCount) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex flex-wrap md:flex-nowrap  mt-8 screen    gap-5 justify-around '>
   <div className='rounded-xl w-[35%] md:w-[10%]p-10  bg-red-400'>
   <h2 className='text-xl p-3 bg-blue-600 rounded-md text-center pt-10 font-semibold'>{data.taskCount.active}</h2>
   <h3 className='text-lg p-5 md:text-xl font-medium'>New Task</h3>
   </div> 

   <div className='rounded-xl w-[35%] md:w-[10%]p-10  bg-orange-500'>
   <h2 className='text-xl p-3 bg-gray-400 rounded-md text-center pt-10 font-semibold'>{data.taskCount.completed}</h2>
   <h3 className='text-lg p-5 md:text-xl font-medium'>Completed</h3>
   </div> 

  <div className='rounded-xl w-[35%] md:w-[10%]p-10  bg-purple-400'>
   <h2 className='text-xl p-3 bg-green-400 rounded-md text-center pt-10 font-semibold'>{data.taskCount.active}</h2>
   <h3 className='text-lg p-5 md:text-xl font-medium'>New Task</h3>
   </div> 

   <div className='rounded-xl w-[35%] md:w-[10%]p-10  bg-gray-400'>
   <h2 className='text-xl p-3 bg-pink-600 rounded-md text-center pt-10 font-semibold'>{data.taskCount.failed}</h2>
   <h3 className='text-lg p-5 md:text-xl font-medium'>New Task</h3>
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