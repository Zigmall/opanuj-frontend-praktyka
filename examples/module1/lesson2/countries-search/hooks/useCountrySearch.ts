import { useEffect, useState } from 'react';
import { Country } from '../types/Country';

export function useCountrySearch(query: string, type: string) {
  const [countries, setCounties] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/${type}/${query}`
        );
        if (res.status === 200) {
          console.log('<< . 200 . >>', res);
          const data = await res.json();
          setCounties(data || []);
        } else if (res.status === 404) {
          console.log('<< . 404 . >>', res);
          setCounties([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (query) {
      fetchCountries();
    }
  }, [query, type]);

  return countries;
}
