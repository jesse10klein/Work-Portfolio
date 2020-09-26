import React from 'react'
import { animated, useSpring } from 'react-spring'
import '../style/card.css';

import background from '../images/code.PNG'
import github from '../images/github-icon.png'
import node from '../images/node-icon.png'
import react from '../images/react-icon.png'
import npm from '../images/npm-icon.png'
import python from '../images/python-icon.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 7}px,${y / 7}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${-y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${-x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7}px,${-y / 7}px,0)`
const trans5 = (x, y) => `translate3d(${x / 8}px,${-y / 8}px,0)`

const Card = () => {

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


  return (
    <div className="cardContainer" 
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      style={{backgroundImage: `url(${background})`}}>
      <animated.div className="cardImg card1" style={{ transform: props.xy.interpolate(trans1), backgroundImage: `url(${node})` }} />
      <animated.div className="cardImg card2" style={{ transform: props.xy.interpolate(trans2), backgroundImage: `url(${npm})` }} />
      <animated.div className="cardImg card3" style={{ transform: props.xy.interpolate(trans3), backgroundImage: `url(${github})` }} />
      <animated.div className="cardImg card4" style={{ transform: props.xy.interpolate(trans4), backgroundImage: `url(${python})` }} />
      <animated.div className="cardImg card5" style={{ transform: props.xy.interpolate(trans5), backgroundImage: `url(${react})` }} />
    </div>
  )
}

export default Card;