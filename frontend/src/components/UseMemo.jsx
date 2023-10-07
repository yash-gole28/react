import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [ counter , setCounter] = useState(0)
    const [ toDo , setToDo] = useState([])

    function AddToDo(){
        setToDo([...toDo , "New ToDo"])
    }

    const lenghtyCalculation = useMemo(()=>calculation(counter),[counter])
  return (
    <div>
       Calculation - {lenghtyCalculation}
      <div>counter = {counter}</div>
      <button onClick={()=>{setCounter((value)=>value+1)}} className='col-change-btn' >Increase Counter</button>
        <button onClick={AddToDo} className='col-change-btn'>Add ToDo</button>
        {toDo.map((toDos)=>(
            <div>{toDos}</div>
        ))}

    </div>
  )
}

const calculation = (counter)=>{
    for(var i =0;i<1000000000;i++){
        counter += 1 
        console.log('calculating')
    }
    return counter
}
export default UseMemo
