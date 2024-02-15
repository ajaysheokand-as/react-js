import React, {useState} from 'react'

export const Login = () => {
    
    const [userData, setUserData] = useState({});
    
    const handleChange = (e) =>{
        console.log(e.target.value);
        setUserData({...userData,[e.target.name]: e.target.value})
    }
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("Login",userData);
        if((userData.userName === "Admin" && userData.password === 1234)){
            
        }else{
            alert("User Name is Admin and Password is 1234")
        }
    }
  return (
    <div>
        <form>
            <input type="text" name="userName" onChange={handleChange} placeholder="User Name" /><br/><br/>
            <input type="password" name="password" onChange={handleChange} placeholder="Password" /><br/><br/>
            <button onClick={(e)=>{handleLogin(e)}}>Login</button>
        </form>
    </div>
  )
}
