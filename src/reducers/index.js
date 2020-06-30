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

const mainReducer = combineReducers({
  intermediateTrainerFilter: intermediateTrainerReducer,
  group: groupReducer,
  trainers: trainersReducer,
  isLastGroup: isLastGroupReducer,
  appointmentsGroup: appointmentsGroupReducer,
  appointments: appointmentsReducer,
  isAppointmentsLastGroup: isAppointmentsLastGroupReducer,
  trainerNameFilter: trainerNameFilterReducer,
  expertTrainerFilter: expertTrainerReducer,
});

export default mainReducer;
