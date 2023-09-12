import { useNavigate } from "react-router-dom"



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

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button className="button" onClick={navigate}>LoginPage</button>
            <button className="button" onClick={toProfile}>Profile</button>
            <button className="button" onClick={counter}>Counter</button>
        </div>
    )
}
export default Homepage