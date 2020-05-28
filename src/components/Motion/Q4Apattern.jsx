import React from 'react';
import { useTrail,animated,config } from 'react-spring';
import q4acontent from '../../asserts/pic/q4acontent.png';
import q4acontentact from '../../asserts/pic/q4acontentActive.png';
import q4apattern from '../../asserts/pic/q4apattern.png';

const items = [
    {class:"App-q4-q4acontent", path:q4acontent, patha:q4acontentact},
    {class:"App-q4-q4apattern", path:q4apattern, patha:q4apattern}
]

export default function Q4Apattern (props) {
    
    const trail = useTrail(items.length,
        { config,
            height:'0%',
            opacity:1,
            from: {height:'100%',opacity:1} 
        })

    const selected = props.selected;

    return (
        <>
        {trail.map(({height,opacity},index) =>(
            <div className={items[index].class} key={index}>
                <animated.div className="App-q4-q4apattern-mask" style={{height,opacity}} alt='content'></animated.div>
                <img  rel="preload" src={"a"===selected?items[index].patha:items[index].path} style={{height,opacity}} alt='content'></img>
            </div>
        ))}
        </>
    )
} 