import React from 'react';
import {animated,useTransition,config} from 'react-spring';

const items=["people"]

export default function Q1a(props) {

    const transitiona = useTransition(items,null, {
        config:config.molasses,
        delay:2000,
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
    })

    const divclass = props.divclass;
    const score = Number(props.score);
    const selectedopt = props.selectedopt;

    function a()
    {
        props.onSelection(score,selectedopt);
    }

    return transitiona.map(({ items, props, key }) =>
            <animated.div key={key} className={divclass} style={props} onClick={() =>a()}>

            </animated.div>)
}