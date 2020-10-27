import React from 'react';
import PropTypes from 'prop-types';
import { DetailedCharacter } from './detailedCharacter';

export const DetailsPage = ({ character }) => {

  return (
    <ul>
      <DetailedCharacter {...character} />
    </ul>
  );
};

DetailsPage.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
