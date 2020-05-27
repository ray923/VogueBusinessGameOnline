import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import q1title from '../../asserts/pic/FashionM&A3.png';
import q3qtitle from '../../asserts/pic/q3qtitle.png';
import q3a from '../../asserts/pic/q3a.png';
import q3b from '../../asserts/pic/q3b.png';
import q3ap from '../../asserts/pic/q3apattern.png';
import q3bp from '../../asserts/pic/q3bpattern.png';
import CoverlogoforQ from '../Motion/coverlogoforQ';
import NextButton from '../Motion/next';
import Q3pattern from '../Motion/Q3pattern';
import Q3patternanti from '../Motion/Q3patternanti'
import Q3clock from '../../asserts/pic/Q3clock.png'

export class Q3 extends Component{
    constructor(props){
        super(props);
        
        this.onSelection = this.onSelection.bind(this);

        this.state = {
            totalscore: this.props.match.params.score,
            thisscore:0,
            selected: ""
        }
    }
    
    onSelection(score,opt,e){
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
                <div className="App-q3-background">
                    <div className="App-q1-q1titleNew">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q3-q3qtitle">
                        <img src={q3qtitle} alt="q3qtitle"></img>
                    </div>
                    <div className="App-q3-clock">
                        <img src={Q3clock} alt='clock'></img>
                        <Q3pattern divclass="App-q3-apattern" imgsrc={q3ap} />
                        <Q3patternanti divclass="App-q3-bpattern" imgsrc={q3bp} />
                    </div>

                    <div onClick={(e)=>this.onSelection(5,"a",e)} className="App-q3-q1optionA">
                        <img src={q3a} alt="q3a"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)} className="App-q3-q1optionB">
                        <img src={q3b} alt="q3b"></img>
                    </div>
                    
                    <div className="App-q3-bpattern-direction"></div>
                    <Link to={()=> { return '/q4/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <NextButton divclass="App-q3-circle-p"/>
                    </Link>

                </div>
            </div>
        )
    }
}