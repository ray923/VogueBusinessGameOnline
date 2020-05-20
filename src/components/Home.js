import React, {Component} from 'react';
import background from '../asserts/pic/cover.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={background} className="App-background" alt="background" />
                <Link to={'/q1'}>Click to Start</Link>
            </header>
            </div>
        );
    }
}