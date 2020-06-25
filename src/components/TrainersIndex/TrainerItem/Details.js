import React from 'react';
import styles from './Details.module.css';

const Details = () => (
  <>
    <ul className={styles.trainerDetails}>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Trainer level</h2>
        <p className={styles.detailsContent}>expert</p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Events won</h2>
        <p className={styles.detailsContent}>3</p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Training location</h2>
        <p className={styles.detailsContent}>
          <a href="https://google.com">google maps link</a>
        </p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Schedule</h2>
        <p className={styles.detailsContent}>
          <a href="https://google.com">google calendar link</a>
        </p>
      </li>
    </ul>
    <p className={styles.trainerDescription}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </>
);

export default Details;
