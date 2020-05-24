import React from 'react';
import { useSpring, animated } from 'react-spring'

export default function Test() {

    
    const styles = useSpring({ form: {width:'0%'}, to: {width:'100%'}})

    return (
        <animated.div style={styles} className="Test" ></animated.div>
    )
}





