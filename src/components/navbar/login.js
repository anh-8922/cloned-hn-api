import React from "react";
//import './login.css';


export default function Login() {
    return (
        
        <>
            <div>Login</div>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Log In</button>
            </form>
       
    
        
        </>
    )
}