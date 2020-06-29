import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import alertify from 'alertifyjs/build/alertify';
import styles from './Signup.module.css';
import loadingGif from '../images/loading.gif';

const APIURL = 'http://localhost:4000/users';

const POSTOptions = body => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const Signup = ({ setLoggedIn, loggedIn }) => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [sending, setSending] = useState(false);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setPasswordConfirmation(passwordConfirmationRef.current.value);
    setSending(true);
  };

  useEffect(() => {
    if (sending) {
      window.fetch(
        APIURL,
        POSTOptions({
          user: {
            name: username,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        }),
      )
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('Registration failed');
        })
        .then(data => {
          window.sessionStorage.setItem('user_token', data.token);
          window.setTimeout(() => {
            setSending(false);
            alertify.success('Account created');
            window.setTimeout(() => setLoggedIn(true), 500, setLoggedIn);
          }, 300, setSending);
        }, error => {
          alertify.error(error.message);
          setLoggedIn(false);
          setSending(false);
        });
    }
  }, [sending, setSending, email, username, password, passwordConfirmation, setLoggedIn]);

  let renderedJSX = null;

  if (loggedIn) {
    renderedJSX = <Redirect to="/appointments" />;
  } else {
    renderedJSX = (
      <div className={styles.container}>
        <h1 className={styles.logo}>chess trainers</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username
            <input ref={usernameRef} type="text" name="username" placeholder="John Doe" />
          </label>
          <label htmlFor="email">
            Email
            <input ref={emailRef} type="email" name="email" placeholder="john.doe@example.com" />
          </label>
          <label htmlFor="password">
            Password
            <input ref={passwordRef} type="password" name="password" />
          </label>
          <label htmlFor="password_confirmation">
            Password confirmation
            <input ref={passwordConfirmationRef} type="password" name="password_confirmation" />
          </label>
          <button type="submit">{sending ? <img width="20" src={loadingGif} alt="loading" /> : 'Sign up'}</button>
        </form>
        <Link to="/" className={styles.signupLink}>
          I already have an account
        </Link>
        <footer className={styles.footerBox}>
          <p>Copyright &copy; Santiago Rodríguez. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return renderedJSX;
};

Signup.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Signup;
