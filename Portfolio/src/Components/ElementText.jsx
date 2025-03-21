import React from 'react'

const ElementText = ({he2, h31,h32,h33, span, className,he2Size}) => {
  return (
    <div className={`${className} w-[30%] h-[100%] border-r-2   border-[#575757] text-center px-[60px] pb-5 font-[Light]`}>
        <h2 className={`font-[Canopee]   ${he2Size}`}>{he2}</h2>
        <h3 className=' font-bold text-[28px] mt-2 mb-5 text-[#2f2f2f]'>{h31}<br />{h32}<br />{h33}</h3>
        <h6 className='font-extrabold text-l'>Tip! <span className='font-light text-'>{span}</span></h6>
    </div>
  )
}

export default ElementText