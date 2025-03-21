import React from 'react'
import { NavLink } from 'react-router-dom'
const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country
  return (
    <li className='max-w-[55rem] border-0 w-full mx-auto mt-12' >
        <div className='bg-box relative border-2 border-solid border-transparent bg-[linear-gradient(71deg,#080509,#1a171c,#080509)] bg-clip-padding rounded-[45px] p-[40px] '>
            <div className='flex items-center justify-center mb-4'>

            <img className='h-36 w-full' src={flags.svg} alt="" />
            </div>
            
            <div className=" font-extrabold text-[#fff] leading-10 tracking-[-0.02em] text-[28px] pb-2">
            <p>
              <span className='card-description'>Name:</span>
              {name.common.length >10 ?name.common.slice(0,10)+ "....": name.common }
            </p>
            <p>
              <span className='card-description'>Population:</span>
              {population.length >10 ? population.slice(0,10) + "...." : population}
            </p>
            <p>
              <span className='card-description'>Capital:</span>
              {capital[0]}
            </p>
            <p>
              <span className='card-description'>Region:</span>
              {region}
              {console.log(region)}
            </p>
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
              </NavLink>
            </div>
        </div>
    </li>
  )
}

export default CountryCard