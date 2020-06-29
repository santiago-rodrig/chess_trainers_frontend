// src/actions/index.js

const updateGroup = group => ({ type: 'UPDATE_GROUP', group });
const updateTrainers = trainers => ({ type: 'UPDATE_TRAINERS', trainers });
const setIsLastGroup = value => ({ type: 'SET_IS_LAST_GROUP', value });
const updateAppointments = appointments => ({ type: 'UPDATE_APPOINTMENTS', appointments });
const updateAppointmentsGroup = group => ({ type: 'UPDATE_APPOINTMENTS_GROUP', group });
const setAppointmentsLastGroup = value => ({ type: 'SET_APPOINTMENTS_LAST_GROUP', value });
const setTrainerNameFilter = filter => ({ type: 'SET_TRAINER_NAME_FILTER', filter });

export {
  updateGroup,
  updateTrainers,
  setIsLastGroup,
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
  setTrainerNameFilter,
};
