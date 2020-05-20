import React, {Component} from 'react';
import {HashRouter,Route} from 'react-router-dom';

import {Cover} from './components/Cover'
import {Q1} from './components/Questions/Q1'
import {Q2} from './components/Questions/Q2'
import {FillName} from './components/FillName'
import {Result} from './components/Questions/Result'

export default class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Cover} />
          <Route exact path='/q1' component={Q1} />
          <Route exact path='/q2' component={Q2} />
          <Route exact path='/fillname' component={FillName} />
          <Route exact path='/result/:name/:result' component={Result} />
        </div>
      </HashRouter>
    );
  }
}
