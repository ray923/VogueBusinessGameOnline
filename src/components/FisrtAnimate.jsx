import React, { useState } from 'react'
import { useTransition,useTrail, animated } from 'react-spring'
import start from '../asserts/pic/start.png'

const itemAs = [start]

function Test() {
 
  const transitions = useTransition(itemAs, null, {
    from: { opacity: 0,transform: 'perspective(600px) rotateX(0deg)'},
    enter: [
      { opacity: 1},
      { transform: 'perspective(600px) rotateX(180deg)'},
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
  })
    
    return transitions.map(({ item,props, key }) =>
    <animated.div key={key} className="App-Cover-circle-p" style={props}>
      <img src={item} alt='start'></img>
    </animated.div>
    )
}

export default Test