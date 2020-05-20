import React from'react';
import { useSpring, animated } from 'react-spring'
import background from '../asserts/pic/cover.png';

function FisrtEffect() {

 const props1 = useSpring({ 
     opacity:1,
     from:{opacity:0}
  });
  //const props2 = useSpring({ number: 1, from: { number: 0 } })
  //const props3= useSpring({ vh: 100, from: { vh: 0 } })
  return (
    <>
      <animated.span style={props1}>abc</animated.span>
      
      <animated.img src={background} style={props1} alt="background" />
    </>
  )
}


export default FisrtEffect;