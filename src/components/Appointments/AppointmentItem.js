import React from 'react';
import PropTypes from 'prop-types';

const AppointmentItem = ({ appointment, className }) => (
  <li className={className}>
    <h2>{appointment.trainer}</h2>
    <p>
      <strong>Creation date:</strong>
      {' '}
      {appointment.created_at}
    </p>
    <p>
      <strong>Status:</strong>
      {' '}
      {appointment.status}
    </p>
  </li>
);

AppointmentItem.propTypes = {
  appointment: PropTypes.exact({
    trainer: PropTypes.string,
    created_at: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  className: PropTypes.string.isRequired,
};

export default AppointmentItem;
