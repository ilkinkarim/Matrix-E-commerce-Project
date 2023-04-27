import React, { useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";
import { useState } from "react";
import Footer from "./components/Footer";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import { MainContext } from "./context";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Translation from "./Data.json"


function App() {
  const [theme] = useThemeHook();

  const [favourites, setFavourites] = useState((JSON.parse(localStorage.getItem("liked"))));


  const [language, setLanguage] = useState(localStorage.getItem("language") || "az");
  const [contentLang, setContentLang] = useState({});


  useEffect(() => {
    if (language == "az") {
      setContentLang(Translation.az)
      localStorage.setItem("language", language)
    } else if (language == "en") {
      setContentLang(Translation.en)
      localStorage.setItem("language", language)
    } else if (language == "ru") {
      setContentLang(Translation.ru)
      localStorage.setItem("language", language)
    }
  })


  const data = {
    favourites,
    setFavourites,
    contentLang,
    setContentLang,
    language,
    setLanguage
  }
  return (
    <MainContext.Provider value={data}>
      <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
        <Header />
        <Router>
          <Home path="/" />
          <ProductDetails path="product-details/:productId" />
          <Cart path="/cart" />
          <Wishlist path="/wishlist" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>
        <Footer />
      </main>
    </MainContext.Provider>
  );
}

export default App;
