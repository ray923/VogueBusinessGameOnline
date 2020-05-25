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

export class ResultD extends Component{
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
            <div className="App-resultD">
                <div className="App-resultA-logo">
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="App-resultA-background">
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
                    <div className="App-resultD-circle-red">
                        <img src={share} alt='share'></img>
                    </div>
                </div>
                <div className="App-resultD-p">
                    <img src={resultDp} alt='backgroundpattern'></img>
                </div>
                <div id="wechatimg" className="wechatimg imgNotCreated"></div>
            </div>
        )
    }
}