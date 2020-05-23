import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Cover from './components/Cover'
import {Q1} from './components/Questions/Q1'
import {Q2} from './components/Questions/Q2'
import {Q3} from './components/Questions/Q3'
import {Q4} from './components/Questions/Q4'
import {Q5} from './components/Questions/Q5'
import {ResultA} from './components/Result/ResultA'
import {ResultB} from './components/Result/ResultB'
import {ResultC} from './components/Result/ResultC'
import {ResultD} from './components/Result/ResultD'

import SubApp from './SubApp'

export default function App() {

    return (
      <HashRouter>
        <Route exact path='/' component={Cover} />
        <Route exact path='/q1' component={Q1} />
        <Route exact path='/q2/:score' component={Q2} />
        <Route exact path='/q3/:score' component={Q3} />
        <Route exact path='/q4/:score' component={Q4} />
        <Route exact path='/q5/:score' component={Q5} />
        <SubApp/>
        <Route exact path='/resulta/:name' component={ResultA} />
        <Route exact path='/resultb/:name' component={ResultB} />
        <Route exact path='/resultc/:name' component={ResultC} />
        <Route exact path='/resultd/:name' component={ResultD} />
      </HashRouter>
    )
}
