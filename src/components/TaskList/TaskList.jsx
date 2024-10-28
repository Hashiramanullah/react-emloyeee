import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  // console.log(data);
  
  return (
    <div
      id="tasklist"
      className="h-[55%] bg-[#404240] mt-5 overflow-x-auto items-center flex justify-start gap-5 p-3 flex-nowrap py-5 w-full"
    >
      {data ?data.tasks.map((elem,idx)=>{
      //  console.log(elem);
       if(elem.active){
        return <AcceptTask data={elem} key={idx}/>
       }if(elem.newTask){
        return <NewTask data={elem}  key={idx}/>
       }if(elem.completed){
        return <NewTask data={elem}  key={idx}/>
       }if(elem.failedTask){
        return <FailedTask data={elem}  key={idx}/>
       }
       
      }):''}
       {/* <AcceptTask/>
       <NewTask/>
       <CompleteTask/>
       <FailedTask/> */}

       {/*  for check functionality  */}
       <div className="h-full flex-shrink-0 w-[300px] p-5  bg-blue-300 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>Make Youtube video</h2>
    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
    <div className='flex justify-between mt-4 '> 
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  </div>
  <div className="h-full flex-shrink-0 w-[300px] p-5  bg-blue-300 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>Make Youtube video</h2>
    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
    <div className='flex justify-between mt-4 '> 
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  </div>
  <div className="h-full flex-shrink-0 w-[300px] p-5  bg-blue-300 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>Make Youtube video</h2>
    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
    <div className='flex justify-between mt-4 '> 
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
  </div>
   </div>
  );
};

export default TaskList;
