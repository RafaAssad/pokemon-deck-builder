import React, { useContext } from 'react';
import PokemonContext from '../contextAPI/Context';
import BackCard from './BackCard';

const AllDecks = ({ choosen }) => {
  const { decks } = useContext(PokemonContext);

  const choosenDecks = decks.filter((deck) =>
    deck.deckName.toLowerCase().includes(choosen.toLowerCase())
  );

  const findChoosenDecks = () => {
    if (choosenDecks.length === 0) {
      return (
        <div>
          <h1>No decks</h1>
        </div>
      );
    } else {
      return choosenDecks.map((deck) => <BackCard deck={deck} key={deck.deckId} />);
    }
  };
  return findChoosenDecks;
};

export default AllDecks;
