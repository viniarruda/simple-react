import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../config/assets/stylesheets/application.scss'

import React from 'react'
import Menu from '../components/menu/menu'
import Routes from '../config/routes/routes'

export default props => (
  <div className="container">
    <div className="row">
      <Menu />
      <Routes />
    </div>
  </div>
)


