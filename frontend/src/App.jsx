import React from 'react';
import "./App.css";
import Foot from "./Footer";
import SearchPanel from './Searchpanel';

function App() {
  const handleSearch = (searchTerm) => {

 
  };

  return (
    <div>
      <Foot/>
      <div>
        <SearchPanel onSearch={handleSearch} /> 
      </div>
    </div>
  );
}

export default App;
