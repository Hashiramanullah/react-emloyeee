import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5  bg-orange-400 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>{data.title}</h2>
    <p className='text-sm'>{data.description}</p>
    <div className="mt-2">
        <button className='w-full bg-red-500 py-1 px-2 text-sm'>Failed</button>
    </div>
  </div>
  )
}

export default FailedTask