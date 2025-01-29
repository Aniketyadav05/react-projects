import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndiData } from '../../api/PostApi';

const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);

    useEffect(() =>{
        startTransition(async () => {
            const res = await getCountryIndiData(params.id)
            setCountry(res.data);
        })
    }, [])
    console.log(params);
    
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails