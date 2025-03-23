import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("hogya"))
    }
  return (
    <div>
        <label >Email</label>
        <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        required
        placeholder='enter ur email' />
        <label >password</label>
        <input 
        onChange={(e) => setPassword(e.target.value)} 
        type="password"
        required 
        placeholder='enter ur password' />
        <button onClick={createUser}>SIgnup</button>
    </div>
  )
}

export default SignUp