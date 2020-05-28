import React from 'react';
import {Route, useLocation} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';


import {Q1} from './components/Questions/Q1'
import {Q2} from './components/Questions/Q2'
import {Q3} from './components/Questions/Q3'
import {Q4} from './components/Questions/Q4'
import {Q5} from './components/Questions/Q5'
import {FillName} from './components/FillName'
// import {Booking} from './components/Result/Booking'


export default function SubApp() {

    const location = useLocation()
    const config = { mass: 1, tension: 200, friction: 30 }
    const transitions = useTransition(location, location => location.pathname, {
      config,
      from: { opacity: 0, transform: 'translate3d(0,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
    })


    return transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>

            
            <Route exact path='/q1' component={Q1} />
            <Route exact path='/q2/:score' component={Q2} />
            <Route exact path='/q3/:score' component={Q3} />
            <Route exact path='/q4/:score' component={Q4} />
            <Route exact path='/q5/:score' component={Q5} />
            <Route exact path='/fillname/:score' component={FillName} />
            

        </animated.div>
      ))
}
