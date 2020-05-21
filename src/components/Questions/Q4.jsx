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

export class Q4 extends Component{
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
                    <div className="App-q4-q4qtitle">
                        <img src={q4qtitle} alt="q4qtitle"></img>
                    </div>
                    <div className="App-q4-q4acontent">
                        <img src={q4acontent} alt='q4ac'></img>
                    </div>
                    <div className="App-q4-q4apattern">
                        <img src={q4apattern} alt='q4ap'></img>
                    </div>
                    <div className="App-q4-q4aoption" onClick={this.onAselection}>
                        <img src={q4a} alt="q4aopt"></img>
                    </div>
                    <div className="App-q4-q4bcontent">
                        <img src={q4bcontent} alt='q4bc'></img>
                    </div>
                    <div className="App-q4-q4bpattern">
                        <img src={q4bpattern} alt='q4bp'></img>
                    </div>
                    <div className="App-q4-q4boption" onClick={this.onAselection}>
                        <img src={q4b} alt="q4bopt"></img>
                    </div>
                    <Link to={'/q5'}>
                        <div className="App-q4-circle-p"></div>
                    </Link>
                </div>
            </div>
        )
    }
}