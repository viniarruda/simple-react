import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Login from '../../components/login/login'
import Home from '../../components/home/home'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Redirect from='*' to='/login' />
    </Router>
)
