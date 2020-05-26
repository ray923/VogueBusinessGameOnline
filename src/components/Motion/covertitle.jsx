
import React from 'react';
import coverf from '../../asserts/pic/FashionM&A.png';
import { useSpring, animated, config } from 'react-spring';

function CoverTitle() {

    const animate = useSpring({ 
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        from: { opacity: 0, transform: 'translate3d(0,0,0)' },
        config:config.slow
    });
    
    return (
        <animated.div style={animate} className="App-cover-logo-f">
            <img rel="preload" src={coverf} alt="altcoverlogo"></img>
        </animated.div>
     )
   }
   
   export default CoverTitle;