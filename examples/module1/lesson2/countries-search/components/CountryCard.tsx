import { Country } from '../types/Country';

export function CountryCard({ country }: { country: Country }) {
  return country.flags.svg && (
    <>
      <h3>{country.name.common}</h3>
      <img src={country.flags.svg} alt={country.name.common} />
    </>
  );
}
