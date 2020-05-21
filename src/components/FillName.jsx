import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import fillnamelogo from '../asserts/pic/fillnamelogo.png'
import fillnametitle from '../asserts/pic/fillnametitle.png';
import fillnametitle2 from '../asserts/pic/fillnametitle2.png';
import fillnamemale from '../asserts/pic/fillnamemale.png';
import fillnamefemale from '../asserts/pic/fillnamefemale.png'

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
            <div className="App-fillname-background">
                <div className='App-fillname-logo'>
                    <img src={fillnamelogo} alt='fillnamelogo'></img>
                </div>
                <div className="App-fillname-border">
                    <div className="App-fillname-title">
                        <img src={fillnametitle} alt='selectGender'></img>
                       </div>
                    <SelectGender gender="MAN" setGender = {this.setGender.bind(this)} imggender={fillnamemale} genderclass="App-fillname-man"/>
                    <SelectGender gender="WOMEN" setGender = {this.setGender.bind(this)} imggender={fillnamefemale} genderclass="App-fillname-women"/>
                    <div className="App-fillname-nametitle">
                        <img src={fillnametitle2} alt='fillname'></img>
                    </div>
                    <div className="App-fillname-fill">
                        <input 
                            type="text"
                            value = {this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <Link to={()=>{return "/booking/" + this.state.result + "/" + (this.state.name?this.state.name:"Hi!Mate!")}}>
                        <div className="App-fillname-circle"></div>
                    </Link>
                </div>
            </div>
        )
    }
}

class SelectGender extends Component{

    render(){
        return (
            <div onClick={() => (this.props.setGender(this.props.gender))} value = {this.props.gender} className={this.props.genderclass}>
                <img src={this.props.imggender} alt={this.props.gender}></img>
            </div>
        )
    }
}
