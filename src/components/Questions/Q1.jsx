import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import q1qtitle from '../../asserts/pic/q1qtitle.png';
import NextButton from '../Motion/next';
import Q1People from '../Motion/Q1people';
import Q1a from '../Motion/Q1a';
import Q1b from '../Motion/Q1b';
import Qtitleblue from '../Motion/Qtitleblue'

import CoverLogo from '../Motion/coverlogo';

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
            <div className="App">
                <CoverLogo/>
                <div className="App-q1-background">
                <div className="App-q1-q1title">
                    <Qtitleblue/>
                </div>
                    <div className="App-q1-q1qtitle">
                        <img src={q1qtitle} alt="q1qtitle"></img>
                    </div>
                    <Q1a divclass="App-q1-q1optionA" pclass="App-q1-q1optionA-content" score="5" selectedopt="a" onSelection={this.onSelection.bind(this)} optcontent="为我挣10个亿"/>
                    
                    <Q1b divclass="App-q1-q1optionB" pclass="App-q1-q1optionB-content" score="10" selectedopt="b" onSelection={this.onSelection.bind(this)} optcontent="做我集团的门面"/>

                    <Link to={()=> { return '/q2/' + (this.state.thisscore + this.state.totalscore)}}>
                        <NextButton divclass="App-q1-circle-p"/>
                    </Link>
                </div>
                <Q1People/>
            </div>
        )
    }
}