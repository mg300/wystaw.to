import React from "react";
import "./App.css";
import Foot from "./components/Footer";
import SearchPanel from "./components/Searchpanel";
import Contact from "./components/Contact";
import AuthSection from "./components/AuthComponents/AuthSection";
import AdvertisingBar from "./AdvertisingBar";
import TopBar from "./TopBar";
import Product from "./components/product";
import Categories from "./components/Categories";

function App() {
    const handleSearch = (searchTerm) => {};

<<<<<<< HEAD
    return (
=======
  return (
    <div>
      <div>
>>>>>>> 5418220de568cb9133798ab62615bcedaebb1b77
        <div>
            <div>
                <div>
                    <TopBar />
                    <Categories/>
                    <SearchPanel onSearch={handleSearch} />
                </div>
                <div>
                    <AdvertisingBar />
                </div>
                <div>
                    <AdvertisingBar />
                </div>
            </div>
            <div class="container">
                <Product source={require("./images/przyklad.jpg")} title="Dacia Logan" price={24099} address="Warszawa" />
                <Product source={require("./images/przyklad2.png")} title="Samsung używany" price={399} address="Katowice" />
                <Product source={require("./images/przyklad3.jpg")} title="Koparka LEGO" price={2500} address="Opole" />
                <Product source={require("./images/przyklad4.jpg")} title="Zegarek Omega" price={35800} address="Poznań" />
            </div>
            <Foot />
        </div>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    );
=======
>>>>>>> Stashed changes
        <div>
          <AdvertisingBar />
        </div>
        <div>
          <AdvertisingBar />
        </div>
      </div>
      <div class="container">
        <Product source={require("./images/przyklad.jpg")} title="Dacia Logan" price={24099} address="Warszawa" />
        <Product source={require("./images/przyklad2.png")} title="Samsung używany" price={399} address="Katowice" />
        <Product source={require("./images/przyklad3.jpg")} title="Koparka LEGO" price={2500} address="Opole" />
        <Product source={require("./images/przyklad4.jpg")} title="Zegarek Omega" price={35800} address="Poznań" />
      </div>
      <Foot />
    </div>
  );
>>>>>>> 5418220de568cb9133798ab62615bcedaebb1b77
}

export default App;