import React, {Component} from 'react';
import {HashRouter,Route} from 'react-router-dom';

import {Cover} from './components/Cover'
import {Q1} from './components/Questions/Q1'
import {Q2} from './components/Questions/Q2'
import {Q3} from './components/Questions/Q3'
import {Q4} from './components/Questions/Q4'
import {Q5} from './components/Questions/Q5'
import {FillName} from './components/FillName'
import {Booking} from './components/Result/Booking'
import {ResultA} from './components/Result/ResultA'

export default class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Cover} />
          <Route exact path='/q1' component={Q1} />
          <Route exact path='/q2' component={Q2} />
          <Route exact path='/q3' component={Q3} />
          <Route exact path='/q4' component={Q4} />
          <Route exact path='/q5' component={Q5} />
          <Route exact path='/fillname' component={FillName} />
          <Route exact path='/booking/:result/:name' component={Booking} />
          <Route exact path='/resulta/:name' component={ResultA} />
        </div>
      </HashRouter>
    );
  }
}
