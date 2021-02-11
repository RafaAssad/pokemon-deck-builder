import React from 'react';

const PokemonCard = ({ id, name, images, onClick }) => {
  return <img src={images.small} alt={`${id}-${name}`} width={'80%'} onClick={onClick} />;
};

export default PokemonCard;
