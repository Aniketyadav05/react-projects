import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/PostApi';
import Loader from '../Components/UI/Loader';
import CountryCard from '../Components/Layout/CountryCard';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setTimeout(() => {
        setCountries(res.data);
        setLoading(false);
      }, 2000); // Ensuring the loader is visible for at least 2 seconds
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <section className='m-[0_auto_8rem_auto] max-w-[1150px]'>
      <ul className='grid grid-cols-4 gap-[3.2rem]'>
        {countries.map((currCountry, index) => (
          <CountryCard country={currCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
