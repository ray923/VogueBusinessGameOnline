import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import qtitle from '../../asserts/pic/FashionM&A2.png';
import q2qtitle from '../../asserts/pic/q2qtitle.png';
import CoverlogoforQ from '../Motion/coverlogoforQ';
import NextButton from '../Motion/next';
import q2a from '../../asserts/pic/q2a.png';
import q2b from '../../asserts/pic/q2b.png';
import Q2selectionA from '../Motion/Q2selectionA';
import Q2selectionB from '../Motion/Q2selectionB';


export class Q2 extends Component{

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
                <div className="App-q1-background">
                    <div className="App-q1-q1titleNew">
                        <img src={qtitle} alt="qtitle"></img>
                    </div>
                    <div className="App-q2-q2qtitle">
                        <img src={q2qtitle} alt="q2qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)} className="App-q2-optionA">
                        <img src={q2a} alt='optionB' className="App-q2-optionA-title"></img>

                        <Q2selectionA/>

                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)} className="App-q2-optionB">
                        <img src={q2b} alt='optionB' className="App-q2-optionB-title"></img>
                        
                        <Q2selectionB/>

                    </div>
                    <Link to={()=> { return '/q3/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <NextButton divclass="App-q2-circle-p"/>
                    </Link>
                </div>
            </div>
        )
    }
}