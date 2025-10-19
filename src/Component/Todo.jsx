
import React, { useState } from 'react'

const Todo = () => {
    const[tasks,settask]=useState([])
    const[Text,setText]=useState('')
    const addtask=()=>{
        if(Text.trim() === "") return;
        settask([...tasks,Text])
        setText("")
    }
    const Deletetask=(deletetask)=>{
      const newtask=tasks.filter((task,index)=> index !==deletetask)
      settask(newtask)
    }

  return (
    <div className=' mt-[4rem] '>
      <input
       type="text"
     onChange={(e)=> setText(e.target.value)}
       className=' border-2 border-orange-500'
       
       /> <br /> <br /> <br />
       <button onClick={addtask} className=' bg-blue-500 text-white py-3 px-10'>Add</button>

      {
        tasks.map((task,i)=>(
            <dev className='mt-[3rem] ml-[0] mx-auto '  key={i}>
            
              <p className=' bg-orange-300 py-6 w-[400px] pl-[20px]  rounded-md mt-[2rem] '>{task}{''} 
                 <button className='ml-[200px]  absolute right-[130px] ' onClick={()=>Deletetask(i)}>❌</button>
                 </p>
              
          
            </dev>
        ))
      }
    </div>
  )
}

export default Todo
