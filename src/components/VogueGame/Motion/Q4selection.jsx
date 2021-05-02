import React from 'react';
import { useSpring,animated } from 'react-spring';


export default function Q4selection (props) {
    
    const divclass = props.divclass;
    const imgpath = props.imgpath;

    const styles = useSpring({from: {opacity:0},to: {opacity:1}})

    return (
        <animated.div className={divclass} style={styles}>
            <img src={imgpath} alt="q4opt"></img>
        </animated.div>
    )
} 