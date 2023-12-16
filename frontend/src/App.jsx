import React from "react";
import "./App.css";
import Foot from "./components/Footer";
import SearchPanel from "./components/Searchpanel";
import Contact from "./components/Contact";
import AuthSection from "./components/AuthComponents/AuthSection";
import AdvertisingBar from "./AdvertisingBar";
import TopBar from "./TopBar";
import Product from "./components/product";

function App() {
  const handleSearch = (searchTerm) => {};

  return (
    <div>
      <Foot />
      <div>
        <div>
          <TopBar />
          <SearchPanel onSearch={handleSearch} />
        </div>
        <Contact></Contact>
        <AuthSection></AuthSection>
        <div>
          <AdvertisingBar />
        </div>
        <div>
          <AdvertisingBar />
        </div>
        <Foot />
      </div>
      <div class="container">
        <Product source={require("./images/przyklad.jpg")} title="Dacia Logan" price={24099} address="Warszawa" />
        <Product source={require("./images/przyklad2.png")} title="Samsung używany" price={399} address="Katowice" />
        <Product source={require("./images/przyklad3.jpg")} title="Koparka LEGO" price={2500} address="Opole" />
        <Product source={require("./images/przyklad4.jpg")} title="Zegarek Omega" price={35800} address="Poznań" />
      </div>
      <Contact></Contact>
      <AuthSection></AuthSection>
    </div>
  );
}

export default App;
