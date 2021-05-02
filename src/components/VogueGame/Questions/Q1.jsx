import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import q1qtitle from '../../../asserts/pic/q1qtitle.png';
import NextButton from '../Motion/next';
import Q1People from '../Motion/Q1people';
import Q1a from '../Motion/Q1a';
import Q1b from '../Motion/Q1b';
import Qtitleblue from '../Motion/Qtitleblue'

import CoverlogoforQ from '../Motion/coverlogoforQ';

import q3background from '../../../asserts/pic/q3background.png';
import Q3clock from '../../../asserts/pic/Q3clock.png'
import q3bp from '../../../asserts/pic/q3bpattern.png';
import q4acontent from '../../../asserts/pic/q4acontent.png';
import q4apattern from '../../../asserts/pic/q4apattern.png';
import q4bcontent from '../../../asserts/pic/q4bcontent.png';
import q4bpattern from '../../../asserts/pic/q4bpattern.png';
import q5p from '../../../asserts/pic/q5p.png';
import q4acontentact from '../../../asserts/pic/q4acontentActive.png';
import q4bcontentact from '../../../asserts/pic/q4bcontentActive.png';


export class Q1 extends Component{
    constructor(props){
        super(props);
        
        this.onSelection = this.onSelection.bind(this);

        this.state = {
            totalscore: 0,
            thisscore:0,
            selected: ""
        }
    }
    
    onSelection(score,opt){
        if(this.state.selected !== opt)
        {
            this.setState ({
                thisscore : score,
                selected : opt
            })
        }
    }


    render() {
        return (
            <>
            <div className="App">
                <CoverlogoforQ/>
                <div className="App-q1-background">
                <div className="App-q1-q1titleNew">
                    <Qtitleblue/>
                </div>
                    <div className="App-q1-q1qtitle">
                        <img src={q1qtitle} alt="q1qtitle"></img>
                    </div>
                    <Q1a divclass={"a"===this.state.selected?"App-q1-q1optionA-active":"App-q1-q1optionA"} score="10" selectedopt="a" onSelection={this.onSelection.bind(this)} optcontent="为我挣10个亿"/>
                    
                    <Q1b divclass={"b"===this.state.selected?"App-q1-q1optionB-active":"App-q1-q1optionB"} score="5" selectedopt="b" onSelection={this.onSelection.bind(this)} optcontent="做我集团的门面"/>

                    <Link to={()=> { return this.state.thisscore>0 ? '/q2/' + (this.state.thisscore + this.state.totalscore) : "#" }} replace>
                        <NextButton divclass="App-q1-circle-p"/>
                    </Link>
                </div>
                <Q1People/>
            </div>
            <div className="noshow">
                <img src={Q3clock} alt="preload"></img>
                <img src={q3background} alt="preload"></img>
                <img src={q3bp} alt="preload"></img>
                <img src={q4acontent} alt="preload"></img>
                <img src={q4apattern} alt="preload"></img>
                <img src={q4bcontent} alt="preload"></img>
                <img src={q4bpattern} alt="preload"></img>
                <img src={q5p} alt="preload"></img>
                <img src={q4acontentact} alt="preload"></img>
                <img src={q4bcontentact} alt="preload"></img>
            </div>
            </>
        )
    }
}