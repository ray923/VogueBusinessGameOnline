import React from 'react';
import {animated,useTransition} from 'react-spring';

const items = ["next"]

export default function Q3patternanti(props) {

    const transitions = useTransition(items, null, {
    from: { opacity: 0,transform: 'translate3d(0%,0%,0) rotate(0deg)'},
        enter: [
            { opacity: 1},
            { transform: 'translate3d(0%,-25%,0) rotate(35deg)'},
            { transform: 'translate3d(0%,0%,0) rotate(0deg)' },
        ],
    })
    
    const divclass = props.divclass;
    const imgsrc = props.imgsrc;

    return (
        transitions.map(({props, key }) =>
            <animated.div key={key} className={divclass} style={props}>
                <img rel="preload" src={imgsrc} alt='pattern'></img>   
            </animated.div>
        )
    )
}