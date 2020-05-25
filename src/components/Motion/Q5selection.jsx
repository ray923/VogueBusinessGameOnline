import React from 'react'
import { useTrail, animated } from 'react-spring'
import q5a from '../../asserts/pic/q5a.png';
import q5b from '../../asserts/pic/q5b.png';

const items = [
    {divclass:'App-q5-q5optioinA', path:q5a,score:5,opt:"a"},
    {divclass:'App-q5-q5optioinB', path:q5b,score:10,opt:"b"}
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

    return (
        <>
            {trail.map(({ x, height, opacity }, index) => (
            <animated.div
                key={index}
                className={items[index].divclass}
                style={{opacity, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} onClick={() =>a(items[index].score,items[index].opt)}>
                    <img src={items[index].path} alt='q5a'></img>
            </animated.div>
            ))}
        </>
    )
}
