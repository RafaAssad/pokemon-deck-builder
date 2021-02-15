import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../contextAPI/Context';

const BackCard = () => {
  const { decks } = useContext(PokemonContext);
  
  return (
    <div>
      <Link to={`/deckdetails/${decks.deckId}`}>
        <h2>{decks.deckName}</h2>
      </Link>
    </div>
  );
};

export default BackCard;
