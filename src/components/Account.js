import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import PropTypes from 'prop-types';
import alertify from 'alertifyjs/build/alertify';
import styles from './Account.module.css';
import loadingGif from '../images/loading.gif';

const APIURL = 'https://srodrig-chess-trainers.herokuapp.com/users/update';
const userDataAPIURL = 'https://srodrig-chess-trainers.herokuapp.com/user';

const GETOptions = token => ({
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
  },
});

const PUTOptions = (body, token) => ({
  mode: 'cors',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(body),
});

const PasswordsError = () => (
  <div className={styles.passwordsError}>
    <i className="fas fa-exclamation-triangle" style={{ fontSize: 24 }} />
    <br />
    <p>The password and its confirmation don&apos;t match</p>
  </div>
);

const Account = ({ setLoggedUser }) => {
  const [sending, setSending] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const currentPasswordRef = useRef();
  const [fetching, setFetching] = useState(true);
  const [userData, setUserData] = useState({});
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = () => {
    const match = passwordRef.current.value === passwordConfirmationRef.current.value;
    setPasswordsMatch(match);
  };

  useEffect(() => {
    window.fetch(userDataAPIURL, GETOptions(window.sessionStorage.getItem('user_token')))
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setFetching(false);
      });
  }, [setFetching]);

  const sendData = useCallback(() => {
    window.fetch(
      APIURL,
      PUTOptions(
        {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          password_confirmation: passwordConfirmationRef.current.value,
          current_password: currentPasswordRef.current.value,
        },
        window.sessionStorage.getItem('user_token'),
      ),
    )
      .then(response => response.json())
      .then(data => {
        alertify.success('Account updated');
        setLoggedUser(data.username);
        setSending(false);
      });
  }, [setSending, setLoggedUser]);

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    sendData();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Account details</h1>
      {passwordsMatch ? '' : <PasswordsError />}
      <form className={styles.dataForm} onSubmit={handleSubmit}>
        <label htmlFor="user_name" className={styles.inputLabel}>
          <span className={styles.labelText}>Username</span>
          <input
            disabled={sending || fetching}
            name="user_name"
            type="text"
            defaultValue={userData.name}
            ref={usernameRef}
          />
        </label>
        <label htmlFor="user_email" className={styles.inputLabel}>
          <span className={styles.labelText}>Email</span>
          <input
            name="user_email"
            type="email"
            defaultValue={userData.email}
            disabled={sending || fetching}
            ref={emailRef}
          />
        </label>
        <label htmlFor="user_password" className={styles.inputLabel}>
          <span className={styles.labelText}>Password</span>
          <input
            name="user_password"
            type="password"
            disabled={sending || fetching}
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
        </label>
        <label htmlFor="user_password_confirmation" className={styles.inputLabel}>
          <span className={styles.labelText}>Password confirmation</span>
          <input
            name="user_password_confirmation"
            type="password"
            disabled={sending || fetching}
            ref={passwordConfirmationRef}
            onChange={handlePasswordChange}
          />
        </label>
        <label htmlFor="user_current_password" className={styles.inputLabel}>
          <span className={styles.labelText}>Current password (required)</span>
          <input
            name="user_current_password"
            type="password"
            disabled={sending || fetching}
            ref={currentPasswordRef}
          />
        </label>
        <button
          disabled={sending || fetching || !passwordsMatch}
          type="submit"
          className={styles.submitButton}
        >
          {sending ? <img width="25" src={loadingGif} alt="loading" /> : 'update'}
        </button>
      </form>
    </div>
  );
};

Account.propTypes = {
  setLoggedUser: PropTypes.func.isRequired,
};

export default Account;
