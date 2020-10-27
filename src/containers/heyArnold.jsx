import React, { useState, useEffect } from 'react';
import { CharacterList } from '../components/Characters/characterList';
import { fetchAllCharacters, fetchCharacter } from '../services/fetch';
import { DetailsPage } from '../components/Details/detailsPage';

export const ArnoldCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
 
  return (
    <CharacterList characters={characters} />
  );
};

// eslint-disable-next-line react/prop-types
export const SpecificCharacter = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  // eslint-disable-next-line react/prop-types
  const id = match.params._id;

  useEffect(() => {
    fetchCharacter(id)
      .then(character => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h1>Loading...</h1>;
 
  return (
    <DetailsPage character={character} />
  );
};
