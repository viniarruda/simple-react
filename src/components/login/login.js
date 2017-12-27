import React, { Component } from 'react'
import './login.scss'
import Button from '../../common/button'
import Input from '../../common/input'

export default class Login extends Component {
    click() {
        alert('ação')
    }
    render() {
        return(
            <div className="login">
                <form className="form-group">
                    <h1>Login</h1>
                    <Input type='text' theme='' placeholder='Usuário' />
                    <Input type='password' theme='password' placeholder='Senha' />
                    <Button theme='success' name='Logar' onClick={this.click}></Button>
                </form>
            </div>
        )
    }
}