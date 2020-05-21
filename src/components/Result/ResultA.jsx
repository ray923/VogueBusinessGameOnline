import React, {Component} from 'react';
import logo from '../../asserts/pic/typeAlogo.png';
import typeA from '../../asserts/pic/typeA.png';
import ResultQR from './ResultQR'
import ResultName from './ResultName'

export class ResultA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.match.params.name
        }
    }

    render() {
        return (
            <div className="App-resultA">
                <div className="App-resultA-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
                    <div className='App-result-typeA'>
                        <img src={typeA} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                </div>
            </div>
        )
    }
}