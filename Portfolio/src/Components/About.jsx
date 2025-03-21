import React from 'react'
import { first2 ,third2} from '../assets'
const About = () => {
  return (
    <div className='page2 h-[150vh] w-[100%] bg-[#C4BCB3] flex items-center justify-between py-[90px] px-[30px] '>
        <div className='h-[100%] w-[35%]  pr-[60px] border-r-[2px] border-[#4b4b4b] '>
          <h2 className='text-[92px] font-[Canopee] text-center leading-[0.8]'>Interactive <br /><span className=' text-center ml-4 text-[159px]'>Artist!</span></h2>
          <img className='h-[50%] w-[100%] object-cover' src={third2} alt="" />
          <div className='pt-6 flex flex-row  '>
          <span className="inline-block bg-black text-[#C4BCB3] text-[120px] font-bold px-3 py-1 leading-none font-[Canopee]">
          A
          </span>
          <div className='ml-2  text-[30px] font-[Light] leading-[32px]'>
          <span className="">
          s a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences 
      
          </span>
          </div>
          </div>
          
          <div className='  pt-2 font-[Light] '>
         <span className='text-[30px] leading-8'> through motion, typography, and <br /> creative coding for companies and agencies around the world.</span>
          </div>
        </div>
        <div className='h-[100%] pl-10  '>
          <img className='h-[60%] w-[100vw]' src={first2} alt="" />
          <h1 className='text-[100px] leading-24 font-[CondMedium] mt-4'>INTERACTIVE DESIGNER<br /> कल्पनाशील (CREATIVE) विकासकर्ता (DEVELOPER)  <br /> BASED IN RAJASTAHN,IN</h1>
        </div>
      </div>
  )
}

export default About