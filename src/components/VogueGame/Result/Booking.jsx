import React, {Component} from 'react';
import bookinglogo from '../../../asserts/pic/bookinglogo.png';
import redtitle from '../../../asserts/pic/bookingredtitle.png';
import bluetitle from '../../../asserts/pic/bookingbluetitle.png';
import bookingclick from '../../../asserts/pic/bookingclick.png';
import bookingp from '../../../asserts/pic/bookingp.png';

export class Booking extends Component{
    constructor (props) {
        super(props);

        this.onClickBooking = this.onClickBooking.bind(this);
    }


    onClickBooking(){
        // window.cna('send', 'event', 'special_check', 'redirect_btn', 'count_users');
        window.location.href = "https://app9HeJRlRL5330.h5.xiaoeknow.com/content_page/eyJ0eXBlIjoiMiIsInJlc291cmNlX3R5cGUiOjQsInJlc291cmNlX2lkIjoibF81ZWQwYmRkOGNlMTE1X1ludlZlaWVvIiwiYXBwX2lkIjoiYXBwOUhlSlJsUkw1MzMwIiwicHJvZHVjdF9pZCI6IiJ9";
    }
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
                    <div className="App-booking-bluetitle" onClick={()=>this.onClickBooking()}>
                        <img src={bluetitle} alt='title-blue' className="App-booking-bluetitle-content"></img>
                        {/* <a href="https://app9HeJRlRL5330.h5.xiaoeknow.com/content_page/eyJ0eXBlIjoiMiIsInJlc291cmNlX3R5cGUiOjQsInJlc291cmNlX2lkIjoibF81ZWQwYmRkOGNlMTE1X1ludlZlaWVvIiwiYXBwX2lkIjoiYXBwOUhlSlJsUkw1MzMwIiwicHJvZHVjdF9pZCI6IiJ9"> */}
                            <img src={bookingclick} alt='bookingclick' className="App-booking-QRcode"></img>
                        {/* </a> */}
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