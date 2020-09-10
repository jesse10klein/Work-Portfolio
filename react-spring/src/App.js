import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated, useSpring } from "react-spring";
import { Home, Projects, Contact, Navbah, Card } from "./components";


const App = () => {


  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0%)' }
  });

  return (
    <>
      <Navbah />
      <Card props={props} set={set}/>
      <main className="container-fluid">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" 
              render={() => <Home  props={props} set={set} />} />
              <Route exact path="/projects" 
              render={() => <Projects props={props} set={set}/>} />
              <Route exact path="/contact" 
              render={() => <Contact props={props} set={set} />} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
