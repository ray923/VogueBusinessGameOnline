import React,{Component} from 'react';
import {withRouter} from "react-router-dom";

class ControlRedirect extends Component {


      goBack1() {
        this.props.history.goBack();
      }
    
      goBack2() {
        this.props.history.go(-1);
      }
      
      goto() {
        this.props.history.push('/url');
      }
    
      render() {
        return (
          <div style={{margin: '20px'}}>
            <button onClick={() => this.goBack1()} >回退1</button>
            <button onClick={() => this.goBack2()} >回退2</button>
            <button onClick={() => this.goto()} >跳转至URL</button>
          </div>
        )
      }

}

export default withRouter(ControlRedirect)




