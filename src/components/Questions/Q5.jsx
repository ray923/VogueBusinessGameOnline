import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import q1title from '../../asserts/pic/FashionM&A5.png';
import q5qtitle from '../../asserts/pic/q5qtitle.png';

import CoverlogoforQ from '../Motion/coverlogoforQ';
import NextButton from '../Motion/next';
import Q5selection from '../Motion/Q5selection'
import Q5p from '../Motion/Q5p'

export class Q5 extends Component{
    constructor(props){
        super(props);
        
        this.onSelection = this.onSelection.bind(this);

        this.state = {
            totalscore: this.props.match.params.score,
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
                <CoverlogoforQ/>
                <div className="App-q1-background">
                    <div className="App-q1-q1titleNew">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q5-q5qtitle">
                        <img src={q5qtitle} alt="q5qtitle"></img>
                    </div>
                    <Q5selection selected={this.state.selected} onChoose={this.onSelection.bind(this)}/>
                    <Link to={()=> { return this.state.thisscore > 0 ? '/fillname/' + (Number(this.state.thisscore) + Number(this.state.totalscore)) : "#"}} replace>
                        <NextButton divclass="App-q5-circle-p"/>
                    </Link>
                </div>
                <Q5p/>
            </div>
        )
    }
}