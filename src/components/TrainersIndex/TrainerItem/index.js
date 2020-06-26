import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import Avatar from './Avatar';
import Details from './Details';

const TrainerItem = ({ trainer }) => (
  <>
    <Avatar trainer={trainer} />
    <hr className={styles.divisoryLine} />
    <Details trainer={trainer} />
    <button className={styles.contactButton} type="button">make appointment</button>
  </>
);

TrainerItem.propTypes = {
  trainer: PropTypes.exact({
    name: PropTypes.string,
    expertise: PropTypes.string,
    events_won: PropTypes.number,
    calendar_url: PropTypes.string,
    location_url: PropTypes.string,
  }).isRequired,
};

export default TrainerItem;
