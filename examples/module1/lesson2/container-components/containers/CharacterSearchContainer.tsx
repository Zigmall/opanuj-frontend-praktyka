import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import GenderField from '../components/GenderField';
import NameField from '../components/NameField';
import SortBy from '../components/SortBy';
import useCharacterSearch from '../hooks/useCharacterSearch';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');


  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <NameField name={name} setName={setName} />
        <GenderField gender={gender} setGender={setGender} />
        <SortBy sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
