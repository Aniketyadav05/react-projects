import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const HeroSecttion = () => {
  return (
    <main className='lg:mb-[400px] mb-[480px]'>
      <div className="p-[2.2rem] m-[9rem_auto] h-40 max-w-[980px] grid grid-cols-2 gap-[6.4rem] ">
        <div className="lg:-order-last md:order-1 ">
          <h1 className='text-[clamp(5.2rem,6vw,4.241rem)] font-extrabold leading-[1.15] tracking-[-1px]  '>
          Travel. Explore. Slay One country at a time! 🌎🔥
          </h1>
          <p className='m-[3.2rem_0]'>
          Explore the world, your way! 🌎✨ Swipe, search, and sort through countries to uncover their hidden gems history, culture, and jaw-dropping beauty. Your global adventure starts here!
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight/>
          </button>
        </div>
        <div className="flex items-center justify-center "><img className='w-[100%]  md:w-[80%] md:order-last' src="/images/Earth.png" alt="DUNIYA KA GIF" /> 
          
        </div>
      </div>
    </main>
  )
}

export default HeroSecttion