//Parks Component inside ParkInfo >Parks
import React from "react";
import "./styles.css";
import Park from "./Park";

const Parks = (props) => {
  return (
    <li style={{ background: "white" }}>
      <Park 
      name={props.name} 
      overall={props.overall} 
      color={props.color}
      />
    </li>
  );
};

export default Parks;
