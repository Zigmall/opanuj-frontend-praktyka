import { Character } from '../types/Character';

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </>
  );
};

export default CharacterCard;
