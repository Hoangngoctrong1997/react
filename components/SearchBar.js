import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Tìm kiếm"
      onChange={e => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
