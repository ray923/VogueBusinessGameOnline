import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import coverp from '../asserts/pic/cover.png';
import covertitle from '../asserts/pic/covertitle.png';
import covercontent from '../asserts/pic/covercontent.png';
import CoverLogo from './Motion/coverlogo';
import CoverTitle from './Motion/covertitle';
import {animated, config, useTrail,useTransition,useSpring } from 'react-spring';
import start from '../asserts/pic/start.png';

const items = [covertitle,covercontent]
const itemAs = [start]

export default function Cover() {    
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        from: { opacity: 0, x: 20, height: 0 },
    })
    const animate = useSpring({ 
        opacity:1,
        from:{opacity:0},
        config:config.molasses
    });
    const transitions = useTransition(itemAs, null, {
        from: { opacity: 0,transform: 'perspective(600px) rotateX(0deg)'},
        enter: [
          { opacity: 1},
          { transform: 'perspective(600px) rotateX(180deg)'},
          { transform: 'perspective(600px) rotateX(0deg)' },
        ],
      })
    
    return (
        <div className="App">
            <CoverLogo/>
            <CoverTitle/>

            <div className="trails-main App-Cover-circle-b" onClick={() => set(state => !state)}>
                <div>
                    {trail.map(({ x, ...rest }, index) => (
                    <animated.div
                        key={index} 
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.img src={items[index]} className={"trails-text App-Cover-circle-b-" + index}></animated.img>
                    </animated.div>
                    ))}
                </div>
                <div className="cover-slash"></div>
                </div>
            <Link to={'/q1'}>
                {transitions.map(({ item,props, key }) =>
                    <animated.div key={key} className="App-Cover-circle-p" style={props}>
                    <img src={item} alt='start'></img>
                    </animated.div>)
                }
            </Link>
            <div className="App-Cover-P">
                <animated.img src={coverp} alt="coverps" style={animate}></animated.img>
            </div>
        </div>            
    );
}
