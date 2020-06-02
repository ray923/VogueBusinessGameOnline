import React, { Component } from 'react';
import viewdata from '../asserts/data/viewnumbers.json';
import clickdata from '../asserts/data/clicknumbers.json';



export class Statistics extends Component {
    constructor (props) {
        super(props);

        this.state = {
            viewd : viewdata[0].viewed,
            clicked : clickdata[0].clicked
        }
    }

    
    render(){
        return (
            <>
                <div>已经有: {this.state.viewd}人玩了游戏</div>
                <div>已经有: {this.state.clicked}人点了预约</div>
            </>
        )
    }
}





