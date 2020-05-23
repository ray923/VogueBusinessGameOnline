import React from 'react';
import {animated,useTransition} from 'react-spring';
import next from '../../asserts/pic/nextq.png';

const items = ["next"]

export default function NextButton() {

    const transitions = useTransition(items, null, {
    from: { opacity: 0,transform: 'perspective(600px) rotateX(0deg)'},
        enter: [
            { opacity: 1},
            { transform: 'perspective(600px) rotateX(360deg)'},
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
    })
    
    return (
        transitions.map(({props, key }) =>
            <animated.div key={key} className="App-q1-circle-p" style={props}>
                <img src={next} alt='netxt'></img>   
            </animated.div>
        )
    )
}