import React from 'react';
import qrcode from '../../asserts/pic/bookingQRcode.png'
import qrtitle from '../../asserts/pic/qrtitle.png'

export default function ResultQR(){
    return (
        <div className="App-result-qrcode">
            <img src={qrcode} alt='qrcode' className='App-result-qrcode-pattern'></img>
            <img src={qrtitle} alt='qrtitle' className='App-result-qrcode-title'></img>
        </div>
    )
}
