import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A5.png';
import q5qtitle from '../../asserts/pic/q5qtitle.png';
import q5a from '../../asserts/pic/q5a.png';
import q5b from '../../asserts/pic/q5b.png';
import q5p from '../../asserts/pic/q5p.png';

export class Q5 extends Component{
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
                    <div className="App-q5-q5qtitle">
                        <img src={q5qtitle} alt="q5qtitle"></img>
                    </div>
                    <div className="App-q5-q5optioinA" onClick={this.onAselection}>
                        <img src={q5a} alt='q5a'></img>
                    </div>
                    <div className="App-q5-q5optioinB" onClick={this.onBselection}>
                        <img src={q5b} alt='q5b'></img>
                    </div>
                    <Link to={'/fillname'}>
                        <div className="App-q5-circle-p"></div>
                    </Link>
                </div>
                <div className="App-q5-q5p">
                        <img src={q5p} alt='q5p'></img>
                </div>
            </div>
        )
    }
}