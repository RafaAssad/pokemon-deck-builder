import React, { useContext } from 'react';
import PokemonContext from '../contextAPI/Context';
import PokemonCard from '../components/PokemonCard';

const Details = (props) => {
  const { decks } = useContext(PokemonContext);

  let id = props.match.params.id;

  const currentDeck = decks.find((deck) => deck.deckId == id);

  const count = currentDeck.deckCards.reduce(
    (acc, { pokemon }) => {
      if (pokemon.supertype === 'Pokémon') {
        acc.p += 1;
        acc.pa.push(pokemon);
      }
      if (pokemon.supertype === 'Energy') {
        acc.e += 1;
        acc.ea.push(pokemon);
      }
      if (pokemon.supertype === 'Trainer') {
        acc.t += 1;
        acc.ta.push(pokemon);
      }
      return acc;
    },
    { p: 0, e: 0, t: 0, pa: [], ea: [], ta: [] }
  );

  console.log(count);
  return (
    <div>
      <h1>Deck Details</h1>
      <div className="back-card">
        <h2>{currentDeck.deckName}</h2>
        <label>
          Pokemons: {count.p}
          {count.pa.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
        <label>
          Energys: {count.e}
          {count.ea.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
        <label>
          Trainers: {count.t}
          {count.ta.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
      </div>
    </div>
  );
};

export default Details;
