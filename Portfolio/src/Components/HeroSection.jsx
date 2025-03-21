import React from 'react'
import {Elements, Heading, ElementText} from './index'

const HeroSection = ({sectionData}) => {
  return (
    
        <div  className='h-[430px] flex items-center justify-between py-10 px-15 '>
          <Elements {...sectionData.elements}/>
          <ElementText {...sectionData.elementText}/>
          <Elements {...sectionData.secondElement}/>
          </div>
        
      
  )
}

export default HeroSection