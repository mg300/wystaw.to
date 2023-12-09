import React from "react";
import "./App.css";
import Foot from "./Footer";
import SearchPanel from "./Searchpanel";
import Contact from "./components/Contact";
import AuthSection from "./components/AuthComponents/AuthSection";
import AdvertisingBar from './AdvertisingBar';
import TopBar from './TopBar';

function App() {
  const handleSearch = (searchTerm) => {};

  return (
      <div>
          <div>
              <TopBar/>
              <SearchPanel onSearch={handleSearch}/>
          </div>
          <Contact></Contact>
          <AuthSection></AuthSection>
          <div>
              <AdvertisingBar/>

          </div>
          <div>

              <AdvertisingBar/>


          </div>
          <Foot/>
      </div>
  );

}


export default App;
