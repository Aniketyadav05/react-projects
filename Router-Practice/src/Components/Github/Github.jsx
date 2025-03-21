import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const Data = useLoaderData();
    // const [Data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Aniketyadav05')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='flex justify-center items-center flex-col text-center m-4 bg-gray-400 text-white p-4 '>
        <img src={Data.avatar_url} alt="" />
        <h1 className='font-extrabold text-5xl text-cyan-600'>{Data.name}</h1>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Aniketyadav05");
    return response.json();
}