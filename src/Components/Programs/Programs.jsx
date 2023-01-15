import React from "react";
import Title from "../Title/Title";
import "./index.css";
import img1 from "../../assets/pexels-evgeny-tchebotarev-2235307.jpg";
import img2 from "../../assets/pexels-haugenzhays-zhang-1798631.jpg";
import img3 from "../../assets/pexels-francesco-ungaro-96420.jpg";
const Programs = () => {
  return (
    <div className="programs_container" id="services">
      <Title title="excurison programs" />
      <div className="program_container">
        <div className="pro_holder">
          <img src={img1} alt="walking road" />
          <h3>city walk</h3>
          <p>
            groups of 20-30 peoplewith one or more guides through the strets of
            the city
          </p>
          <button>learn more</button>
        </div>
        <div className="pro_holder">
          <img src={img3} alt="walking road" />
          <h3>city walk</h3>
          <p>
            groups of 20-30 peoplewith one or more guides through the strets of
            the city
          </p>
          <button>learn more</button>
        </div>
        <div className="pro_holder">
          <img src={img2} alt="walking road" />
          <h3>city walk</h3>
          <p>
            groups of 20-30 peoplewith one or more guides through the strets of
            the city
          </p>
          <button>learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
