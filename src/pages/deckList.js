import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PokemonContext from '../contextAPI/Context';
import BackDeck from '../components/BackCard';

const DeckList = () => {

  const {newDeck} = useContext(PokemonContext);

  const [filter, setFilter] = useState('');
  const handleChange = ({ target }) => {
    setFilter(target.value);
  };
  return (
    <section>
      <h1>Deck List</h1>
      <SearchBar placeHolder="Search deck" handleChange={handleChange}/>
      <Link to="/newdeck">
        <button type="button" onClick={() => newDeck()}>New Deck</button>
      </Link>
      <BackDeck />
    </section>
  );
};

export default DeckList;
