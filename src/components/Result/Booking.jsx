import React, {Component} from 'react';
import bookinglogo from '../../asserts/pic/bookinglogo.png';
import redtitle from '../../asserts/pic/bookingredtitle.png';
import bluetitle from '../../asserts/pic/bookingbluetitle.png';
import qrcode from '../../asserts/pic/bookingQRcode.png';
import bookingp from '../../asserts/pic/bookingp.png';

export class Booking extends Component{

    render() {
        return (
            <div className="App">
                    <div className="App-booking-logo">
                        <img src={bookinglogo} alt="logo"></img>
                    </div>
                    <div className="App-booking-circle-r">    
                    </div>
                    <div className="App-booking-red">
                        <img src={redtitle} alt='title-red' className="App-booking-circle-r-content"></img>  
                    </div>
                    
                    <div className="App-booking-circle-b"></div>
                    <div className="App-booking-bluetitle">
                        <img src={bluetitle} alt='title-blue' className="App-booking-bluetitle-content"></img>
                        <img src={qrcode} alt='qrcode' className="App-booking-QRcode"></img>
                    </div>
                    {/* <div className="App-booking-slash"></div>
                    <div className="App-booking-content">
                        <img src={bluecontent} alt='content-blue'></img>
                    </div> */}
                    {/* <div className="App-booking-QRcode">
                        
                    </div> */}
                    <div className="App-booking-bookingp">
                        <img src={bookingp} alt='background'></img>
                    </div>
            </div>
        )
    }
}