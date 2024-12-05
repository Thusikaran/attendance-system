import React, { useState } from 'react'
import { checkLogin } from '../service/service'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState("")
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(""); 
      const navigator = useNavigate();

      const validateForm = () => {
        let formValid = true;
        const errorsCopy = {};
    
        if (!username.trim()) {
          errorsCopy.username = "Username is required";
          formValid = false;
        }
    
        if (!password.trim()) {
          errorsCopy.password = "Password is required";
          formValid = false;
        }
    
        setErrors(errorsCopy);
        return formValid;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate the form before making API call
        if (!validateForm()) {
          return;
        }
    
        const result = await checkLogin(username, password);
        if (result.success) {
          navigator("/home");
        } else {
          setError(result.message); // Show error message if login fails
        }
      };

  return (
    <div class="body">
    <div class="wrapper">
        <div class="form-box login"></div>
            <h2><center>Login</center></h2>
               <center>{error && <p style={{ color: "red" ,backgroundColor:"pink" ,padding:"14px",marginTop:"15px",borderRadius:'10px'}}>{error}</p>}</center>
                <div class="input-box">
                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                    {errors.username && <small style={{ color: "red" }}>{errors.username}</small>}
                    <label>Username</label>

                </div>
                <div class="input-box">
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
                    <label>Password</label>
                    
                </div>
                <button class="btn" onClick={handleSubmit}>Login</button>
  
    </div>

    </div>
  )
}

export default Login