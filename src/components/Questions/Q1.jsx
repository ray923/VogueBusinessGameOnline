import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A1.png';
import q1qtitle from '../../asserts/pic/q1qtitle.png';
import q1p from '../../asserts/pic/q1p.png';
import q1next from '../../asserts/pic/nextq.png';

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
                    <div className="App-q1-q1qtitle">
                        <img src={q1qtitle} alt="q1qtitle"></img>
                    </div>
                    <div onClick={(e)=>this.onSelection(5,"a",e)} className="App-q1-q1optionA">
                        <p className="App-q1-q1optionA-content">为我挣10个亿</p>    
                    </div>
                    <div onClick={(e)=>this.onSelection(10,"b",e)} className="App-q1-q1optionB">
                        <p className="App-q1-q1optionB-content">做我集团的门面</p>
                    </div>
                    <Link to={()=> { return '/q2/' + (this.state.thisscore + this.state.totalscore)}}>
                        <div className="App-q1-circle-p">
                            <img src={q1next} alt='netxt'></img>   
                        </div>
                    </Link>
                </div>
                <div className="App-q1-q1p">
                    <img src={q1p} alt="q1p"></img>
                </div>
            </div>
        )
    }
}