import React from 'react'
import { Link } from 'react-router-dom'
const Elements = ({imgUrl, heading, span="",para, className,link}) => {
  return (
    <div className={`w-[30%] h-[100%] ${className}`}>
        <div className='h-[50%] w-[100%] overflow-hidden ' >
            <img className='h-[100%] w-[100%] object-cover transition-all ease-in-out duration-500 cursor-pointer hover:scale-[1.2]' src={imgUrl} alt="" />

        </div>
        <Link to={link} target='_blank'>
        <h4 className='text-[24px] mt-5 mb-[10px] font-[CondMedium] cursor-pointer'>{heading}<span className='bg-[#B43B12] ml-[10px] text-[#C4BCB3] font-[100] text-[18px] border-[5px] border-[#B43B12] p-1'>{span}</span></h4>
        </Link>
        <p className='text-[20px] font-[CondMedium] font-[100] text-[#656565]'>{para}</p>
    </div>
  )
}

export default Elements