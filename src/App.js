import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Counter } from "./components/Counter/Counter";
import { Trusted } from "./components/Trusted/Trusted";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemListContainer />
      <Trusted />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
