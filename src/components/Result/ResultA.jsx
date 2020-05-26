import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asserts/pic/typeAlogo.png';
import typeA from '../../asserts/pic/typeA.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultAtitle from '../../asserts/pic/resultAtitle.png';
import contentborder from '../../asserts/pic/resultAcontentborder.png';
import content from '../../asserts/pic/resultAcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultAp from '../../asserts/pic/resultAp.png';

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
                <div className="App-resultA-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
                    <div className='App-result-typeA'>
                        <img src={typeA} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultA-title'>
                        <img src={ResultAtitle} alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} alt='contentborder' className="App-resultA-content-borderimg"></img>
                    <img src={content} alt='content' className="App-resultA-contentimg"></img>
                    <div className="App-resultA-circle-red">
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <div className="App-resultA-p">
                    <img src={resultAp} alt='backgroundpattern'></img>
                </div>
                <Link to='/booking'>
                    <div id="wechatimg" className="wechatimg imgNotCreated"></div>
                </Link>
            </div>

            </>
        )
    }
}