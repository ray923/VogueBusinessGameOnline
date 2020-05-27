import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import typeB from '../../asserts/pic/typeB.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultBtitle from '../../asserts/pic/resultBtitle.png';
import contentborder from '../../asserts/pic/resultBcontentborder.png';
import content from '../../asserts/pic/resultBcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultBp from '../../asserts/pic/resultBp.png';
import CoverlogoforQ from '../Motion/coverlogoforQ';
import resultwhite from '../../asserts/pic/resultwhite.png';
import resultbackground from '../../asserts/pic/resultBbackground.png';

export class ResultB extends Component{
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
            <div className="App-resultB">
                <img className="App-resultA-backimg" alt='background' src={resultbackground}></img>
                <CoverlogoforQ/>
                <div className="App-resultA-background">
                <img className="App-resultA-white" alt='background' src={resultwhite}></img>
                    <div className='App-result-typeA'>
                        <img src={typeB} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultB-title'>
                        <img src={ResultBtitle} alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} alt='contentborder' className="App-resultB-content-borderimg"></img>
                    <div className="App-resultB-circle-red sharenotshow" id="sharebutton" >
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <Link to='/booking'>
                    <div id="wechatimg" className="wechatimg"></div>
                </Link>
                <div className="App-resultB-p">
                    <img src={resultBp} alt='backgroundpattern'></img>
                </div>
            </div>
        )
    }
}