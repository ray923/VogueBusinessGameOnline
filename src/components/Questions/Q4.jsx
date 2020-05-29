import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import q1title from '../../asserts/pic/FashionM&A4.png';
import q4qtitle from '../../asserts/pic/q4qtitle.png';
import q4a from '../../asserts/pic/q4a.png';
import q4aact from '../../asserts/pic/q4aActive.png';
import q4b from '../../asserts/pic/q4b.png';
import q4bact from '../../asserts/pic/q4bActive.png';



import CoverlogoforQ from '../Motion/coverlogoforQ';
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
                <CoverlogoforQ/>
                <div className="App-q4-background">
                    <div className="App-q1-q1titleNew">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q4-q4qtitle">
                        <img src={q4qtitle} alt="q4qtitle"></img>
                    </div>
                    <div className="App-q4-frame">
                        <div onClick={(e)=>this.onSelection(5,"a",e)}>
                            <Q4Apattern selected={this.state.selected}/>
                            <Q4selection divclass="App-q4-q4aoption" imgpath={"a"===this.state.selected?q4aact:q4a} />
                        </div>
                        <div onClick={(e)=>this.onSelection(10,"b",e)}>
                            <Q4Bpattern selected={this.state.selected}/>
                            <Q4selection divclass="App-q4-q4boption" imgpath={"b"===this.state.selected?q4bact:q4b} />
                        </div>
                    </div>
                    <Link to={()=> { return this.state.thisscore >0 ? '/q5/' + (Number(this.state.thisscore) + Number(this.state.totalscore)) : "#"}} replace>
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