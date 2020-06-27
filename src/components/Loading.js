import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <div className={styles.dimmer}>
    <h1 className={styles.notification}>
      Loading...
    </h1>
  </div>
);

export default Loading;
