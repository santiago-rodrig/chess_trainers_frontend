import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.module.css';

const Details = ({ trainer }) => (
  <>
    <ul className={styles.trainerDetails}>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Trainer level</h2>
        <p className={styles.detailsContent}>{trainer.expertise}</p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Events won</h2>
        <p className={styles.detailsContent}>{trainer.events_won}</p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Training location</h2>
        <p className={styles.detailsContent}>
          <a href={trainer.location_url}>google maps link</a>
        </p>
      </li>
      <li className={styles.detailsItem}>
        <h2 className={styles.detailsHeading}>Schedule</h2>
        <p className={styles.detailsContent}>
          <a href={trainer.calendar_url}>google calendar link</a>
        </p>
      </li>
    </ul>
    <p className={styles.trainerDescription}>DESCRIPTION HERE</p>
  </>
);

Details.propTypes = {
  trainer: PropTypes.exact({
    name: PropTypes.string,
    expertise: PropTypes.string,
    events_won: PropTypes.number,
    calendar_url: PropTypes.string,
    location_url: PropTypes.string,
  }).isRequired,
};

export default Details;
