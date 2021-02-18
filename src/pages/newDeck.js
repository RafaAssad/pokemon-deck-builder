import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cardsAPI, getPokeAPI } from '../services/cardsAPI';
import PokemonCard from '../components/PokemonCard';
import ReactAudioPlayer from 'react-audio-player';
import openingTheme from '../soundEffects/openingTheme.mp3';
import PokemonContext from '../contextAPI/Context';
// import SearchBar from '../components/SearchBar';

const HomePage = () => {
  // Context <.>.<.><.>.<.><.>.<.><.>.<.>

  const { addToDeck, addName, deckName, deckCards, saveDeck } = useContext(PokemonContext);

  // States <.>.<.><.>.<.><.>.<.><.>.<.>

  const [card, setCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Component <.>.<.><.>.<.><.>.<.><.>.<.>

  useEffect(async () => {
    setLoading(true);
    await cardsAPI().then((resp) => {
      setCard(Object.values(resp.cards));
    });
    setLoading(false);
  }, []);

  const filter = async () => {
    setLoading(true);
    await getPokeAPI(searchTerm).then((resp) => {
      setCard(Object.values(resp.cards));
    });
    setLoading(false);
  };

  const disableBtn = () => {
    if (deckCards.length < 24) return true;
    else return false;
  };

  return (
    <section>
      <ReactAudioPlayer src={openingTheme} autoPlay={false} volume={0.1} loop />
      <h1>Create Deck</h1>
      <div className="inp-btn">
        <input
          placeholder="Search Pokemon"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button onClick={() => filter()}>Search</button>
        <Link to="/">
          <button className="deck-btn">Go to Decks </button>
        </Link>
        <input type="text" placeholder="Deck Name" onChange={(e) => addName(e.target.value)} />
        <button type="text" disabled={disableBtn()} onClick={() => saveDeck(deckName, deckCards)}>
          Save Deck
        </button>
      </div>
      <h3>Your deck must have a minimum of 24 and a maximum of 60 cards: {deckCards.length}</h3>
      {loading && <div>Loading...</div>}
      <div className="deckGrid">
        {card
          .filter((card) => {
            if (searchTerm === '') {
              return card;
            } else if (card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return card;
            }
          })
          .map((card, idx) => (
            <div key={idx}>
              <PokemonCard key={card.id} {...card} onClick={() => addToDeck(card)} />
              <br />
              {/*  <button onClick={() => addToDeck(card)}>Add to deck</button> */}
            </div>
          ))}
      </div>
    </section>
  );
};

export default HomePage;
