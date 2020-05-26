import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import coverp from '../asserts/pic/cover.png';
import covertitle from '../asserts/pic/covertitle.png';
import covercontent from '../asserts/pic/covercontent.png';
import CoverLogo from './Motion/coverlogo';
import CoverTitle from './Motion/covertitle';
import {animated, useTrail,useTransition,useSpring,config} from 'react-spring';
import start from '../asserts/pic/start.png';

const itemAs = [start]

export default function Cover() {    

    const people = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 1700,
        config: { mass: 5, tension: 2000, friction: 1000 }
    })

    const startstyle = useSpring({
        from: { opacity: 1, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 1400,
        config: config.slow
    })
    const circleblue = useSpring({
        from: { transform: 'scale(0)'},
        to: { transform: 'scale(1)'},
        delay: 1000,
        config: { mass: 1, tension: 100, friction: 30 }
    })

    const wordstyle = useSpring({
        from: { height:'0rem', opacity:0},
        to: { height:'1.324rem',opacity:1},
        delay: 1700,
        config: { mass: 1, tension: 100, friction: 30 }
    })
    
    return (
        <>
        
        <div className="App">
            <CoverLogo/>
            <CoverTitle/>
            <animated.div className="App-Cover-circle-b" style={circleblue}>
            <div className="App-Cover-circle-bopacity"></div>
            <div>
                <img alt="content" rel="preload" src={covertitle} className="App-Cover-circle-b-0"></img>
                <animated.img style={wordstyle} alt="content" rel="preload" src={covercontent} className="App-Cover-circle-b-1"></animated.img>
            </div>
            <div className="cover-slash"></div>
            <Link to={'/q1'}>
                    <animated.div className="App-Cover-circle-p" style={startstyle}>
                        <img rel="preload" src={start} alt='start'></img>
                    </animated.div>
                
            </Link>
            </animated.div>
            <animated.div className="App-Cover-P" style={people}>
                <img rel="preload" src={coverp} alt="coverps"></img>
            </animated.div> 
        </div>
        </>          
    );
}
