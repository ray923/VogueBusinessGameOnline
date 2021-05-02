import React from 'react';
import { useSpring, animated,config } from 'react-spring'
import q4100perslash from '../../../asserts/pic/q4100perslash.png'
import q470perslash from '../../../asserts/pic/q470perslash.png'
import q410per from '../../../asserts/pic/q410per.png';
import q470per from '../../../asserts/pic/q470per.png';
import q4100per from '../../../asserts/pic/q4100per.png';


export default function Q4perslash(props) {
    
    const animate = useSpring({ 
        opacity:1,
        from:{opacity:0},
        config:config.molasses
    });

    return (
        <>
            <animated.img src={q4100per} alt='100percent' className="App-q4-100per" style={animate}></animated.img>
            <animated.img src={q470per} alt='70percent' className="App-q4-70per" style={animate}></animated.img>
            <animated.img src={q410per} alt='10percent' className="App-q4-10per" style={animate}></animated.img>
            <animated.img rel="preload" className="App-q4-100per-s" src={q4100perslash} style={animate} alt='slash'></animated.img>
            <animated.img rel="preload" className="App-q4-70per-s" src={q470perslash} style={animate} alt='slash'></animated.img>
        </>
    )
}








