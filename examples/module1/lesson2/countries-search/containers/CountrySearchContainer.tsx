import { useState } from 'react';
import { CountryList } from '../components/CountryList';
import TypeSelect from '../components/TypeSelect';
import QueryField from '../components/QueryField';
import SearchTitle from '../components/SearchTitle';
import SortSelect from '../components/SortSelect';
import { useCountrySearch } from '../hooks/useCountrySearch';
import { sortCountries } from '../utils/sortCountries';

function CountrySearchContainer() {
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('name');
  const countries = useCountrySearch(query, queryType);
  const [sortOption, setSortOption] = useState('');

  const sortedCountries = sortCountries(countries, sortOption);

  return (
    <>
      <div className="pt-24" />
      <SearchTitle />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <QueryField query={query} setQuery={setQuery} />
        <TypeSelect queryType={queryType} setQueryType={setQueryType} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="pt-12" />
      <CountryList countries={sortedCountries} />
      <div className="pt-16" />
    </>
  );
}

export default CountrySearchContainer;
