import React from 'react';
import '../App.css';

import {Lines} from 'react-preloaders';


export default function PreCover() {    

    return (
        <>
        <div className="App">
        </div>
        <Lines background={'rgb(241,237,228)'} animation="slide-left"/>
        </>          
    );
}
