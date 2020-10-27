import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ _id, name, image }) => (
  <li key={_id}>
    <h1>{name}</h1>
    <img src={image} alt={name}></img>
  </li>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
