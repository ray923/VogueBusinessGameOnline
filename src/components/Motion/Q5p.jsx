import React from 'react';
import {animated,useTransition} from 'react-spring';
import q5p from '../../asserts/pic/q5p.png';

const items=["people"]

export default function Q5p() {

    const transitions = useTransition(items, null, {
    from: { transform: 'perspective(600px) rotate3d(0,1,0,-180deg)'},
        enter: [
            { transform: 'perspective(600px) rotate3d(0,0,0,0deg)' },
        ],
    })

    return transitions.map(({ items, props, key }) =>
            <animated.div key={key} className="App-q5-q5p" style={props}>
                <img src={q5p} alt='q5p'></img>
            </animated.div>)
}