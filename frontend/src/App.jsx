import React from "react";
import "./App.css";
import Foot from "./components/Footer";
import SearchPanel from "./components/Searchpanel";
import AdvertisingBar from "./AdvertisingBar";
import TopBar from "./TopBar";
import Product from "./components/product";
import Categories from "./components/Categories";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthSection from "./components/AuthComponents/AuthSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div>
          <div>
            <TopBar />
            <Categories />
            <SearchPanel />
          </div>
          <AdvertisingBar />
        </div>
        <div class="container">
          <Product source={require("./images/przyklad.jpg")} title="Dacia Logan" price={24099} address="Warszawa" />
          <Product source={require("./images/przyklad2.png")} title="Samsung używany" price={399} address="Katowice" />
          <Product source={require("./images/przyklad3.jpg")} title="Koparka LEGO" price={2500} address="Opole" />
          <Product source={require("./images/przyklad4.jpg")} title="Zegarek Omega" price={35800} address="Poznań" />
          <Product source={require("./images/przyklad.jpg")} title="Dacia Logan" price={24099} address="Warszawa" />
          <Product source={require("./images/przyklad2.png")} title="Samsung używany" price={399} address="Katowice" />
          <Product source={require("./images/przyklad3.jpg")} title="Koparka LEGO" price={2500} address="Opole" />
          <Product source={require("./images/przyklad4.jpg")} title="Zegarek Omega" price={35800} address="Poznań" />
        </div>
        <Foot />
      </div>
    ),
  },
  {
    path: "/auth",
    element: (
      <>
        <TopBar />
        <AuthSection />
        <Foot />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
