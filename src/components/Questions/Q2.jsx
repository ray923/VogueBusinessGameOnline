import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A2.png';
import q1qtitle from '../../asserts/pic/q2qtitle.png';
import q2next from '../../asserts/pic/nextq.png';
import q2a from '../../asserts/pic/q2a.png';
import q2b from '../../asserts/pic/q2b.png';
import acontent1 from '../../asserts/pic/optacontent1.png';
import acontent2 from '../../asserts/pic/optacontent2.png';
import acontent3 from '../../asserts/pic/optacontent3.png';
import bcontent1 from '../../asserts/pic/optbcontent1.png';
import bcontent2 from '../../asserts/pic/optbcontent2.png';
import bcontent3 from '../../asserts/pic/optbcontent3.png';


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
                <div className="App-q1-logo">
                    <img src={coverlogo} alt="altcoverlogo"></img>
                </div>
                <div className="App-q1-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q2-q2qtitle">
                        <img src={q1qtitle} alt="q2qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)} className="App-q2-optionA">
                        <img src={q2a} alt='optionA' className="App-q2-optionA-title"></img>
                        <img src={acontent1} alt='acontent1' className="App-q2-optionA-content1"></img>
                        <img src={acontent2} alt='acontent2' className="App-q2-optionA-content2"></img>
                        <img src={acontent3} alt='acontent3' className="App-q2-optionA-content3"
                        ></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)} className="App-q2-optionB">
                        <img src={q2b} alt='optionB' className="App-q2-optionB-title"></img>
                        <img src={bcontent1} alt='bcontent1' className="App-q2-optionB-content1"></img>
                        <img src={bcontent2} alt='bcontent2' className="App-q2-optionB-content2"></img>
                        <img src={bcontent3} alt='bcontent3' className="App-q2-optionB-content3"></img>
                    </div>
                    <Link to={()=> { return '/q3/' + (Number(this.state.thisscore) + Number(this.state.totalscore))}}>
                        <div className="App-q2-circle-p">
                            <img src={q2next} alt='next'></img>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}