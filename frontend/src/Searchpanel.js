import React, { useState } from 'react';
import './searchpanel.css'; 

const SearchPanel = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Wyszukaj..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
};

export default SearchPanel;
