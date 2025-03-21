import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl mt-4 font-extrabold'>User: {userid}</h1>
        <img src="https://media.giphy.com/media/VphNm0tmdm9m6L4W90/giphy.gif?cid=ecf05e470lltgl6lt4epmz04nd41x8bj48ytgjtxndueq240&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" />
    </div>
  )
}

export default User