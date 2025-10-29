// Login.jsx
import React, { Component } from 'react';
import WithLogging from '../HOC/WithLogging';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  // Validation email simple (suffisante pour l’exercice)
  // isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // isValidEmail = (email) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  isValidEmail = (email) => {
    // forme générale
    const basic = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!basic.test(email)) return false;

    const [, domain] = email.split('@');

    // domaine ne commence/termine pas par '.' ou '-'
    if (!domain || domain.startsWith('.') || domain.endsWith('.') ||
        domain.startsWith('-') || domain.endsWith('-')) return false;

    // pas de double point dans le domaine (ex: domain..com)
    if (domain.includes('..')) return false;

    // chaque label non vide et ne commence/termine pas par '-'
    const labels = domain.split('.');
    if (labels.some(l => l.length === 0 || l.startsWith('-') || l.endsWith('-'))) return false;

    return true;
  };

  // updateEnableSubmit = (email, password) => {
  //   const ok =
  //     email.trim().length > 0 &&
  //     password.trim().length > 0 &&
  //     this.isValidEmail(email) &&
  //     password.length >= 8;
  //   this.setState({ enableSubmit: ok });
  // };
  // updateEnableSubmit = (email, password) => {
  //   this.setState({
  //     enableSubmit: this.isValidEmail(email) && password.length >= 8
  //   });
  // };
  updateEnableSubmit = (email, password) => {
    const e = email.trim();
    const p = password.trim();
    this.setState({ enableSubmit: this.isValidEmail(e) && p.length >= 8 });
  };


  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({ email }, () => {
      this.updateEnableSubmit(this.state.email, this.state.password);
    });
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState({ password }, () => {
      this.updateEnableSubmit(this.state.email, this.state.password);
    });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault(); // ne pas recharger la page
    if (this.state.enableSubmit) {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      // ⚠️ PAS de border ici
      <div className="App-body p-[10px]">
        {/* ✅ La SEULE bordure-top doit être sur CE div */}
        <div className="border-t-[3px] border-[var(--main-color)] pt-2">
          <p className="text-sm mb-2">Login to access the full dashboard</p>

          <form
            className="App-login inline-flex items-center gap-2 flex-wrap"
            onSubmit={this.handleLoginSubmit}
          >
            <label htmlFor="email" className="ml-4 mr-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChangeEmail}
              className="border border-gray-300 px-2 py-1 mr-2 rounded"
            />

            <label htmlFor="password" className="ml-4 mr-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChangePassword}
              className="border border-gray-300 px-2 py-1 mr-2 rounded"
            />

            {/* Remplace le bouton par un input submit contrôlé par enableSubmit */}
            <input
              type="submit"
              value="OK"
              role="button"
              disabled={!enableSubmit}
              className="px-3 py-1 border rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="OK"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default WithLogging(Login);
