import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const DetailedCharacter = ({ _id, name, image }) => (
  <Link to={'/'} key={name}>
    <li key={_id}>
      <h1>{name}</h1>
      <img src={image} alt={name}></img>
      <p>The Hey Arnold API does not have any additional details</p>
    </li>
  </Link>
);

DetailedCharacter.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
