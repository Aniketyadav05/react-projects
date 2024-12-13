import React from 'react'

const Suggestions = ({data, handleClick}) => {
  return (
    <ul>
        {
            data && data.length ? 
            data.map((item,index) =><li onClick={handleClick} className='border-2 font-extrabold text-l p-1 m-2 cursor-pointer' key={index}>{item}</li>)
            : null
        }
    </ul>
  )
}

export default Suggestions