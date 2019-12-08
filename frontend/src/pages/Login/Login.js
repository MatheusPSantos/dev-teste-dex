import React, { Component } from 'react'

import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <img src="img/assets/bg.jpg" className="landingImage" />
                <div className="submitForm">
                    <img src="/img/assets/logo.png" className="logo" />
                    <form>
                        <label id="email" htmlFor="inputEmail">Email</label>
                        <input id="inputEmail" name="inputEmail" type="email" placeholder="seuemail@email.com" />

                        <label id="password" htmlFor="inputPassword">Password</label>
                        <input id="inputPassword" name="inputPassword" type="password" placeholder="Password" />

                        <label className="showPassword">Mostrar a senha
                        <input type="checkbox" className="showCheckbox" />
                            <span className="mark"></span>
                        </label>

                        <a className="accessNotWork" href="#testes">Problemas para acessar a sua conta?</a>

                        <button className="accessBtn">Acessar</button>
                        <div className="line">
                            <div></div>
                            <span>ou</span>
                            <div></div>
                        </div>
                        <button className="signUpBtn">Cadastrar</button>
                        <div className="useTerms">
                            <a href="#">Termos de uso</a> • <a href="#">Políticas de privacidade</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
