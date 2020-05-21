import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A1.png';
import q1qtitle from '../../asserts/pic/q1qtitle.png';
import q1p from '../../asserts/pic/q1p.png'

export class Q1 extends Component{
    constructor(props){
        super(props);
        
        this.onAselection = this.onAselection.bind(this);
        this.onBselection = this.onBselection.bind(this);

        this.state = {
            score: 0,
            Questions: []
        }
    }
    
    onAselection(){
        if(this.state.Questions.indexOf('q1') === -1)
        {
            this.setState ({
                score : this.state.score + 5,
                Questions : [...this.state.Questions,'q1']
            })
        }
    }

    onBselection(){
        if(this.state.Questions.indexOf('q1') === -1)
            {
            this.setState ({
                score : this.state.score + 10,
                Questions : [...this.state.Questions,'q1']
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
                    <div onClick={this.onAselection} className="App-q1-q1optionA">
                        <p className="App-q1-q1optionA-content">为我挣10个亿</p>    
                    </div>
                    <div onClick={this.onBselection} className="App-q1-q1optionB">
                        <p className="App-q1-q1optionB-content">做我集团的门面</p>
                    </div>
                    <Link to={'/q2'}>
                        <div className="App-q1-circle-p"></div>
                    </Link>
                </div>
                <div className="App-q1-q1p">
                    <img src={q1p} alt="q1p"></img>
                </div>
            </div>
        )
    }
}