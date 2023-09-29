import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Register = ()=> {
    const [userData,setUserData]=useState({name : "",email : "", password : ""})

    const router = useNavigate()
    console.log(userData,"userData")
    const handleChange = (event) => {
        // console.log(event.target.name,event.target.value)
        setUserData({...userData,[event.target.name] : event.target.value})
    }

    const sendDataToBackend = (event) =>{
        // alert("sent")
        event.preventDefault()
        if(userData.name && userData.email && userData.password){
            if(userData.password.length >= 5){
                alert("registration successful")
                router("/")
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
            <form action="" onSubmit={sendDataToBackend}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={handleChange} id="" />
                <label htmlFor="">Email :</label>
                <input type="email" name="email" onChange={handleChange} id="" />
                <label htmlFor="">Password :</label>
                <input type="password" name="password" onChange={handleChange} id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register