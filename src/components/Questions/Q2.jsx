import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import qtitle from '../../asserts/pic/FashionM&A2.png';
import q2qtitle from '../../asserts/pic/q2qtitle.png';
import CoverlogoforQ from '../Motion/coverlogoforQ';
import NextButton from '../Motion/next';
import q2a from '../../asserts/pic/q2a.png';
import q2aactive from '../../asserts/pic/q2aActive.png';
import q2b from '../../asserts/pic/q2b.png';
import q2bactive from '../../asserts/pic/q2bActive.png';
import Q2selectionA from '../Motion/Q2selectionA';
import Q2selectionB from '../Motion/Q2selectionB';

import backgroundImg from '../../asserts/pic/fillnamebackground.png'
import resultAp from '../../asserts/pic/resultAp.png';
import resultBp from '../../asserts/pic/resultBp.png';
import resultCp from '../../asserts/pic/resultCp.png';
import resultDp from '../../asserts/pic/resultDp.png';
import bookingp from '../../asserts/pic/bookingp.png';

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
            <>
            <div className="App">
                <CoverlogoforQ/>
                <div className="App-q1-background">
                    <div className="App-q1-q1titleNew">
                        <img src={qtitle} alt="qtitle"></img>
                    </div>
                    <div className="App-q2-q2qtitle">
                        <img src={q2qtitle} alt="q2qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"a",e)} className="App-q2-optionA">
                        <img src={"a"===this.state.selected?q2aactive:q2a} alt='optionA' className="App-q2-optionA-title"></img>

                        <Q2selectionA selected={this.state.selected}/>

                    </div>
                    <div onClick={(e)=>this.onSelection(5,"b",e)} className="App-q2-optionB">
                        <img src={"b"===this.state.selected?q2bactive:q2b} alt='optionB' className="App-q2-optionB-title"></img>
                        
                        <Q2selectionB selected={this.state.selected}/>

                    </div>
                    <Link to={()=> { return this.state.thisscore>0 ? '/q3/' + (Number(this.state.thisscore) + Number(this.state.totalscore)) : "#" }} replace>
                        <NextButton divclass="App-q2-circle-p"/>
                    </Link>
                </div>
            </div>
            <div className="noshow">
                <img src={backgroundImg} alt="preload"></img>
                <img src={resultAp} alt="preload"></img>
                <img src={resultBp} alt="preload"></img>
                <img src={resultCp} alt="preload"></img>
                <img src={resultDp} alt="preload"></img>
                <img src={bookingp} alt="preload"></img>
            </div>
            </>
        )
    }
}