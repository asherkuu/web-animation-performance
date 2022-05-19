import React, { useState } from "react";
import Position from "./Position";
import Transform from "./Transform";

const Animation = () => {
  const [tab, setTab] = useState(0);

  const handleClickTab = (tabValue) => {
    setTab(tabValue);
  };

  return (
    <div>
      <section>
        <div onClick={() => handleClickTab(0)}>
          <p>Position</p>
        </div>
        <div onClick={() => handleClickTab(1)}>
          <p>Tranform</p>
        </div>
      </section>

      <section>{tab === 0 ? <Position /> : <Transform />}</section>
    </div>
  );
};

export default Animation;
