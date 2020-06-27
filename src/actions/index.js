// src/actions/index.js

const updateGroup = group => ({ type: 'UPDATE_GROUP', group });
const updateTrainers = trainers => ({ type: 'UPDATE_TRAINERS', trainers });
const toggleIsLastGroup = () => ({ type: 'TOGGLE_IS_LAST_GROUP' });
const updateAppointments = appointments => ({ type: 'UPDATE_APPOINTMENTS', appointments });
const updateAppointmentsGroup = group => ({ type: 'UPDATE_APPOINTMENTS_GROUP', group });
const toggleAppointmentsLastGroup = () => ({ type: 'TOGGLE_APPOINTMENTS_LAST_GROUP' });

export {
  updateGroup,
  updateTrainers,
  toggleIsLastGroup,
  updateAppointments,
  updateAppointmentsGroup,
  toggleAppointmentsLastGroup,
};
