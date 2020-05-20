import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FisrtEffect from './FisrtAnimate'

export class FillName extends Component{
    constructor(props){
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.setGender = this.setGender.bind(this);

        this.state = {
            name: "",
            gender: "",
            score: 0,
            result: "resultA"
        }
    }

    

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    setGender(val){
        this.setState({
            gender: val
        })
    }

    
    
    render() {
        
        return (
            <div className="App">
            <header className="App-Question1">
                <Link to={'/'}>Back to Home</Link>
                <Link to={()=>{return "/result/" + this.state.name + "/" + this.state.result}}>Result</Link>
                <div className="">
                    <FisrtEffect></FisrtEffect>
                    <input 
                        type="text" 
                        className="" 
                        value = {this.state.name}
                        onChange={this.onChangeName}
                        />
                </div>
                <div className="">
                <label>Gender:  </label>
                    <SelectGender gender="MAN" setGender = {this.setGender.bind(this)}/>
                    <SelectGender gender="WOMEN" setGender = {this.setGender.bind(this)}/>
                </div>
            </header>
            </div>
        )
    }
}

class SelectGender extends Component{

    render(){
        return (
            <div onClick={() => (this.props.setGender(this.props.gender))} value = {this.props.gender} >{this.props.gender}</div>
        )
    }
}
