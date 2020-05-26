import React from 'react';
import {animated,useTransition,config} from 'react-spring';
import next from '../../asserts/pic/nextq.png';

const items = ["next"]

export default function NextButton(props) {

    const transitions = useTransition(items, null, {
        config: config.slow,
        delay: 2000,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
        enter: { opacity: 1, transform: 'translate3d(0,0,0)'}
    })
    
    const divclass = props.divclass;

    return (
        transitions.map(({item,props, key }) =>
            <animated.div key={key} className={divclass} style={props}>
                <img rel="preload" src={next} alt='netxt'></img>   
            </animated.div>
        )
    )
}