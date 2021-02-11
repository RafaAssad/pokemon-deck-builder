import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import cardsAPI from '../services/cardsAPI';
import PokemonCard from '../components/PokemonCard';
import ReactAudioPlayer from 'react-audio-player';
import openingTheme from '../soundEffects/openingTheme.mp3';
import PokemonContext from '../contextAPI/Context';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  // Context <.>.<.><.>.<.><.>.<.><.>.<.>

  const { addToDeck } = useContext(PokemonContext);

  // States <.>.<.><.>.<.><.>.<.><.>.<.>

  const [card, setCard] = useState([]);
  const [filter, setFilter] = useState('');

  // Component <.>.<.><.>.<.><.>.<.><.>.<.>

  useEffect(() => {
    cardsAPI().then((resp) => {
      setCard(Object.values(resp.data));
    });
  }, []);

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <section>
      <ReactAudioPlayer src={openingTheme} autoPlay volume={0.1} loop />
      <h1>Create Deck</h1>
      <SearchBar placeHolder="Search" handleChange={handleChange} />
      <Link to="/decks">
        <button className="deck-btn">Go to Deck </button>
      </Link>
      <div className="deckGrid">
        {card.map((card, idx) => (
          <div key={idx}>
            <PokemonCard key={card.id} {...card} />
            <br />
            <button onClick={() => addToDeck(card)}>Add to deck</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
