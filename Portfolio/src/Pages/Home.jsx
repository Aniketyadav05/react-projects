import React from 'react'
import {Upcoming,About, Heading, Email,Stamp,FlowingMenu,HeroSection} from '../Components/index'
import { heroSectionsData } from '../Data/heroSectionData';
import {menuData} from '../Data/menuData'
const Home = () => {

  return (
    <div className='overflow-x-hidden'>
      <div>

      <HeroSection sectionData={heroSectionsData[0]}/>
      <Heading text="ANIKET" className="leading-[580px] tracking-[-25px] w-[96%] ml-[2%] text-[700px]"/>
      </div>
      <About></About>
      <div className='page3 h-[50vh] w-[100%] bg-[#C4BCB3] px-[30px] relative '>
        <Heading text="Website" className="w-fit text-[410px] leading-[390px]"/>
        <Stamp/>
        </div>
        <Upcoming></Upcoming>
<div style={{ height: '600px', position: 'relative' }} className='py-[2px] font-[Canopee]'>
          <FlowingMenu items={menuData} />
</div>

<div className='bg-[#C4BCB3]'>


<HeroSection sectionData={heroSectionsData[1]}/>      
    <Email/>
          </div>
          
      
      </div>
        
    
  )
}

export default Home