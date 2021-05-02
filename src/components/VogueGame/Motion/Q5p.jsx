import React from 'react';
import {animated,useSpring} from 'react-spring';
import q5p from '../../../asserts/pic/q5p.png';

// const items=["people"]

export default function Q5p() {

    // const transitions = useTransition(items, null, {
    // from: { transform: 'perspective(600px) rotate3d(0,1,0,-180deg)'},
    //     enter: [
    //         { transform: 'perspective(600px) rotate3d(0,0,0,0deg)' },
    //     ],
    // })
    const people = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 100,
        config: { mass: 5, tension: 2000, friction: 1000 }
    })

    return (
            <animated.div className="App-q5-q5p" style={people}>
                <img src={q5p} alt='q5p'></img>
            </animated.div>
    )
}