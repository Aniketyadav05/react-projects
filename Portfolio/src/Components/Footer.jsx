import React from 'react'

import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='w-full bg-[#C4BCB3] font-[CondMedium] text-2xl px-10 py-10  flex flex-row justify-between items-center'>
        
            <div className='flex flex-row space-x-5'>

            <h1>ANIKET</h1>
            
            <h2>LEGAL</h2>
            </div>
            <div className='space-x-5'>
                <Link target='_blank'to='https://x.com/AniketYadav05_'>X </Link>
                <Link target='_blank'to='https://www.linkedin.com/in/aniketyadav05/'>LinkedIn</Link>
                <Link target='_blank'to='https://github.com/Aniketyadav05'>Github</Link>
                
            </div>
        
    </footer>
  )
}

export default Footer