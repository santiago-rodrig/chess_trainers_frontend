// src/reducers/index.js

import { combineReducers } from 'redux';
import groupReducer from './group';
import trainersReducer from './trainers';
import isLastGroupReducer from './isLastGroup';
import appointmentsReducer from './appointments';
import appointmentsGroupReducer from './appointmentsGroup';
import isAppointmentsLastGroupReducer from './isAppointmentsLastGroup';
import trainerNameFilterReducer from './trainerNameFilter';
import expertTrainerReducer from './expertTrainer';
import intermediateTrainerReducer from './intermediateTrainer';
import amateurTrainerReducer from './amateurTrainer';
import appointmentStatusReducer from './appointmentStatus';

const mainReducer = combineReducers({
  amateurTrainerFilter: amateurTrainerReducer,
  intermediateTrainerFilter: intermediateTrainerReducer,
  group: groupReducer,
  trainers: trainersReducer,
  isLastGroup: isLastGroupReducer,
  appointmentsGroup: appointmentsGroupReducer,
  appointments: appointmentsReducer,
  isAppointmentsLastGroup: isAppointmentsLastGroupReducer,
  trainerNameFilter: trainerNameFilterReducer,
  expertTrainerFilter: expertTrainerReducer,
  appointmentStatus: appointmentStatusReducer,
});

export default mainReducer;
