import React from 'react';
import {animated,useTransition} from 'react-spring';

const items=["people"]

export default function Q1a(props) {

    const transitiona = useTransition(items,null, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
    })

    const divclass = props.divclass;
    const pclass = props.pclass;
    const score = Number(props.score);
    const selectedopt = props.selectedopt;
    const optcontent = props.optcontent;

    function a()
    {
        props.onSelection(score,selectedopt);
    }

    return transitiona.map(({ items, props, key }) =>
            <animated.div key={key} className={divclass} style={props} onClick={() =>a()}>
                <p className={pclass} >{optcontent}</p>
            </animated.div>)
}