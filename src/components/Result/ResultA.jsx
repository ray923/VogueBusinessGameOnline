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

import ReactSwipe from 'react-swipe';
import bookinglogo from '../../asserts/pic/bookinglogo.png';
import redtitle from '../../asserts/pic/bookingredtitle.png';
import bluetitle from '../../asserts/pic/bookingbluetitle.png';
import bluecontent from '../../asserts/pic/bookingbluecontent.png';
import qrcode from '../../asserts/pic/bookingQRcode.png';
import bookingp from '../../asserts/pic/bookingp.png';



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
            <ReactSwipe>
            <div className="App-resultA">
                <img className="App-resultA-backimg" alt='background' src={resultbackground}></img>
                <CoverlogoforQ/>
                <div className="App-resultA-background">
                    <img className="App-resultA-white" alt='background' src={resultwhite}></img>
                    <div className='App-result-typeA'>
                        <img src={typeA} rel="preload" alt='typea'></img>
                    </div>
                    <ResultName name={this.state.name}></ResultName>
                    <ResultQR></ResultQR>
                    <div className='App-resultA-title'>
                        <img src={ResultAtitle} rel="preload" alt='resulttitle'></img>
                    </div>
                    <img src={contentborder} rel="preload" alt='contentborder' className="App-resultA-content-borderimg"></img>
                    <img src={content} rel="preload" alt='content' className="App-resultA-contentimg"></img>
                    <div className="App-resultA-circle-red sharenotshow" id="sharebutton" >
                        <img src={share}  rel="preload" alt='share'></img>
                    </div>
                </div>
                <div className="App-resultA-p">
                    <img src={resultAp} rel="preload" alt='backgroundpattern'></img>
                </div>
                <Link to='/booking'>
                    <div id="wechatimg" className="wechatimg"></div>
                </Link>
            </div>
            <div className="App">
                    <div className="App-booking-logo">
                        <img src={bookinglogo} alt="logo"></img>
                    </div>
                    <div className="App-booking-circle-r">    
                    </div>
                    <img src={redtitle} alt='title-red' className="App-booking-circle-r-content"></img>
                    <div className="App-booking-circle-b"></div>
                    <div className="App-booking-bluetitle">
                        <img src={bluetitle} alt='title-blue'></img>
                    </div>
                    <div className="App-booking-slash"></div>
                    <div className="App-booking-content">
                        <img src={bluecontent} alt='content-blue'></img>
                    </div>
                    <div className="App-booking-QRcode">
                        <img src={qrcode} alt='qrcode'></img>
                    </div>
                    <div className="App-booking-bookingp">
                        <img src={bookingp} alt='background'></img>
                    </div>
            </div>
            </ReactSwipe>

            </>
        )
    }
}