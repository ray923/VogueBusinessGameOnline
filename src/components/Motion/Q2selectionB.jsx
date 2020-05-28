import React from 'react';
import { useTrail, animated,config } from 'react-spring'
import bcontent1 from '../../asserts/pic/optbcontent1.png';
import bcontent1act from '../../asserts/pic/optbcontent1Active.png';
import bcontent2 from '../../asserts/pic/optbcontent2.png';
import bcontent2act from '../../asserts/pic/optbcontent2Active.png';
import bcontent3 from '../../asserts/pic/optbcontent3.png';
import bcontent3act from '../../asserts/pic/optbcontent3Active.png';



export default function Q2selectionB(props) {

    
    const items = [
        {class: 'App-q2-optionB-content1',path:bcontent1,patha:bcontent1act},
        {class: 'App-q2-optionB-content2',path:bcontent2,patha:bcontent2act},
        {class: 'App-q2-optionB-content3',path:bcontent3,patha:bcontent3act}
    ]
    
    const trail = useTrail(items.length,
        {   config:config.slow,
            delay: 300,
            width:'100%',
            opacity:1,
            from: {width:'0%',opacity:1} 
        })

    const selected = props.selected;

    return (
        <>
        {trail.map(({width,opacity},index) =>(
            <div className={items[index].class} key={index}>
                <animated.img  rel="preload" src={selected==="b"?items[index].patha:items[index].path} style={{width,opacity}} alt='content'></animated.img>
            </div>
        ))}
        </>
    )
}








