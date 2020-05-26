import React from 'react';
import {animated,useTransition,config} from 'react-spring';
import q1p from '../../asserts/pic/q1p.png';

const items=["people"]
export default function Q1People() {

    const transitions = useTransition(items,null, {
        config:config.slow,
        delay: 1000,
        from: { transform: 'translate3d(100%,0,0)' },
        enter: { transform: 'translate3d(0,0,0)' },
    })
    
    return (
        transitions.map(({item,props, key }) => 
            <div className="App-q1-q1p" key={key} style={props}>
                <animated.img rel="preload" src={q1p} alt="q1p"style={props}></animated.img>
            </div>
        )        
    )
}