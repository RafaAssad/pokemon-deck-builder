import React, { useContext } from 'react';
import PokemonContext from '../contextAPI/Context';

const PokemonCard = ({ id, name, images }) => {

  return (
    <img
      src={images.small}
      alt={`${id}-${name}`}
      width={'80%'}
    />
  );
};

export default PokemonCard;
