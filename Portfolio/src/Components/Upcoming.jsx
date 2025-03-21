import React from 'react'
import {Elements, ElementText,Btn} from "./index"
const Upcoming = () => {
  return (
    <div className=' bg-[#C4BCB3] flex flex-row justify-between items-center w-[100%] h-[130vh] pt-12 px-4 pb-6'>
      <div className='left flex flex-row flex-wrap w-[65%] h-[100%]  py-[20px]  bg-[#C4BCB3] border-r-2'>
          <div className='flex flex-row'>
          <ElementText
      he2="UPCOMING NEXT!"
      h31="A FEATURED SELECTION"
      h32="OF THE LATEST WORK"
      h33="OF THE LAST YEARS"
      span="DRAG SIDEWAYS TO NAVIGATE"
      he2Size="text-[40px] leading-12"
      className="mr-10 w-[40%] "/>
      
      <Elements 
          
          imgUrl="https://uploads-ssl.webflow.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?" 
          heading="AVRO | CO" 
          span="NEW"
          para="kch to hai " />

          </div>
          <div className='h-[68vh] w-[100%] bg-[#C4BCB3] pt-4'>
          <img className='h-[100%] w-[100%] object-cover px-[20px] ' src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/605c679f33f67d3dd00b04b4_avatar-3.jpeg" alt="" />
</div>     
             </div>
      <div className="right w-[35%] h-[100%] pl-8 ">
          <div>
          <h1 className='text-[83px] text-center leading-21 font-[CondMedium]'>THINK,CREATE<br /><span className='text-[135px] tracking-[2px]'>DELIVER</span></h1>
          <div className="pt-6 flex flex-row items-start">
  <span className="inline-block bg-black text-[#C4BCB3] text-[120px] font-bold px-3 py-0 leading-none font-[Canopee]">
    A
  </span>
  <div className="ml-4 font-[Light]">
    <p className="text-4xl leading-[42px]">
    strong project is crafted through deep collaboration. I design, develop, and deliver 
    </p>
  </div>
  
</div>

         <div className='flex flex-col font-[Light] pt-2'>
         <p className='text-4xl pb-4 '>
         websites that bring impactful results and जीत (success).
  </p>
         <span className="text-4xl tracking-tight mb-4">
         Like a craftsman, I love starting from scratch and shaping a remarkable product that makes your brand shine, beginning with a clear visual strategy that transforms the client’s कल्पना (vision) into reality.
      
          </span>
          <Btn />
         </div>
          </div>
                   </div>
      </div>
  )
}

export default Upcoming