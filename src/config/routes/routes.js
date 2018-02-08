import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Login from '../../components/login/login'
import Home from '../../components/home/home'

export default props => (
    <Router>
        <div className="site">
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Home} />
        </div>
    </Router>

)
