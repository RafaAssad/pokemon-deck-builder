import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../contextAPI/Context';

const BackCard = ({ deck }) => {
  const { decks } = useContext(PokemonContext);

  return (
    <div>
      <Link to={`/deckdetails/${deck}`}> {/* criar o deck id */}
        {/* <h2>{deck.deckName}</h2> */}
      </Link>
    </div>
  );
};

export default BackCard;
