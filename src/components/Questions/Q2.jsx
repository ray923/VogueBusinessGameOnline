import React, {Component} from 'react';
import background from '../../asserts/pic/cover.png';
import { Link } from 'react-router-dom';

export class Q2 extends Component{
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
        if(this.state.Questions.indexOf('q2') === -1)
        {
            this.setState ({
                score : this.state.score + 5,
                Questions : [...this.state.Questions,'q2']
            })
        }
    }

    onBselection(){
        if(this.state.Questions.indexOf('q2') === -1)
            {
            this.setState ({
                score : this.state.score + 10,
                Questions : [...this.state.Questions,'q2']
            })
        }
    }

    render() {
        return (
            <div className="App">
            <header className="App-Question1">
                <img src={background} className="App-background" alt="background" />
                <Link to={'/'}>Back to Home</Link>
                <Link to={'/fillname'}>Fill the Name</Link>
                <div onClick={this.onAselection}>A selection A</div>
                <div onClick={this.onBselection}>B selection B</div>
            </header>
            </div>
        )
    }
}