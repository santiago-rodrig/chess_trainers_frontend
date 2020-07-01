// src/actions/index.js

const updateGroup = group => ({ type: 'UPDATE_GROUP', group });
const updateTrainers = trainers => ({ type: 'UPDATE_TRAINERS', trainers });
const setIsLastGroup = value => ({ type: 'SET_IS_LAST_GROUP', value });

const updateAppointments = appointments => (
  { type: 'UPDATE_APPOINTMENTS', appointments }
);

const updateAppointmentsGroup = group => (
  { type: 'UPDATE_APPOINTMENTS_GROUP', group }
);

const setAppointmentsLastGroup = value => (
  { type: 'SET_APPOINTMENTS_LAST_GROUP', value }
);

const setTrainerNameFilter = filter => (
  { type: 'SET_TRAINER_NAME_FILTER', filter }
);

const setExpertTrainerFilter = filter => (
  { type: 'SET_EXPERT_TRAINER_FILTER', filter }
);

const setIntermediateTrainerFilter = filter => (
  { type: 'SET_INTERMEDIATE_TRAINER_FILTER', filter }
);

const setAmateurTrainerFilter = filter => (
  { type: 'SET_AMATEUR_TRAINER_FILTER', filter }
);

const setAppointmentPendingStatus = status => (
  { type: 'SET_APPOINTMENT_PENDING_STATUS', status }
);

const setAppointmentSuccessStatus = status => (
  { type: 'SET_APPOINTMENT_SUCCESS_STATUS', status }
);

const setAppointmentFailedStatus = status => (
  { type: 'SET_APPOINTMENT_FAILED_STATUS', status }
);

export {
  setAppointmentPendingStatus,
  setAppointmentSuccessStatus,
  setAppointmentFailedStatus,
  setAmateurTrainerFilter,
  setIntermediateTrainerFilter,
  setExpertTrainerFilter,
  updateGroup,
  updateTrainers,
  setIsLastGroup,
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
  setTrainerNameFilter,
};
