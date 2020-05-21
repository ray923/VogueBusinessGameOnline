import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import bookinglogo from '../../asserts/pic/bookinglogo.png';
import redtitle from '../../asserts/pic/bookingredtitle.png';
import bluetitle from '../../asserts/pic/bookingbluetitle.png';
import bluecontent from '../../asserts/pic/bookingbluecontent.png';
import qrcode from '../../asserts/pic/bookingQRcode.png';
import bookingp from '../../asserts/pic/bookingp.png';

export class Booking extends Component{
    constructor(props){
        super(props)

        this.redirectResult = this.redirectResult.bind(this);
    }
    
    redirectResult(){
        const finalresult = this.props.match.params.result?this.props.match.params.result : "resulta";
        return "/" + finalresult + "/" + (this.props.match.params.name?this.props.match.params.name:"Hi!Mate!");
    }

    render() {
        return (
            <div className="App">
                <Link to={this.redirectResult}>
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
                </Link>
            </div>
        )
    }
}