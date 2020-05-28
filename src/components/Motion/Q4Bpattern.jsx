import React from 'react';
import { useTrail,animated,config } from 'react-spring';
import q4bcontent from '../../asserts/pic/q4bcontent.png';
import q4bcontentact from '../../asserts/pic/q4bcontentActive.png';
import q4bpattern from '../../asserts/pic/q4bpattern.png';

const items = [
    {class:"App-q4-q4bcontent", path:q4bcontent, patha:q4bcontentact},
    {class:"App-q4-q4bpattern", path:q4bpattern, patha:q4bpattern}
]

export default function Q4Bpattern (props) {
    
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
                <animated.div className="App-q4-q4bpattern-mask" style={{height,opacity}} alt='content'></animated.div>
                <img  rel="preload" src={"b"===selected?items[index].patha:items[index].path} style={{height,opacity}} alt='content'></img>
            </div>
        ))}
        </>
    )
} 