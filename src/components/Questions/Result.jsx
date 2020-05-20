import React, {Component} from 'react';
import resultA from '../../asserts/pic/cover.png';
import resultB from '../../asserts/pic/cover.png';
import { Link } from 'react-router-dom';

export class Result extends Component{
    constructor(props){
        super(props)

        this.state = {
            result: resultA,
            name: "Hello"
        }
    }

    componentWillMount(){
        if(this.props.match.params.result === 'resultA')
        {
            this.setState({
                result: resultA
            })
        } else if (this.props.match.params.result === 'resultB') {
            this.setState({
                result: resultB
            })
        }
        
    }


    render() {
        return (
            <div className="App">
            <header className="App-Result">
                <img src={this.state.result} className="App-background" alt="result" />
                <Link to={'/'}>PlayAgain</Link>
                <div>{this.props.match.params.name}</div>
            </header>
            </div>
        )
    }
}