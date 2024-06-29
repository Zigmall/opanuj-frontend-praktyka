import { Country } from '../types/Country';

export function CountryCard({ country }: { country: Country }) {
  return (
    <>
      <h3>{country.name.common}</h3>
      <img src={country.flag.png} alt={country.name.common} />
    </>
  );
}
