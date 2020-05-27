import React from 'react';
import { useTrail, animated,config } from 'react-spring'
import acontent1 from '../../asserts/pic/optacontent1.png';
import acontent2 from '../../asserts/pic/optacontent2.png';
import acontent3 from '../../asserts/pic/optacontent3.png';

export default function Q2selectionA(props) {

    
    const items = [
        {class: 'App-q2-optionA-content1',path:acontent1},
        {class: 'App-q2-optionA-content2',path:acontent2},
        {class: 'App-q2-optionA-content3',path:acontent3}
    ]
    
    const trail = useTrail(items.length,
        {   config:config.slow,
            delay: 800,
            width:'100%',
            opacity:1,
            from: {width:'0%',opacity:1} 
        })

    return (
        <>
        {trail.map(({width,opacity},index) =>(
            <div className={items[index].class} key={index} >
                <animated.img  rel="preload" src={items[index].path} style={{width,opacity}} alt='content'></animated.img>
            </div>
        ))}
        </>
    )
}








