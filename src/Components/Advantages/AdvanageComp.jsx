import React from "react";

const AdvanageComp = ({ data }) => {
  return (
    <div className="copmonent_container" id="about">
      <div className="advantage_icon">
        <img src={data?.icon} alt={data.title} width={40} />
      </div>
      <h3>{data?.title}</h3>
      <p>{data?.details}</p>
    </div>
  );
};

export default AdvanageComp;
