import React, { Component } from 'react'

import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <img src="assets/bg.jpg" className="landingImage" />
                <form className="submitForm">
                    <img src="assets/logo.png" className="logo" />
                    <label htmlFor="inputEmail">Email</label>
                    <input id="inputEmail" name="inputEmail" type="email" placeholder="seuemail@email.com" />

                    <label htmlFor="inputPassword">Password</label>
                    <input id="inputPassword" name="inputPassword" type="password" placeholder="Password" />

                    <label className="showPassword">Mostrar a senha <input type="checkbox" className="showCheckbox" /></label>

                    <a className="accessNotWork" href="#testes">Problemas para acessar a conta?</a>

                    <button className="accessBtn">Acessar</button>
                    <div></div>
                    <span>ou</span>
                    <div></div>
                    <button className="signUpBtn">Cadastrar</button>
                    <div className="useTerms">
                        <a href="#">Termos de uso</a> • <a href="#">Políticas de privacidade</a>
                    </div>
                </form>
            </div>
        )
    }
}
