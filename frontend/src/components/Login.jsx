import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import api from "./Helpers/Axios.config"
import { AuthContext } from "./context/AuthContext"

function Login(){
    const [userData,setUserData]=useState({email : "", password : ""})

    const router = useNavigate()

    const {Login , state} = useContext(AuthContext)
    
    const handleChange = (event) => {
        
        setUserData({...userData,[event.target.name] : event.target.value})
    }

    const sendDataToBackend = async(event) =>{
        // alert("sent")
        event.preventDefault()
        if( userData.email && userData.password){
            if(userData.password.length >= 5){
                try{
                // alert("registration successful")
                
                const response =await api.post("/auth/login",{userData})

                if(response.data.success){
                    localStorage.setItem("my-token", JSON.stringify(response.data.token))
                    Login(response.data.user)
                    console.log(response.data)
                    toast.success("Login successful")
                    setUserData({email:"",password:""})
                    router("/")
                }
                else(
                    // console.log("login failed")
                    toast.error("Login Failed")
                )
               
            }catch(error){ 
                console.log(error)
                toast.error("Login Failed")
            }
            }
            else{
                alert("password must be atleast 5 digits ")
            }
        }
        else{
            toast.error("all fields are mandatory")
        }
    }
    return(
        <div>
            <form action="" onSubmit={sendDataToBackend}>
                <label  htmlFor="">Email :</label>
                <input className="inputs" type="email" name="email" onChange={handleChange} id="" />
                <label htmlFor="">Password :</label>
                <input className="inputs" type="password" name="password" onChange={handleChange} id="" />
                <br />
                <input className="button" type="submit" value="login" />
            </form>
        </div>
    )
}


export default Login