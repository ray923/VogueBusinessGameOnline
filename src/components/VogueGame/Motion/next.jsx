import React from 'react';
import {animated,useTransition,config} from 'react-spring';
import next from '../../../asserts/pic/nextq.png';
import finish from '../../../asserts/pic/finish.png';

const items = ["next"]

export default function NextButton(props) {

    const transitions = useTransition(items, null, {
        config: config.slow,
        delay: 2000,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
        enter: { opacity: 1, transform: 'translate3d(0,0,0)'}
    })
    let imgpath = next;
    const divclass = props.divclass;
    if (divclass === "App-q5-circle-p") {
        imgpath = finish;
    }

    return (
        transitions.map(({item,props, key }) =>
            <animated.div key={key} className={divclass} style={props}>
                <img rel="preload" src={imgpath} alt='netxt'></img>   
            </animated.div>
        )
    )
}