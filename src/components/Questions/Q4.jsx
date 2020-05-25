import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import q1title from '../../asserts/pic/FashionM&A4.png';
import q4qtitle from '../../asserts/pic/q4qtitle.png';
import q4a from '../../asserts/pic/q4a.png';
import q4b from '../../asserts/pic/q4b.png';



import CoverLogo from '../Motion/coverlogo';
import NextButton from '../Motion/next';
import Q4selection from '../Motion/Q4selection'
import Q4Apattern from '../Motion/Q4Apattern'
import Q4Bpattern from '../Motion/Q4Bpattern'
import Q4perslash from '../Motion/Q4perslash'

export class Q4 extends Component{
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
                <CoverLogo/>
                <div className="App-q1-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q4-q4qtitle">
                        <img src={q4qtitle} alt="q4qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)}>
                        <Q4Apattern/>
                        <Q4selection divclass="App-q4-q4aoption" imgpath={q4a} />
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)}>
                        <Q4Bpattern/>
                        <Q4selection divclass="App-q4-q4boption" imgpath={q4b} />
                    </div>
                    <Link to={()=> { return '/q5/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <NextButton divclass="App-q4-circle-p"/>
                    </Link>
                </div>
                <div className="App-q4-q4percent">
                    <Q4perslash />
                </div>
            </div>
        )
    }
}