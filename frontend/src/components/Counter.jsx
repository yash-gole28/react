import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Counter = ()=>{
    const navigate = useNavigate()

    // const msg = "hello there"
    const [counter , setCounter] = useState(0)

 
return(
    <div>
        
        <h1>counter - {counter}</h1>

        <button className="button-2"onClick={()=>{setCounter((value)=>value+1)}}>add 1</button>
        <button className="button-2"onClick={()=>{setCounter((value)=>value-1)}} >subtract 1</button><br />
        <button className="button"onClick={()=>navigate("/")}>Homepage</button>
    </div>
)
}

export default Counter