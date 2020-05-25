import React, {Component} from 'react';
import logo from '../../asserts/pic/typeAlogo.png';
import typeB from '../../asserts/pic/typeB.png';
import ResultQR from './ResultQR';
import ResultName from './ResultName';
import ResultBtitle from '../../asserts/pic/resultBtitle.png';
import contentborder from '../../asserts/pic/resultBcontentborder.png';
import content from '../../asserts/pic/resultBcontent.png';
import share from '../../asserts/pic/resultAshare.png';
import resultBp from '../../asserts/pic/resultBp.png';

export class ResultB extends Component{
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
            <div className="App-resultB">
                <div className="App-resultA-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
                    <div className='App-result-typeA'>
                        <img src={typeB} alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultB-title'>
                        <img src={ResultBtitle} alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} alt='contentborder' className="App-resultB-content-borderimg"></img>
                    <img src={content} alt='content' className="App-resultB-contentimg"></img>
                    <div className="App-resultB-circle-red">
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <div className="App-resultB-p">
                    <img src={resultBp} alt='backgroundpattern'></img>
                </div>
                <div id="wechatimg" className="wechatimg imgNotCreated"></div>
            </div>
        )
    }
}