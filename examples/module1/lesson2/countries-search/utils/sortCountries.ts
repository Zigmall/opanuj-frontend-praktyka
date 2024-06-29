import { Country } from '../types/Country';

export function sortCountries(
  countries: Country[],
  sortOption: string
): Country[] {
  return [...countries].sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.name.common.localeCompare(b.name.common);
    } else if (sortOption === 'population') {
      return a.population - b.population;
    }
    return 0;
  });
}
