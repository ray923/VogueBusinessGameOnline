import React from 'react'
import { useTrail, animated } from 'react-spring'
import q5a from '../../asserts/pic/q5a.png';
import q5aact from '../../asserts/pic/q5aActive.png';
import q5b from '../../asserts/pic/q5b.png';
import q5bact from '../../asserts/pic/q5bActive.png';

const items = [
    {divclass:'App-q5-q5optioinA', path:q5a, patha:q5aact,score:5,opt:"a"},
    {divclass:'App-q5-q5optioinB', path:q5b, patha:q5bact,score:10,opt:"b"}
]
const config = { mass: 5, tension: 2000, friction: 200 }

export default function Q5selection(props) {
    const trail = useTrail(items.length, {
        config,
        x: 0,
        opacity:1,
        from: { opacity: 0, x: 100},
    })

    function a(score,selectedopt)
    {
        props.onChoose(score,selectedopt);
    }

    const selected = props.selected;

    return (
        <>
            {trail.map(({ x, height, opacity }, index) => (
            <animated.div
                key={index}
                className={items[index].divclass}
                style={{opacity, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} onClick={() =>a(items[index].score,items[index].opt)}>
                    <img src={items[index].opt === selected ? items[index].patha : items[index].path} alt='q5a'></img>
            </animated.div>
            ))}
        </>
    )
}
