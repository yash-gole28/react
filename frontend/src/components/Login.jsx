import { useNavigate } from "react-router-dom"
// import React from "react";
function Login(){
    const goTo = useNavigate();
    // function toHomepage(){
    //     goTo("/")
    // }
return(
   <div>
   <h1>welcom to login page</h1>
   <button className="button" onClick={()=>{goTo("/")}}>Homepage</button>
    </div>
)
}


export default Login