import React from 'react';
import { useTrail,animated,config } from 'react-spring';
import q4bcontent from '../../asserts/pic/q4bcontent.png';
import q4bpattern from '../../asserts/pic/q4bpattern.png';

const items = [
    {class:"App-q4-q4bcontent", path:q4bcontent},
    {class:"App-q4-q4bpattern", path:q4bpattern}
]

export default function Q4Bpattern (props) {
    
    const trail = useTrail(items.length,
        { config,
            height:'0%',
            opacity:1,
            from: {height:'100%',opacity:1} 
        })

    return (
        <>
        {trail.map(({height,opacity},index) =>(
            <div className={items[index].class} key={index}>
                <animated.div className="App-q4-q4bpattern-mask" style={{height,opacity}} alt='content'></animated.div>
                <img  rel="preload" src={items[index].path} style={{height,opacity}} alt='content'></img>
            </div>
        ))}
        </>
    )
} 