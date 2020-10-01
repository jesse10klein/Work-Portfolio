import React, {useState, useEffect} from "react";
import { animated, useSprings } from "react-spring";

const words = ["node.js", "express.js", "react.js", "ajax", "bootstrap", "mongodb, sequelize, SQLite"];

const Home = ({set, props}) => {

  const [isToggled, setToggle] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [shouldChange, setShouldChange] = useState(true);

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  const [springs, setA] = useSprings(100, () => ({value: 0}));
 
  useEffect(() => {
    for (let i = 0; i < words[wordIndex].length; i++) {
      setA((i) => {
        return {
          opacity: isToggled ? 1 : 0,
          delay: i * 50
        }
      })
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(!isToggled);
      setShouldChange(!shouldChange);
      if (shouldChange) {
        if ((wordIndex + 1) === words.length) setWordIndex(0);
        else setWordIndex(wordIndex + 1);
        for (let i = 0; i < words[wordIndex].length; i++) {
          setA((i) => {
            return {
              opacity: isToggled ? 1 : 0,
              delay: i * 50
            }
          })
        }
      }
    }, 1500);
    return () => clearInterval(interval);
  });


  return (
    <div className="centerContent titlePage" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
    <h1>Welcome!</h1>
      <h2> My name is Jesse. I build websites using: </h2>
      <div id="tagline">
        {
          springs.map((props, index) => <animated.h1 className={(index%2) === 0 ? "animatedText odd" : "animatedText even"}
           key={index} style={props} >{words[wordIndex][index]}</animated.h1>)
        }
      </div>
     
    </div>
  );
};

export default Home;

