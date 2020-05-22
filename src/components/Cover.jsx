import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import coverlogo from '../asserts/pic/logo.png';
import coverf from '../asserts/pic/FashionM&A.png';
import coverp from '../asserts/pic/cover.png';
import start from '../asserts/pic/start.png'
import covertitle from '../asserts/pic/covertitle.png';
import covercontent from '../asserts/pic/covercontent.png';

export class Cover extends Component {    
    render() {
        return (
            <div className="App">
                <div className="App-cover-logo">
                    <img src={coverlogo} alt="altcoverlogo"></img>
                </div>
                <div className="App-cover-logo-f">
                    <img src={coverf} alt="altcoverlogo"></img>
                </div>
                <div className="App-Cover-circle-b">
                    <img src={covertitle} alt='covertitle' className="App-Cover-circle-b-title"></img>
                    <div className="cover-slash"></div>
                    <img src={covercontent} alt='covercontent' className="App-Cover-circle-b-content"></img>
                </div>
                <Link to={'/q1'}>
                    <div className="App-Cover-circle-p">
                       <img src={start} alt='start'></img>
                    </div>
                </Link>
                <div className="App-Cover-P">
                    <img src={coverp} alt="coverps" className=""></img>
                </div>
                
            </div>            
        );
    }
}
