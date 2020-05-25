import React from 'react';
import {animated,useTransition} from 'react-spring';
import next from '../../asserts/pic/nextq.png';

const items = ["next"]

export default function NextButton(props) {

    const transitions = useTransition(items, null, {
    from: { opacity: 0,transform: 'perspective(600px) rotateX(0deg)'},
        enter: [
            { opacity: 1},
            { transform: 'perspective(600px) rotateX(360deg)'},
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
    })
    
    const divclass = props.divclass;

    return (
        transitions.map(({props, key }) =>
            <animated.div key={key} className={divclass} style={props}>
                <img rel="preload" src={next} alt='netxt'></img>   
            </animated.div>
        )
    )
}