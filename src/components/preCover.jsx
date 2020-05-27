import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import q1model from '../asserts/model/q1model.png';
import coverp from '../asserts/pic/cover.png';
import q1qtitle from '../asserts/pic/q1qtitle.png';
import q1p from '../asserts/pic/q1p.png';
import q2qtitle from '../asserts/pic/q2qtitle.png';
import acontent1 from '../asserts/pic/optacontent1.png';
import acontent2 from '../asserts/pic/optacontent2.png';
import acontent3 from '../asserts/pic/optacontent3.png';
import bcontent1 from '../asserts/pic/optbcontent1.png';
import bcontent2 from '../asserts/pic/optbcontent2.png';
import bcontent3 from '../asserts/pic/optbcontent3.png';
import q3background from '../asserts/pic/q3background.png';
import q4acontent from '../asserts/pic/q4acontent.png';
import q4apattern from '../asserts/pic/q4apattern.png';
import q4bcontent from '../asserts/pic/q4bcontent.png';
import q4bpattern from '../asserts/pic/q4bpattern.png';
import q5p from '../asserts/pic/q5p.png';
import backgroundImg from '../asserts/pic/fillnamebackground.png'
import resultAp from '../asserts/pic/resultAp.png';
import resultBp from '../asserts/pic/resultBp.png';
import resultCp from '../asserts/pic/resultCp.png';
import resultDp from '../asserts/pic/resultDp.png';


import {Lines} from 'react-preloaders';

export default class PreCover extends Component {    

    componentDidMount(){

    }

    render() {
    return (
        <>
        <Link to="/cover">
        <div>
            <img src={coverp} alt="preload"></img>
            <img src={q1qtitle} alt="preload"></img>
            <img src={q1p} alt="preload"></img>
            <img src={q2qtitle} alt="preload"></img>
            <img src={acontent1} alt="preload"></img>
            <img src={acontent2} alt="preload"></img>
            <img src={acontent3} alt="preload"></img>
            <img src={bcontent1} alt="preload"></img>
            <img src={bcontent2} alt="preload"></img>
            <img src={bcontent3} alt="preload"></img>
            <img src={q3background} alt="preload"></img>
            <img src={q4acontent} alt="preload"></img>
            <img src={q4apattern} alt="preload"></img>
            <img src={q4bcontent} alt="preload"></img>
            <img src={q4bpattern} alt="preload"></img>
            <img src={q5p} alt="preload"></img>
            <img src={backgroundImg} alt="preload"></img>
            <img src={resultAp} alt="preload"></img>
            <img src={resultBp} alt="preload"></img>
            <img src={resultCp} alt="preload"></img>
            <img src={resultDp} alt="preload"></img>
        </div>
        </Link>
        <Lines />
        </>
    )}
}

// <Redirect to="/resulta/name" />
