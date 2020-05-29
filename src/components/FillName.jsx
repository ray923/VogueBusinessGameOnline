import React, {Component} from 'react';
import fillnamelogo from '../asserts/pic/fillnamelogo.png'
import fillnametitle from '../asserts/pic/fillnametitle.png';
import fillnametitle2 from '../asserts/pic/fillnametitle2.png';
import fillnamemale from '../asserts/pic/fillnamemale.png';
import fillnamemaleact from '../asserts/pic/fillnamemaleActive.png';
import fillnamefemale from '../asserts/pic/fillnamefemale.png';
import fillnamefemaleact from '../asserts/pic/fillnamefemaleActive.png';
import fillnamenext from '../asserts/pic/fillnamenext.png';
import backgroundImg from '../asserts/pic/fillnamebackground.png'
import Button from './Result/Button';

export class FillName extends Component{
    constructor(props){
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.setGender = this.setGender.bind(this);
        //this.checkbeforenext = this.checkbeforenext(this);

        this.state = {
            name: "",
            gender: "",
            score: this.props.match.params.score,
            result: "resulta"
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

    componentDidMount(){
        if(this.state.score === "30" || this.state.score === "35")
        {
            this.setState({
                result: "resultb"
            })
        }
        if (this.state.score === "40" || this.state.score === "45")
        {
            this.setState({
                result: "resultc"
            })
        }
        if (this.state.score === "50")
        {
            this.setState({
                result: "resultd"
            })
        }
    }

    render() {
        
        return (
            <div className="App-fillname-background">
                <img className="App-fillname-background-img" src={backgroundImg} alt="pic"></img>
                <div className='App-fillname-logo'>
                    <img src={fillnamelogo} alt='fillnamelogo'></img>
                </div>
                <div className="App-fillname-border">
                    <div className="App-fillname-title">
                        <img src={fillnametitle} alt='selectGender'></img>
                    </div>
                    <SelectGender gender="MAN" setGender = {this.setGender.bind(this)} imggender={this.state.gender==="MAN"?fillnamemaleact:fillnamemale} genderclass="App-fillname-man"/>
                    <SelectGender gender="WOMEN" setGender = {this.setGender.bind(this)} imggender={this.state.gender==="WOMEN"?fillnamefemaleact:fillnamefemale} genderclass="App-fillname-women"/>
                    <div className="App-fillname-nametitle">
                        <img src={fillnametitle2} alt='fillname'></img>
                    </div>
                    <div className="App-fillname-fill">
                        <input 
                            id="inputname"
                            type="text"
                            value = {this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="App-fillname-circle">
                        <img src={fillnamenext} alt='getresult'></img>
                    </div>
                    <Button name={this.state.name} gender={this.state.gender} result={this.state.result}/>
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
