import React from "react";
import "./index.css";
import Title from "../Title/Title";

const Prices = () => {
  return (
    <div className="prices_container">
      <Title title="tour prices" />
      <div className="outer_holder">
        <div className="inner_holder">
          <div>
            <span>tour for one person</span>
            <span>30$</span>
          </div>
          <div>
            <span>tour for group of no more than 5 people</span>
            <span>90$</span>
          </div>
          <div>
            <span>thematic tour</span>
            <span>50$</span>
          </div>
          <div>
            <span>thematic tour with night walk</span>
            <span>70$</span>
          </div>
        </div>
        <div className="inner_holder">
          <div>
            <span>study tour per student</span>
            <span>15$</span>
          </div>
          <div>
            <span>study trip for a group of pupils up to 20</span>
            <span>250$</span>
          </div>
          <div>
            <span>a city walk for a group up to 10 students</span>
            <span>170$</span>
          </div>
          <div>
            <span>thematic tour for a groups up to 10 </span>
            <span>440$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
