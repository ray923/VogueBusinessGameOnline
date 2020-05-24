import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import q1title from '../../asserts/pic/FashionM&A2.png';
import q1qtitle from '../../asserts/pic/q2qtitle.png';
import CoverLogo from '../Motion/coverlogo';
import NextButton from '../Motion/next';
import q2a from '../../asserts/pic/q2a.png';
import acontent1 from '../../asserts/pic/optacontent1.png';
import acontent2 from '../../asserts/pic/optacontent2.png';
import acontent3 from '../../asserts/pic/optacontent3.png';
import q2b from '../../asserts/pic/q2b.png';
import bcontent1 from '../../asserts/pic/optbcontent1.png';
import bcontent2 from '../../asserts/pic/optbcontent2.png';
import bcontent3 from '../../asserts/pic/optbcontent3.png';
import Q2selectionA from '../Motion/Q2selectionA';



export class Q2 extends Component{
    _isMounted = false;
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

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        return (
            <div className="App">
                <CoverLogo/>
                <div className="App-q1-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q2-q2qtitle">
                        <img src={q1qtitle} alt="q2qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)} className="App-q2-optionA">
                        <img src={q2a} alt='optionB' className="App-q2-optionB-title"></img>

                        <Q2selectionA divclass='App-q2-optionA-content1' acontent={acontent1}/>
                        <Q2selectionA divclass='App-q2-optionA-content2' acontent={acontent2}/>
                        <Q2selectionA divclass='App-q2-optionA-content3' acontent={acontent3}/>

                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)} className="App-q2-optionB">
                        <img src={q2b} alt='optionB' className="App-q2-optionB-title"></img>
                        
                        <Q2selectionA divclass='App-q2-optionB-content1' acontent={bcontent1}/>
                        <Q2selectionA divclass='App-q2-optionB-content2' acontent={bcontent2}/>
                        <Q2selectionA divclass='App-q2-optionB-content3' acontent={bcontent3}/>

                    </div>
                    <Link to={()=> { return '/q3/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <NextButton divclass="App-q2-circle-p"/>
                    </Link>
                </div>
            </div>
        )
    }
}