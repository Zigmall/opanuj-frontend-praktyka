import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import GenderField from '../components/GenderField';
import NameField from '../components/NameField';
import SortBy from '../components/SortBy';
import useCharacterSearch from '../hooks/useCharacterSearch';
import sortCharacters from '../utils/sortCharacter';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const characters = useCharacterSearch(name, gender);
  const [sortOption, setSortOption] = useState('');
  const sortedCharacters = sortCharacters(characters, sortOption);

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
