import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const ThemeSwitch = () => {
    const [theme, setTheme] = UseLocalStorage('theme', "dark")
    function handleToggleTheme() {
        setTheme(theme ==='light'?'dark':'light')
    }
    return (
    <div  className={`${theme === 'light'?'bg-white text-black ':'bg-black text-white '} place-items-center font-extrabold h-40 p-10 ` } >
        <div>
            <p >HEllo world!!!</p>
            <button onClick={handleToggleTheme} className='btn'>Change the theme</button>
        </div>
    </div>
  )
}

export default ThemeSwitch