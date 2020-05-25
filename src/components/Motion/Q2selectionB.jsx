import React from 'react';
import { useTrail, animated,config } from 'react-spring'
import bcontent1 from '../../asserts/pic/optbcontent1.png';
import bcontent2 from '../../asserts/pic/optbcontent2.png';
import bcontent3 from '../../asserts/pic/optbcontent3.png';

export default function Q2selectionB(props) {

    
    const items = [
        {class: 'App-q2-optionB-content1',path:bcontent1},
        {class: 'App-q2-optionB-content2',path:bcontent2},
        {class: 'App-q2-optionB-content3',path:bcontent3}
    ]
    
    const trail = useTrail(items.length,
        { config,
            width:'100%',
            opacity:1,
            from: {width:'0%',opacity:0} 
        })

    return (
        <>
        {trail.map(({width,opacity},index) =>(
            <div className={items[index].class} key={index}>
                <animated.img  rel="preload" src={items[index].path} style={{width,opacity}} alt='content'></animated.img>
            </div>
        ))}
        </>
    )
}








