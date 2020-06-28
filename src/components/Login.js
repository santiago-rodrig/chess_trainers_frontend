import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => (
  <div className={styles.container}>
    <h1 className={styles.logo}>chess trainers</h1>
    <form className={styles.loginForm}>
      <label htmlFor="username">
        Username
        <input type="text" name="username" placeholder="John Doe" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">login</button>
    </form>
    <Link to="http://www.google.com" className={styles.signupLink}>
      Create a new account
    </Link>
    <footer className={styles.footerBox}>
      <p>Copyright &copy; Santiago Rodríguez. All rights reserved.</p>
    </footer>
  </div>
);

export default Login;
