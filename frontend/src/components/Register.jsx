import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import axios from "axios"
import toast from "react-hot-toast"
import api from "./Helpers/Axios.config"
const Register = ()=> {
    const [userData,setUserData]=useState({name : "",email : "", password : ""})

    const router = useNavigate()
    console.log(userData,"userData")
    const handleChange = (event) => {
        // console.log(event.target.name,event.target.value)
        setUserData({...userData,[event.target.name] : event.target.value})
    }

    const sendDataToBackend = async(event) =>{
        // alert("sent")
        event.preventDefault()
        if(userData.name && userData.email && userData.password){
            if(userData.password.length >= 5){
                try{
                // alert("registration successful")
                
                const response =await api.post("/auth/register",{userData})

                if(response.data.success){
                    toast.success("Registration successful")
                    setUserData({name:"",email:"",password:""})
                    router("/login")
                }
                else(
                    toast.error("Registration Failed")
                )
            }catch(error){ 
                console.log(error)
            }
            }
            else{
                alert("password must be atleast 5 digits ")
            }
        }
        else{
            alert("all fields are mandatory")
        }
    }
    return(
        <div>
            <form action="" onSubmit={sendDataToBackend} >
                <label htmlFor="">Name:</label>
                <input className="inputs" type="text" name="name" onChange={handleChange} id="" />
                <label htmlFor="">Email :</label>
                <input className="inputs" type="email" name="email" onChange={handleChange} id="" />
                <label htmlFor="">Password :</label>
                <input className="inputs" type="password" name="password" onChange={handleChange} id="" />
                <br />
                <input className="button" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register