import React from 'react';

const SearchBar = ({ placeHolder, handleChange }) => {
  return <input type="search" placeholder={placeHolder} onChange={handleChange} />;
};

export default SearchBar;
