import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'


function Homepage() {
    const locate = useNavigate()
   function navigate(){
    locate("/Login")
   }

   function toProfile(){
    locate("/Profile")
   }

   function counter(){
    locate("/Counter")
   }

   function Effect1(){
    locate("/Effect1")
   }
   function Effect2(){
    locate("/Effect2")
   }

   function Effect3(){
    locate("/Effect3")
   }
   
   function Effect4(){
    locate("/Effect4")
   }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button className="button" onClick={navigate}>LoginPage</button>
            <button className="button" onClick={toProfile}>Profile</button>
            <button className="button" onClick={counter}>Counter</button><br />
            <button className="button" onClick={Effect1}>Effect1</button>
            <button className="button" onClick={Effect2}>Effect2</button>
            <button className="button" onClick={Effect3}>Effect3</button>
            <button className="button" onClick={Effect4}>Effect4</button>

            <button className="button-2" onClick={()=>{toast.success("yeahhh")}}>Toast yeahh</button>
            <button className="button-2" onClick={()=>{toast.error("Nahhh")}}>Toast Nahhh</button>
        </div>
    )
}
export default Homepage