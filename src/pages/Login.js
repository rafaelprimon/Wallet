import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailState = this.emailState.bind(this);
    this.passwordState = this.passwordState.bind(this);
  }

  handleChange({ target }) {
    const { value, type } = target;
    this.setState({
      [type]: value,
    });
    if (this.emailState() && this.passwordState() === true) {
      this.setState({
        disable: false,
      });
    }
  }

  emailState() {
    const { email } = this.state;
    const Regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    // regex criada por Rodrigo Merlone e disponibilizada no slack da turma
    return Regex.test(email);
  }

  passwordState() {
    const { password } = this.state;
    const caracters = 5;
    if (password.length >= caracters) {
      return true;
    } return false;
  }

  render() {
    const { disable } = this.state;
    return (
      <>
        <div>Login</div>
        <label htmlFor="Input-do-email">
          <input
            id="Input-do-email"
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Input-de-senha">
          <input
            id="Input-de-senha"
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button id="enterButton" type="button" disabled={ disable }>
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
