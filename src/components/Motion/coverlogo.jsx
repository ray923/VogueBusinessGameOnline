
import React from 'react';
import coverlogo from '../../asserts/pic/logo.png';
import { useSpring, animated, config } from 'react-spring';

function CoverLogo() {

    const animate = useSpring({ 
        opacity:1,
        from:{opacity:0},
        config:config.molasses
    });
    
    return (
        <animated.div style={animate} className="App-cover-logo">
            <img src={coverlogo} alt="altcoverlogo"></img>
        </animated.div>
     )
   }
   
   export default CoverLogo;