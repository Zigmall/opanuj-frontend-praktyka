import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country, index) => (
        <li className="flex flex-col items-center" key={index}>
          <CountryCard country={country} />
        </li>
      ))}
    </ol>
  );
}