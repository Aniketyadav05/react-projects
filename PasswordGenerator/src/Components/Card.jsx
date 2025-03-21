import React from 'react'

const Card = ({name,id,Price}) => {
    console.log(name, Price , id);
    
  return (
    <div className="flex flex-col rounded-xl w-48 p-4 text-white"
    style={{
      border: '0.88px solid',

      backdropFilter: 'saturate(180%) blur(14px)',
      background: ' #ffffff0d',
    }}
  >
    <div>
      <img
        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
        alt="nft-gif"
        width="400"
        height="400"
        className="rounded-xl"
      />
    </div>
    <div className="flex flex-col  rounded-b-xl py-4  text-white">
      <div className="flex justify-between">
        <h1 className="font-RubikBold ">{name}</h1>
        <h1 className="font-bold font-RubikBold">Price</h1>
      </div>
      <div className="flex  justify-between font-mono text-white">
        <p >{id}</p>
        <p>{Price}</p>
      </div>
    </div>
  </div>
  )
}

export default Card