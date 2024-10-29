import React from 'react'

const NewTask = ({data}) => {
  console.log(data);
  
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5  bg-slate-400 rounded-xl">
        <div className='flex justify-between'>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>{data.category}</h3> <br />
        <h4 className='text-sm'>{data.taskDate}</h4>
        
        </div>
        
        <h2 className='mt-2 text-xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm'>{data.taskDescription
        }</p>
        <div className="mt-4">
            <button className=' bg-green-900 py-1 px-2 text-sm'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask 