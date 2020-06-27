import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import './TrainerItemTransitions.css';
import Avatar from './Avatar';
import Details from './Details';

const TrainerItem = ({ trainer }) => (
  <div className="trainerItem">
    <Avatar trainer={trainer} />
    <hr className={styles.divisoryLine} />
    <Details trainer={trainer} />
    <button className={styles.contactButton} type="button">make appointment</button>
  </div>
);

TrainerItem.propTypes = {
  trainer: PropTypes.exact({
    name: PropTypes.string,
    expertise: PropTypes.string,
    events_won: PropTypes.number,
    calendar_url: PropTypes.string,
    location_url: PropTypes.string,
    description: PropTypes.string,
    hashed_email: PropTypes.string,
  }).isRequired,
};

export default TrainerItem;