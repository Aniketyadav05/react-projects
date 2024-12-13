import React, {useState,useEffect} from 'react'

const Generator = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('')
  
    function randomColor(length){
      return Math.floor(Math.random()*length)
    }
    function handleCreateHex() {
      const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
      let hexColor = '#'
  
      for(let i =0; i<=5;i++){
        hexColor+= hex[randomColor(hex.length)]
      }
      setColor(hexColor)
      
      
      
    }
    function handleCreateRGB(){
      const r = randomColor(256)
      const g = randomColor(256)
      const b = randomColor(256)
      setColor(`rgb(${r},${g},${b})`)
      
      
    }
  
    useEffect(()=>{
      if(typeOfColor === 'rgb') handleCreateRGB
      else handleCreateHex
    },[typeOfColor])
  
    return (
      <div className='flex items-center justify-center h-[100vh] w-[100vw] ' style={{backgroundColor:color}}>
      <div className='flex-row space-x-4'>
        <button onClick={() => setTypeOfColor('hex')} className='btn font-extrabold'>Create Hex color</button>
        <button onClick={()=> setTypeOfColor('rgb')} className='btn font-extrabold'>Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ?handleCreateHex : handleCreateRGB} className='btn font-extrabold'>Generate Random Color</button>
        
      <div className='justify-self-center w-40  mt-40  border-4 border-black rounded-md py-10  text-center font-extrabold '>
        <h2 className='mb-4 font-extrabold text-2xl' >{typeOfColor === 'rgb'? "RGB COLOR" : "HEX COLOR"}</h2>
        <h2>{color}</h2>
      </div>
      </div>
      </div>
    )
  }
  


export default Generator