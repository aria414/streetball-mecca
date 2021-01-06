//Park component inside ParkInfo > Parks > Park folder
import React from "react";
import "./styles.css";

const Park = (props) => {
  return (
    <>
      <span className="parkName">{props.name}</span>
      <span className="rating" style={{ borderColor: props.color }}>
        {props.overall}
      </span>
    </>
  );
};

export default Park;
