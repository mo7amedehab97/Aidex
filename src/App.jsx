import { useState } from "react";
import Advantages from "./Components/Advantages/Advantages";
import Banner from "./Components/Banner/Banner";
import ContactUs from "./Components/ContactUs/ContactUs";
import NavBar from "./Components/Header/NavBar";
import PopularPlaces from "./Components/PopularPlaces/PopularPlaces";
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
      <PopularPlaces />
      <ContactUs />
    </>
  );
}

export default App;
