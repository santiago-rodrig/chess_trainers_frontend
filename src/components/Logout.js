import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs/build/alertify';
import loadingGif from '../images/loading.gif';
import styles from './Logout.module.css';

const APIURL = 'http://localhost:4000/logout';

const POSTOptions = body => ({
  mode: 'cors',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const Logout = ({ setLoggedIn }) => {
  const [loggingOut, setLoggingOut] = useState(false);

  const handleClick = () => {
    setLoggingOut(true);
  };

  useEffect(() => {
    if (loggingOut) {
      window.fetch(APIURL, POSTOptions({ token: window.sessionStorage.getItem('user_token') }))
        .then(response => {
          if (response.status !== 200) throw new Error('Failed to log out');
          alertify.success('Logged out');
          window.localStorage.removeItem('user_token');
          window.setTimeout(() => setLoggedIn(false), 500, setLoggedIn);
        })
        .catch(err => {
          alertify.error(err.message);
          setLoggingOut(false);
        });
    }
  }, [loggingOut, setLoggingOut, setLoggedIn]);

  const renderedJSX = (
    <button className={styles.logout} type="button" onClick={handleClick}>
      {loggingOut ? <img src={loadingGif} width="25" alt="loading" /> : 'logout'}
    </button>
  );

  return renderedJSX;
};

Logout.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Logout;
