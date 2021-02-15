import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../contextAPI/Context';
import back from '../images/back-card.png';

const BackCard = () => {
  const { decks, setDecks } = useContext(PokemonContext);
  console.log(decks);

  const removeDeck = (deckId) => {
    const filterDecks = decks.filter(deck => deck.deckId !== deckId);
    setDecks(filterDecks);
  };

  return (
    <div>
      {decks.map((deck) => {
        return (
          <div>
            <Link to={`/deckdetails/${deck.deckId}`}>
              <img src={back} width="20%" />
              <h2>{deck.deckName}</h2>
            </Link>
            <button onClick={() => removeDeck(deck.deckId)}>Remove Deck</button>
          </div>
        );
      })}
    </div>
  );
};

export default BackCard;
