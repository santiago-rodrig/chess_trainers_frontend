import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

const Avatar = ({ trainer }) => (
  <>
    <div className={styles.avatarContainer}>
      <img src="https://www.gravatar.com/avatar/f4b9954393f4205445d3d4f636add64f?s=300" alt="trainer avatar" />
    </div>
    <h1 className={styles.trainerName}>
      {trainer.name}
    </h1>
  </>
);

Avatar.propTypes = {
  trainer: PropTypes.exact({
    name: PropTypes.string,
    expertise: PropTypes.string,
    events_won: PropTypes.number,
    calendar_url: PropTypes.string,
    location_url: PropTypes.string,
  }).isRequired,
};

export default Avatar;
