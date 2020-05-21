import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import coverlogo from '../../asserts/pic/logo.png';
import q1title from '../../asserts/pic/FashionM&A3.png';
import q3qtitle from '../../asserts/pic/q3qtitle.png';
import q3a from '../../asserts/pic/q3a.png';
import q3b from '../../asserts/pic/q3b.png';
import q3ap from '../../asserts/pic/q3apattern.png';
import q3bp from '../../asserts/pic/q3bpattern.png';

export class Q3 extends Component{
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
                <div className="App-q3-background">
                    <div className="App-q1-q1title">
                        <img src={q1title} alt="q1title"></img>
                    </div>
                    <div className="App-q3-q3qtitle">
                        <img src={q3qtitle} alt="q3qtitle"></img>
                    </div>
                    <div onClick={this.onAselection} className="App-q3-q1optionA">
                        <img src={q3a} alt="q3a"></img>
                    </div>
                    <div onClick={this.onBselection} className="App-q3-q1optionB">
                        <img src={q3b} alt="q3b"></img>
                    </div>
                    <div className="App-q3-apattern">
                        <img src={q3ap} alt='q3ap'></img>
                    </div>
                    <div className="App-q3-bpattern">
                        <img src={q3bp} alt="q3bp"></img>
                    </div>
                    <div className="App-q3-bpattern-direction"></div>
                    <Link to={'/q4'}>
                        <div className="App-q3-circle-p"></div>
                    </Link>
                </div>
            </div>
        )
    }
}