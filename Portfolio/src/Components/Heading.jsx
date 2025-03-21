import React from 'react'

const Heading = ({text, className}) => {
  return (
    <div>
        <h1 className={` ${className}  font-[Canopee] bg-[#1C1C19] text-[#C4BCB3] `}>{text}</h1>
    </div>
  )
}

export default Heading