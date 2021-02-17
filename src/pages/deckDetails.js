import React, { useContext } from 'react';
import PokemonContext from '../contextAPI/Context';
import PokemonCard from '../components/PokemonCard';

const Details = (props) => {
  const { decks } = useContext(PokemonContext);

  let id = props.deck.match.params.id;
  const currentDeck = decks.find((deck) => deck.deckId == id);


  return (
    <div>
      <h1>Deck Details</h1>
      {currentDeck.map((deck) => {
        return (
          <div>
            <h2>{deck.deckName}</h2>
            {console.log(deck.deckCards)}
            {/* <PokemonCard key={deck.id} {...deck}/> */}
          </div>
        );
      })}
    </div>
  );
};

export default Details;
