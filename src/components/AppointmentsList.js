import React from 'react';
import styles from './AppointmentsList.module.css';

const AppointmentsList = () => (
  <div className={styles.container}>
    <h1 className={styles.mainHeading}>Appointments</h1>
    <ul>
      <li className={styles.appointment}>
        <h2>Trainer: X-0</h2>
        <p>
          <strong>Creation date:</strong>
          {' '}
          appointment.created_at
        </p>
        <p>
          <strong>Status:</strong>
          {' '}
          appointment.status
        </p>
      </li>
      <li className={styles.appointment}>
        <h2>Trainer: X-1</h2>
        <p>
          <strong>Creation date:</strong>
          {' '}
          appointment.created_at
        </p>
        <p>
          <strong>Status:</strong>
          {' '}
          appointment.status
        </p>
      </li>
      <li className={styles.appointment}>
        <h2>Trainer: X-2</h2>
        <p>
          <strong>Creation date:</strong>
          {' '}
          appointment.created_at
        </p>
        <p>
          <strong>Status:</strong>
          {' '}
          appointment.status
        </p>
      </li>
    </ul>
  </div>
);

export default AppointmentsList;
