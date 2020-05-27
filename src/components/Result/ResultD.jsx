import React, {Component} from 'react';
import logo from '../../asserts/pic/typeDlogo.png';
import typeD from '../../asserts/pic/typeD.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultDtitle from '../../asserts/pic/resultDtitle.png';
import contentborder from '../../asserts/pic/resultDcontentborder.png';
import content from '../../asserts/pic/resultDcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultDp from '../../asserts/pic/resultDp.png';
import { Link } from 'react-router-dom';
import resultwhite from '../../asserts/pic/resultwhite.png';
import resultbackground from '../../asserts/pic/resultDbackground.png';

export class ResultD extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.match.params.name
        }
    }

    componentDidMount(){
        setTimeout(window.createHTMLImage(), 2000);
    }

    render() {
        return (
            <div className="App-resultD">
                <img className="App-resultA-backimg" alt='background' src={resultbackground}></img>
                <div className="App-resultD-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
                <img className="App-resultA-white" alt='background' src={resultwhite}></img>
                    <div className='App-result-typeA'>
                        <img src={typeD} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultD-title'>
                        <img src={ResultDtitle} alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} alt='contentborder' className="App-resultD-content-borderimg"></img>
                    <img src={content} alt='content' className="App-resultD-contentimg"></img>
                    <div className="App-resultD-circle-red sharenotshow" id="sharebutton" >
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <div className="App-resultD-p">
                    <img src={resultDp} alt='backgroundpattern'></img>
                </div>
                <Link to='/booking'>
                    <div id="wechatimg" className="wechatimg"></div>
                </Link>
            </div>
        )
    }
}