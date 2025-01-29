import React from 'react'
import FooterContact from '../../api/FooterApi.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import logo from '/images/logo.png'
const Footer = () => {
  const FooterIcons= {
    MdPlace: <MdPlace/>,
    IoCallSharp: <IoCallSharp/>,
    TbMailPlus: <TbMailPlus/>


  }
  return (
    <footer className='mt-auto h-40 bg-[#202020] w-[100%] shadow-[0_10px_10px_-10px_rgba(33,35,38,0.5)]'>
      <div className="pt-4 h-20 max-w-[980px] m-auto grid grid-cols-3">
        {
          FooterContact.map((curData, index)=>{
            const {icon,title, details} = curData;
            return(
              <div className="flex gap-4 justify-center mt-4" key={index}>
                <div className="icon text-blue-600 text-5xl text-center">{FooterIcons[icon]}</div>
                <div className="flex flex-col gap-2">
                  <p>{title}</p>
                  <p>{details}</p>

                </div>
              </div>
            )
          })
        }
      </div>
      <div className="h-40 bg-[#202020] w-[100%] shadow-[0_10px_10px_-10px_rgba(33,35,38,0.5)]">
        <div className=" pt-4 h-0 max-w-[980px] m-auto">
          <div className="grid grid-cols-[0.5fr_1fr] items-center p-[0_3.2rem] h-40">
            <div className="flex items-center justify-center">
              <p>
                <NavLink  to="/" target='_blank'>
                <img className='h-16 hover:filter hover:brightness-50 ' src={logo} alt="" /></NavLink>
              </p>
            </div>
            <div >
              <ul className='flex justify-end gap-[3.2rem] text-[#fff]'>
                <li >
                  <NavLink className='text-[rgba(255,255,255,0.5)] hover:text-[#fff]' to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className='text-[rgba(255,255,255,0.5)] hover:text-[#fff]' to="/">Social</NavLink>
                </li>
                <li>
                  <NavLink className='text-[rgba(255,255,255,0.5)] hover:text-[#fff]' to="/">Source Code</NavLink>
                </li>
                <li>
                  <NavLink className='text-[rgba(255,255,255,0.5)] hover:text-[#fff]' to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer