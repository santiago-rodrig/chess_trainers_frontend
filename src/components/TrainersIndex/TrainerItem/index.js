import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import alertify from 'alertifyjs/build/alertify';
import styles from './index.module.css';
import './TrainerItemTransitions.css';
import Avatar from './Avatar';
import Details from './Details';

const APIURL = 'http://localhost:4000/appointments';

const POSTOptions = body => ({
  mode: 'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; encoding=UTF-8',
  },
  body: JSON.stringify(body),
});

const TrainerItem = ({ trainer }) => {
  const [sending, setSending] = useState(false);

  const handleClick = () => {
    setSending(true);
  };

  useEffect(() => {
    if (sending) {
      window.fetch(
        APIURL,
        POSTOptions({
          token: window.sessionStorage.getItem('user_token'),
          trainer: trainer.name,
        }),
      )
        .then(response => {
          if (response.status !== 200) throw new Error('Creation failed');
          alertify.success('Appointment created');
        })
        .catch(err => {
          alertify.error(err.message);
        });
    }
  }, [sending, setSending]);

  return (
    <div className="trainerItem">
      <Avatar trainer={trainer} />
      <hr className={styles.divisoryLine} />
      <Details trainer={trainer} />
      <button onClick={handleClick} className={styles.contactButton} type="button">
        make appointment
      </button>
    </div>
  );
};

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
