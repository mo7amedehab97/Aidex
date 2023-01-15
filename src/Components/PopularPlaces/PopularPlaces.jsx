import React from "react";
import Title from "../Title/Title";
import "./index.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const PopularPlaces = () => {
  return (
    <div className="popular_container">
      <Title title="photographs of popular places" />
      <div className="popular_images_holder">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;
