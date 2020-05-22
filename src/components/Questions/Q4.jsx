import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A4.png';
import q4qtitle from '../../asserts/pic/q4qtitle.png';
import q4acontent from '../../asserts/pic/q4acontent.png';
import q4apattern from '../../asserts/pic/q4apattern.png';
import q4a from '../../asserts/pic/q4a.png';
import q4bcontent from '../../asserts/pic/q4bcontent.png';
import q4bpattern from '../../asserts/pic/q4bpattern.png';
import q4b from '../../asserts/pic/q4b.png';
import q4next from '../../asserts/pic/nextq.png';
import q410per from '../../asserts/pic/q410per.png';
import q470per from '../../asserts/pic/q470per.png';
import q4100per from '../../asserts/pic/q4100per.png';
import q4100perslash from '../../asserts/pic/q4100perslash.png'
import q470perslash from '../../asserts/pic/q470perslash.png'

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
                <div className="App-q1-logo">
                    <img src={coverlogo} alt="altcoverlogo"></img>
                </div>
                <div className="App-q1-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q4-q4qtitle">
                        <img src={q4qtitle} alt="q4qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)}>
                        <div className="App-q4-q4acontent">
                            <img src={q4acontent} alt='q4ac'></img>
                        </div>
                        <div className="App-q4-q4apattern">
                            <img src={q4apattern} alt='q4ap'></img>
                        </div>
                        <div className="App-q4-q4aoption" onClick={this.onAselection}>
                            <img src={q4a} alt="q4aopt"></img>
                        </div>
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)}>
                        <div className="App-q4-q4bcontent">
                            <img src={q4bcontent} alt='q4bc'></img>
                        </div>
                        <div className="App-q4-q4bpattern">
                            <img src={q4bpattern} alt='q4bp'></img>
                        </div>
                        <div className="App-q4-q4boption" onClick={this.onAselection}>
                            <img src={q4b} alt="q4bopt"></img>
                        </div>
                    </div>
                    <Link to={()=> { return '/q5/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <div className="App-q4-circle-p">
                            <img src={q4next} alt='next'></img>
                        </div>
                    </Link>
                </div>
                <div className="App-q4-q4percent">
                    <img src={q4100per} alt='100percent' className="App-q4-100per"></img>
                    <img src={q470per} alt='70percent' className="App-q4-70per"></img>
                    <img src={q410per} alt='10percent' className="App-q4-10per"></img>
                    <img src={q4100perslash} alt='slash' className="App-q4-100per-s"></img>
                    <img src={q470perslash} alt='slash' className="App-q4-70per-s"></img>
                </div>
            </div>
        )
    }
}