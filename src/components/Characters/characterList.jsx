import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Character } from './character';

export const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <Link to={`/detail/${character._id}`} key={character.name}>
      <li>
        <Character {...character} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
