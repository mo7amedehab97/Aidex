import { useState } from "react";
import Advantages from "./Components/Advantages/Advantages";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Header/NavBar";
import Prices from "./Components/Prices/Prices";
import Programs from "./Components/Programs/Programs";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Advantages />
      <Programs />
      <Prices />
    </>
  );
}

export default App;
