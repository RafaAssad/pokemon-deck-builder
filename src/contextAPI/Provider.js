import React, { useState } from 'react';
import PokemonContext from './Context';

function Provider({ children }) {
  // States <.>.<.><.>.<.><.>.<.><.>.<.>

  const [card, setCard] = useState([]);
  const [decks, setDecks] = useState([]);
  const [deckCards, setDeckCards] = useState([]);
  const [deckName, setDeckName] = useState('');

  // Functions <.>.<.><.>.<.><.>.<.><.>.<.>

  const addToDeck = (pokemon) => {
    console.log(pokemon);
    const filter = deckCards.filter(
      (item) => item.pokemon.name === pokemon.name,
    );

    if (filter.length === 4) {
      return alert('Maximun of 4 equals cards per deck')
    }

    if (deckCards.length >= 60) {
      return alert('Maximum cards per deck: 60');
    }
    setDeckCards((cards) => [...cards, { pokemon }]);
  };

  const addName = (name) => {
    setDeckName(name);
  };

  const newDeck = () => {
    setDeckName('');
    setDeckCards([]);
  };

  // Context <.>.<.><.>.<.><.>.<.><.>.<.>

  const context = {
    card,
    setCard,
    decks,
    setDecks,
    deckCards,
    setDeckCards,
    deckName,
    setDeckName,
    addToDeck,
    addName,
    newDeck,
  };

  return <PokemonContext.Provider value={context}>{children}</PokemonContext.Provider>;
}

export default Provider;
