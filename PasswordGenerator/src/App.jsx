import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("")
  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length+1)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(()=>{
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*+=[]{}`~<>?/|";
    for(let i = 1;i<=length;i++){
      let char = Math.floor( Math.random() *str.length +1);
      pass += str.charAt(char)
      setPassword(pass)

    }
  },[length, numAllowed, charAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <div >
      
    <div className='w-full max-w-md mx-auto shadow-md rounded-4xl px-4 py-1 mt-10 text-white font-bold border-4'>
      <h1 className='text-2xl text-center mt-10 mb-2 text-white'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 font-bold bg-blue-200'>
        <input type="text" 
          value={Password}
          className='outline-none w-full py-3 px-3 text-black '
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button className='btn'
          onClick={copyPassword}>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={30}
          value={length}
          className='slider' 
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        
        <label className="container">
          <input  type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=>{
            setnumAllowed((prev)=>!prev)}}/>
          <div className="checkmark"></div>
        </label>
        <label >Numbers</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
        
        <label className="container">
          <input  type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setcharAllowed((prev)=>!prev)}}/>
          <div className="checkmark"></div>
        </label>
        <label >Characters</label>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default App