import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <div className='text-white flex items-center justify-center mt-40 border-2'>App</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App