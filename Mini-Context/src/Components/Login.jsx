import { useState, useContext } from "react"
import UserContext from "../context/UserContext"
const Login = () => {
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)



    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,Password})
    }

  return (
    <>
    <h2 className="font-extrabold ml-56 my-4">LOGIN</h2>
    <input
    className="border-2 mr-4" 
    type="text"
    value={username}
    onChange={(e) =>{
        setUsername(e.target.value);
    }} 
    placeholder="username" />
    <input
    className="border-2 mr-4"
    type="text"
    value={Password}
    onChange={(e) =>{
        setPassword(e.target.value);
    }} placeholder="password" />
    <button
    className="button"
    onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login