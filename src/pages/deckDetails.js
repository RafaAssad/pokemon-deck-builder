import React, { useContext } from 'react';
import PokemonContext from '../contextAPI/Context';
import PokemonCard from '../components/PokemonCard';

const Details = (props) => {
  // Context <.>.<.><.>.<.><.>.<.><.>.<.>

  const { decks } = useContext(PokemonContext);

  // Require id from url <.>.<.><.>.<.><.>.<.><.>.<.>

  let id = props.match.params.id;

  const currentDeck = decks.find((deck) => deck.deckId == id);

  // Reduce <.>.<.><.>.<.><.>.<.><.>.<.>
  // { pokemon } = card.pokemon <atributo>

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

  return (
    <div>
      <div className="teste-brd">
        <h1>Deck Details</h1>
      </div>
      <h2>{currentDeck.deckName}</h2>
      <div className="details">
        <label className="supertype">
          <div className="card-type">Pokemons: {count.p}</div>
          {count.pa.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
        <label className="supertype">
          <div className="card-type">Energys: {count.e}</div>
          {count.ea.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
        <label className="supertype">
          <div className="card-type">Trainers: {count.t}</div>
          {count.ta.map((card) => (
            <PokemonCard key={card.id} {...card} />
          ))}
        </label>
      </div>
    </div>
  );
};

export default Details;
