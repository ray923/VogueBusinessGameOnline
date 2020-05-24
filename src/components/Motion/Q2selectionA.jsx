import React from 'react';
import { useSpring, animated } from 'react-spring'

export default function Q2selectionA(props) {

    
    const styles = useSpring({ from: {width:'0%'}, to: {width:'100%'}})

    const divclass = props.divclass
    const acontent = props.acontent

    return (
        <div className={divclass} >
            <animated.img  src={acontent} style={styles} alt='bcontent1'></animated.img>
        </div>
    )
}








