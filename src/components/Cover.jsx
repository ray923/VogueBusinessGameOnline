import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import coverlogo from '../asserts/pic/logo.png';
import coverf from '../asserts/pic/FashionM&A.png';
import coverp from '../asserts/pic/cover.png';

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
                    <div className = "cover-circle-b-title">
                        <p>时尚并购</p>
                        <p>段位测试</p>
                    </div>
                    <div className="cover-slash"></div>
                    <div className="cover-circle-b-content">
                        <p>作为商界大亨，此刻的你拥有无尽的财富与资本。你正谋划着通过投资并购建立自己的时尚帝国：</p>
                    </div>
                </div>
                <Link to={'/q1'}>
                    <div className="App-Cover-circle-p">
                        <p className="Cover-circle-p-title">启动收购</p>
                        <p className="Cover-circle-p-content">start</p>
                    </div>
                </Link>
                <div className="App-Cover-P">
                    <img src={coverp} alt="coverps" className=""></img>
                </div>
                
            </div>            
        );
    }
}
