import React from 'react'
import countryData from '../api/CountryData.json'
const About = () => {
  return (
   <section className='m-[0_auto_9rem_auto] max-w-[980px]'>
      <h2 className='text-center p-0 mb-10 mt-10 text-[40px] text-[#fff] font-extrabold leading-[60px]'>Here are the Interesting Facts
        <br />
        we're Proud Of
      </h2>

      <div className='grid lg:grid-cols-3 grid-cols-1 gap-[3.2rem]'>
        {
          countryData.map((country)=>{
            const{id, countryName,capital, population, interestingFact } = country
              return(
                <div className='max-w-[55rem] border-0 w-full mx-auto' key={id}>
          <div className='bg-box relative border-2 border-solid border-transparent bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] bg-clip-padding rounded-[45px] p-[40px] '>
            <p className='font-extrabold text-[#fff] leading-10 tracking-[-0.02em] text-[28px] pb-2'>{countryName}</p>
            <p>
              <span className='card-description'>Capital:</span>
              {capital}
            </p>
            <p>
              <span className='card-description'>Population:</span>
              {population}
            </p>
            <p>
              <span className='card-description'>InterestingFact:</span>
              {interestingFact}
            </p>
          </div>
        </div>
              )
          })
        }
        
      </div>
   </section>
  )
}

export default About