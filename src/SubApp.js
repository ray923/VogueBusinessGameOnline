import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';


import {FillName} from './components/FillName'
import {Booking} from './components/Result/Booking'


export default function SubApp() {

    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })


    return transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>  
            <Route exact path='/fillname/:score' component={FillName} />
            <Route exact path='/booking/:result/:name' component={Booking} />
          </Switch>
        </animated.div>
      ))
}
