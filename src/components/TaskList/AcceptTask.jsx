import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
    
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5  bg-blue-300 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>{data.title}</h2>
    <p className='text-sm'>{data.description}   Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit.</p>
    <div className='flex justify-between mt-4 '> 
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  
  </div>
  
  )
}

export default AcceptTask