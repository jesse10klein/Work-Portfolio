import React from "react";

const About = ({set, props}) => {

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  return (
    <div className="pageContent" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
