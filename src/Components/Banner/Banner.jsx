import React from "react";
import "./index.css";
import Cover from "../../assets/cover.jpg";
const Banner = () => {
  return (
    <div className="banner_container">
      <span className="bg_cover"></span>
      <img src={Cover} alt="banner image " />
      <div className="banner_details">
        <h1>travelling around japan</h1>
        <p>
          excursions to all the most popular destinations. with full immersion
          in the country's culture
        </p>
        <button>reservation</button>
      </div>
    </div>
  );
};

export default Banner;
