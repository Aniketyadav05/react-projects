import {React, useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'


const auth = getAuth(app);
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = () => {
        signInWithEmailAndPassword(auth, email,password).then(value => alert("success"))
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
        <button onClick={Login}>LOGIN</button>
    </div>
  )
}

export default Login