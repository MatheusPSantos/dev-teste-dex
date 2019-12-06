import React, { Component } from 'react'

import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
            <img src="assets/bg.jpg" className="landingImage" />
                <form className="submitForm">
                    <img src="" />
                    <label htmlFor="inputEmail">Email</label>
                    <input id="inputEmail" name="inputEmail" type="email" />

                    <label htmlFor="inputPassword">Password</label>
                    <input id="inputPassword" name="inputPassword" type="password" />

                    <label>Mostrar a senha <input type="checkbox" /></label>

                    <a href="#testes">Problemas para acessar a conta?</a>

                    <button>Acessar</button>
                    <span>ou</span>
                    <button>Cadastrar</button>

                    <a href="#">Termos de uso</a> • <a href="#">Políticas de privacidade</a>
                </form>


            </div>
        )
    }
}
