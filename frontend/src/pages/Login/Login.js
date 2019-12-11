import React, { Component } from 'react'
import UserProvider from '../../providers/User/UserProvider';
import './Login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            showPass: 'password',
            checkPass: false
        };
        this.login = this.login.bind(this);

        if(this.currentUser()){
			this.props.history.push('/dashboard')
		}
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    async login(event) {
        const userProvider = new UserProvider();
        const email = this.state.email;
        const pass = this.state.pass;
        try {
            await userProvider.login(email, pass);
            this.props.history.push("/dashboard");
        } catch (error) {
            alert("Error: ", error.message);
        }
    }

    currentUser(){
		return new UserProvider().currentUser();
	}

    render() {
        return (
            <div className="container">
                <img src="img/assets/bg.jpg" className="landingImage" alt="" />
                <div className="submitForm">
                    <img src="/img/assets/logo.png" className="logo" alt="" />
                    <form onSubmit={this.login}>
                        <label id="email" htmlFor="inputEmail">Email</label>
                        <input id="inputEmail" name="email" type="email" placeholder="seuemail@email.com" onChange={this.onChange} />

                        <label id="password" htmlFor="inputPassword">Password</label>
                        <input id="inputPassword" name="pass" type="password" placeholder="Password" onChange={this.onChange} />

                        <label className="showPassword">Mostrar a senha
                        <input type="checkbox" className="showCheckbox" />
                            <span className="mark"></span>
                        </label>

                        <a className="accessNotWork" href="#testes">Problemas para acessar a sua conta?</a>

                        <button className="accessBtn" type="submit">Acessar</button>
                        <div className="line">
                            <div></div>
                            <span>ou</span>
                            <div></div>
                        </div>
                        <button className="signUpBtn">Cadastrar</button>
                        <div className="useTerms">
                            <a href="/">Termos de uso</a> • <a href="/">Políticas de privacidade</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
