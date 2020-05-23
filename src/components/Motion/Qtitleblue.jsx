import React, {useState, useEffect} from 'react';
import {animated,useTransition,config} from 'react-spring';
import q1title from '../../asserts/pic/FashionM&A1.png';
import q2title from '../../asserts/pic/FashionM&A2.png';
import q3title from '../../asserts/pic/FashionM&A3.png';
import q4title from '../../asserts/pic/FashionM&A4.png';
import q5title from '../../asserts/pic/FashionM&A5.png';

const slides = [
    { id: 0, path: q1title},
    { id: 1, path: q2title},
    { id: 2, path: q3title},
    { id: 3, path: q4title},
    { id: 4, path: q5title},
]

export default function Qtitleblue() {

    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
      from: { opacity: 0},
      enter: { opacity: 1 },
      leave:{opacity:0},
      config: config.molasses,
    })

    let times = 0;
    useEffect(() => void setInterval(() => 
        {
            set(state => (state + 1) %5);
            times += 1;
            if(times ===5){
                clearInterval();
            }
        }
        , 2000), []
        
    )
    return transitions.map(({ item, props, key }) => (
        <animated.img key={key} style={{ ...props}} src={item.path} alt="q1title"></animated.img>
    ))
}
