import React, { useContext } from 'react';
// import PokemonContext from '../contextAPI/Context';

const PokemonCard = ({ id, name, imageUrl, onClick }) => {

  return (
    <img
      className="imagem"
      src={imageUrl}
      alt={`${id}-${name}`}
      width={'80%'}
      name={name}
      onClick={onClick}
    />
  );
};

export default PokemonCard;
