import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Cover from './components/Cover'
import PreCover from './components/preCover'
import {Q1} from './components/Questions/Q1'
import {ResultA} from './components/Result/ResultA'
import {ResultB} from './components/Result/ResultB'
import {ResultC} from './components/Result/ResultC'
import {ResultD} from './components/Result/ResultD'
import {Booking} from './components/Result/Booking'

import SubApp from './SubApp'

export default function App() {

    return (
      <HashRouter>
        <Route exact path='/' component={Cover} />
        <Route exact path='/cover' component={PreCover} />
        <SubApp/>
        
        <Route exact path='/resulta/:name' component={ResultA} />
        <Route exact path='/resultb/:name' component={ResultB} />
        <Route exact path='/resultc/:name' component={ResultC} />
        <Route exact path='/resultd/:name' component={ResultD} />
        <Route exact path='/booking' component={Booking} />
      </HashRouter>
    )
}
