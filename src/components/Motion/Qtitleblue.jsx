import React, {useState,useEffect} from 'react';
import {animated,useTransition,config} from 'react-spring';
import q1title from '../../asserts/pic/FashionM&A1.png';
import q2title from '../../asserts/pic/FashionM&A2.png';

const slides = [
    { id: 0, path: q1title}
]

export default function Qtitleblue() {

    const [index, set] = useState(0)
    const transitions = useTransition(slides, item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
      })
    
    return transitions.map(({ item, props, key }) => (
        <animated.img key={key} style={{ ...props}} src={item.path} alt="q1title"></animated.img>
    ))
}

