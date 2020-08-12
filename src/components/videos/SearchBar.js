import React, { useState } from 'react'

const SearchBar = ({ onSearchTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("black pink");

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSearchTermSubmit(searchTerm)
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label className="label">Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar
