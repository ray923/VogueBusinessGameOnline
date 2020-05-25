import React from 'react';
import {animated,useTransition} from 'react-spring';
import q1p from '../../asserts/pic/q1p.png';

const items=["people"]
export default function Q1People() {

    const transitions = useTransition(items,null, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    })
    
    return (
        transitions.map(({props, key }) => 
            <animated.div className="App-q1-q1p" key={key} style={props}>
                <img rel="preload" src={q1p} alt="q1p" ></img>
            </animated.div>
        )        
    )
}