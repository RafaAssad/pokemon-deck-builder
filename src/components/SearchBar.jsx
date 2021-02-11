import React from 'react';

const SearchBar = ({ placeHolder, handleChange }) => {
  return <input className="search" type="search" placeholder={placeHolder} onChange={handleChange} />;
};

export default SearchBar;
