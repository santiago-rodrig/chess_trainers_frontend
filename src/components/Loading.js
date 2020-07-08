import React from 'react';
import styles from './Loading.module.css';
import loadingGif from '../images/loading.gif';

const Loading = () => (
  <div className={styles.dimmer}>
    <img className={styles.loading} src={loadingGif} alt="loading" />
  </div>
);

export default Loading;
