import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PokemonContext from '../contextAPI/Context';
import BackCards from '../components/BackCard';

const DeckList = () => {
  const { newDeck } = useContext(PokemonContext);

  const [filter, setFilter] = useState('');
  const handleChange = ({ target }) => {
    setFilter(target.value);
  };
  return (
    <section>
      <div className="teste-brd">
        <h1>Deck List</h1>
      </div>
      <div className="inp-btn">
        <SearchBar placeHolder="Search deck" handleChange={handleChange} />
        <Link to="/newdeck">
          <button type="button" onClick={() => newDeck()}>
            New Deck
          </button>
        </Link>
      </div>
      <BackCards />
    </section>
  );
};

export default DeckList;
