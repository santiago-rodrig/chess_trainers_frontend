import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs/build/alertify';
import styles from './Login.module.css';
import loadingGif from '../images/loading.gif';

const APIURL = 'http://localhost:4000/login';

const GETOptions = body => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const Login = ({ setLoggedIn }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [sending, setSending] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setSending(true);
  };

  useEffect(() => {
    if (sending) {
      window.fetch(APIURL, GETOptions({ credentials: { name: username, password } }))
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('Wrong credentials');
        })
        .then(data => {
          window.sessionStorage.setItem('user_token', data.token);
          window.setTimeout(() => {
            setSending(false);
            alertify.success('Logged in');
            window.setTimeout(() => setLoggedIn(true), 500, setLoggedIn);
          }, 300, setSending);
        }, error => {
          alertify.error(error.message);
          setLoggedIn(false);
          setSending(false);
        });
    }
  }, [sending, setSending, username, password, setLoggedIn]);

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>chess trainers</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input ref={usernameRef} type="text" name="username" placeholder="John Doe" />
        </label>
        <label htmlFor="password">
          Password
          <input ref={passwordRef} type="password" name="password" />
        </label>
        <button type="submit">{sending ? <img width="20" src={loadingGif} alt="loading" /> : 'login'}</button>
      </form>
      <Link to="http://www.google.com" className={styles.signupLink}>
        Create a new account
      </Link>
      <footer className={styles.footerBox}>
        <p>Copyright &copy; Santiago Rodríguez. All rights reserved.</p>
      </footer>
    </div>
  );
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;
