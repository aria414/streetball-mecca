//ParkImage component
import React from "react";
import "./styles.css";

const ParkImage = (props) => {
  console.log("ParkImage url - ", props.url.url);
  return (
    <section
      id="park-info-container"
      style={{
        backgroundImage: `url(${props.url.url})`
      }}
    >
      <div id="title">Brooklyn Bridge Park (Pier 2)</div>
    </section>
  );
};

export default ParkImage;
