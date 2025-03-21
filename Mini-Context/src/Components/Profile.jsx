import { useContext } from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user){
        return (
            <div className="flex justify-center my-4">
                <div className="font-extrabold  text-lg flex flex-row gap-2 text-cyan-300">Login krle</div>
            </div>
        )
    }
  return (
    <div className="flex justify-center my-4
    ">
        <div className="font-extrabold  text-lg flex flex-row gap-2">Welcome 
        <h1 className="text-cyan-300">{user.username}</h1></div>
    </div>
  )
}

export default Profile