import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppointmentsList.module.css';
import AppointmentItem from './AppointmentItem';

const AppointmentsList = ({ appointments }) => (
  <div className={styles.container}>
    <h1 className={styles.mainHeading}>Appointments</h1>
    <ul>
      {appointments.map(a => (
        <AppointmentItem
          key={a.created_at}
          appointment={a}
          className={styles.appointment}
        />
      ))}
    </ul>
  </div>
);

AppointmentsList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AppointmentsList;
