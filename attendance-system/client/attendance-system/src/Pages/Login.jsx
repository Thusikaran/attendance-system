import React, { useState } from 'react'


const Login = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState("")

    const handleChangeUserName=(e)=>{
        setUserName(e.target.value)
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{
        window.alert(`Username : ${userName} and Password : ${password}`)
    }
  return (
    <div class="body">
    <div class="wrapper">
        <div class="form-box login"></div>
            <h2><center>Login</center></h2>
            <form >
                <div class="input-box">
                    <input value={userName} type="text" onChange={handleChangeUserName} required />

                    <label>Username</label>

                </div>
                <div class="input-box">
                    <input value={password} type="password" onChange={handleChangePassword} required />
                    <label>Password</label>
                    
                </div>
                <button class="btn" onClick={handleSubmit}>Login</button>
               
            </form>
    </div>

    </div>
  )
}

export default Login