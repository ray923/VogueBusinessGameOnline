import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import typeA from '../../asserts/pic/typeA.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultAtitle from '../../asserts/pic/resultAtitle.png';
import contentborder from '../../asserts/pic/resultAcontentborder.png';
import content from '../../asserts/pic/resultAcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultAp from '../../asserts/pic/resultAp.png';
import CoverlogoforQ from '../Motion/coverlogoforQ';
import resultbackground from '../../asserts/pic/resultAbackground.png';
import resultwhite from '../../asserts/pic/resultwhite.png';

import knowmoretitle from '../../asserts/pic/knowmoretitle.png';
import knowmorelight from '../../asserts/pic/knowmorelight.png';
import knowmorehand from '../../asserts/pic/knowmorehand.png';

export class ResultA extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.match.params.name
        }
    }

    componentDidMount(){
        window.createHTMLImage();
    }

    render() {
        return (
            <>

            <div className="App-resultA">
                <img className="App-resultA-backimg" alt='background' src={resultbackground}></img>
                <CoverlogoforQ/>
                <div className="App-resultA-background">
                    <img className="App-resultA-white" alt='background' src={resultwhite}></img>
                    <div className='App-result-typeA'>
                        <img src={typeA} rel="preload" alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                        <ResultQR/>
                    <div className='App-resultA-title'>
                        <img src={ResultAtitle} rel="preload" alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} rel="preload" alt='contentborder' className="App-resultA-content-borderimg"></img>
                    <img src={content} rel="preload" alt='content' className="App-resultA-contentimg"></img>
                    <div className="App-resultA-circle-red" id="sharebutton" >
                        <img src={share}  rel="preload" alt='share'></img>
                    </div>
                </div>
                <div className="App-resultA-p">
                    <img src={resultAp} rel="preload" alt='backgroundpattern'></img>
                </div>
                <div id="wechatimg" className="wechatimg">
                </div>
                <Link to='/booking'>
                    <div id="knowmore" className="click-area sharenotshow">
                        <img src={knowmoretitle} alt="knowmore" className="knowmoretitle"></img>
                        <img src={knowmorelight} alt="knowmore" className="knowmorelight"></img>
                        <img src={knowmorehand} alt="knowmore" className="knowmorehand"></img>
                    </div>
                </Link>
            </div>

            </>
        )
    }
}