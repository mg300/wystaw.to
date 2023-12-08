import React from "react";
import "./App.css";
import Foot from "./Footer";
import SearchPanel from "./Searchpanel";
import Contact from "./components/Contact";
import AuthSection from "./components/AuthComponents/AuthSection";

function App() {
  const handleSearch = (searchTerm) => {};

  return (
    <div>
      <Foot />
      <div>
        <SearchPanel onSearch={handleSearch} />
      </div>
      <Contact></Contact>
      <AuthSection></AuthSection>
    </div>
  );
}

export default App;
