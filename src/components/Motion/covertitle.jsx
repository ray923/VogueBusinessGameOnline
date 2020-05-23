
import React from 'react';
import coverf from '../../asserts/pic/FashionM&A.png';
import { useSpring, animated, config } from 'react-spring';

function CoverTitle() {

    const animate = useSpring({ 
        opacity:1,
        from:{opacity:0},
        config:config.molasses
    });
    
    return (
        <animated.div style={animate} className="App-cover-logo-f">
            <img src={coverf} alt="altcoverlogo"></img>
        </animated.div>
     )
   }
   
   export default CoverTitle;