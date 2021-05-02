import React from 'react';
import './VogueGame.css';
import { Link } from 'react-router-dom';
import coverp from '../../asserts/pic/cover.png';
import covertitle from '../../asserts/pic/covertitle.png';
import covercontent from '../../asserts/pic/covercontent.png';
import CoverLogo from './Motion/coverlogo';
import CoverTitle from './Motion/covertitle';
import {animated,useSpring,config} from 'react-spring';
import start from '../../asserts/pic/start.png';

import q1p from '../../asserts/pic/q1p.png';
import acontent1 from '../../asserts/pic/optacontent1.png';
import acontent2 from '../../asserts/pic/optacontent2.png';
import acontent3 from '../../asserts/pic/optacontent3.png';
import bcontent1 from '../../asserts/pic/optbcontent1.png';
import bcontent2 from '../../asserts/pic/optbcontent2.png';
import bcontent3 from '../../asserts/pic/optbcontent3.png';
import acontent1act from '../../asserts/pic/optacontent1Active.png';
import acontent2act from '../../asserts/pic/optacontent2Active.png';
import acontent3act from '../../asserts/pic/optacontent3Active.png';
import bcontent1act from '../../asserts/pic/optbcontent1Active.png';
import bcontent2act from '../../asserts/pic/optbcontent2Active.png';
import bcontent3act from '../../asserts/pic/optbcontent3Active.png';

export default function Cover() {    

    const people = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 1500,
        config: { mass: 5, tension: 2000, friction: 1000 }
    })

    const startstyle = useSpring({
        from: { opacity: 1, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        delay: 1900,
        config: config.slow
    })
    const circleblue = useSpring({
        from: { transform: 'scale(0)'},
        to: { transform: 'scale(1)'},
        delay: 1500,
        config: { mass: 1, tension: 100, friction: 30 }
    })

    const wordstyle = useSpring({
        from: { height:'0rem', opacity:0},
        to: { height:'1.324rem',opacity:1},
        delay: 2200,
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
            <Link to={'/q1'} replace>
                    <animated.div className="App-Cover-circle-p" style={startstyle}>
                        <img rel="preload" src={start} alt='start'></img>
                    </animated.div>
                
            </Link>
            </animated.div>
            <animated.div className="App-Cover-P" style={people}>
                <img rel="preload" src={coverp} alt="coverps"></img>
            </animated.div> 
        </div>

        <div className="noshow">
            <img src={q1p} alt="preload"></img>
            <img src={acontent1} alt="preload"></img>
            <img src={acontent2} alt="preload"></img>
            <img src={acontent3} alt="preload"></img>
            <img src={bcontent1} alt="preload"></img>
            <img src={bcontent2} alt="preload"></img>
            <img src={bcontent3} alt="preload"></img>
            <img src={acontent1act} alt="preload"></img>
            <img src={acontent2act} alt="preload"></img>
            <img src={acontent3act} alt="preload"></img>
            <img src={bcontent1act} alt="preload"></img>
            <img src={bcontent2act} alt="preload"></img>
            <img src={bcontent3act} alt="preload"></img>
        </div>
        </>          
    );
}
