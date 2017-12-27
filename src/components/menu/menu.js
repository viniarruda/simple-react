import React from 'react'
import './menu.scss'

export default props => (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#/home">Simple React</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#/home"><i className='fa fa-home'></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/login">Login</a>
            </li>
            </ul>
        </div>
    </nav>
)