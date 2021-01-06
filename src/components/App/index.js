import React from "react";
import "./styles.css";
// COMPONENTS
import Title from "../Title";
import ParkImage from "../ParkInfo/ParkImage";
import Parks from "../ParkInfo/Parks";

// IMPORT DATA
import parkDataArr from "../parkData";
console.log("my array - ", parkDataArr);

export default function App() {

  const parkArr = parkDataArr.map((ele, index) => {
    return (
      <Parks 
        {...ele}
        key={index}
      />
    )
  });

  console.log("checking park array - ", parkArr[Object.keys(parkArr)[0]]);

  return (
    <div className="App">
      <main>
        <Title />

        <section className="items-container">
          <section id="items">
            {/* Parks Component Goes Here */}
            <ul>
                {parkArr}  
            </ul>
          </section>
          <section id="image">
            {/* ParkImage Component Goes Here */}
            <ParkImage url={parkDataArr[Object.keys(parkArr)[0]]} />
          </section>
        </section>
      </main>
    </div>
  );
}
