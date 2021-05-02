import React from 'react';
import { useTrail, animated,config } from 'react-spring'
import acontent1 from '../../../asserts/pic/optacontent1.png';
import acontent1act from '../../../asserts/pic/optacontent1Active.png';
import acontent2 from '../../../asserts/pic/optacontent2.png';
import acontent2act from '../../../asserts/pic/optacontent2Active.png';
import acontent3 from '../../../asserts/pic/optacontent3.png';
import acontent3act from '../../../asserts/pic/optacontent3Active.png';

export default function Q2selectionA(props) {

    
    const items = [
        {class: 'App-q2-optionA-content1',path:acontent1,patha:acontent1act},
        {class: 'App-q2-optionA-content2',path:acontent2,patha:acontent2act},
        {class: 'App-q2-optionA-content3',path:acontent3,patha:acontent3act}
    ]
    
    const trail = useTrail(items.length,
        {   config:config.slow,
            width:'100%',
            opacity:1,
            from: {width:'0%',opacity:1} 
        })

    const selected = props.selected;
    
    return (
        <>
        {trail.map(({width,opacity},index) =>(
            <div className={items[index].class} key={index} >
                <animated.img  rel="preload" src={selected==="a"?items[index].patha:items[index].path} style={{width,opacity}} alt='content'></animated.img>
            </div>
        ))}
        </>
    )
}








