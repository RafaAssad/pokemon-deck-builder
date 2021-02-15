import React, { useContext } from 'react';
// import PokemonContext from '../contextAPI/Context';

const PokemonCard = ({ id, name, images, onClick }) => {

  return (
    <img
      src={images.small}
      alt={`${id}-${name}`}
      width={'80%'}
      name={name}
      onClick={onClick}
    />
  );
};

export default PokemonCard;
