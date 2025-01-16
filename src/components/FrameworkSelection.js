import React from "react";
import { frameworks } from "../constants/frameworks";

const FrameworkSelection = () => {
  return (
    <section>
      <h2>Select a Framework</h2>
      <div>
        {frameworks.map((framework, index) => (
          <div key={index}>
            <h3>{framework.name}</h3>
            <p>{framework.description}</p>
            <button>Launch</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameworkSelection;
