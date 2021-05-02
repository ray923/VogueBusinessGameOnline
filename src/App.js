import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Cover from './components/VogueGame/Cover';
import Home from './components/Home';
import Animation3Dcard from './components/3dCardsAnimation/Animation3Dcard';
import ControlRedirect from './components/ControlRedirect';

import SubApp from './components/SubApp'

export default function App() {

    return (
      <HashRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/Animationcards' component={Animation3Dcard} />
        <Route exact path='/VogueGame' component={Cover} />
        <Route exact path='/ControlRedirect' component={ControlRedirect} />
        <SubApp/>
      </HashRouter>
    )
}
