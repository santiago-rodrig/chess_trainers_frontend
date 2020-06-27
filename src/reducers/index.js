// src/reducers/index.js

import { combineReducers } from 'redux';
import groupReducer from './group';
import trainersReducer from './trainers';
import isLastGroupReducer from './isLastGroup';
import appointmentsReducer from './appointments';
import appointmentsGroupReducer from './appointmentsGroup';
import isAppointmentsLastGroupReducer from './isAppointmentsLastGroup';

const mainReducer = combineReducers({
  group: groupReducer,
  trainers: trainersReducer,
  isLastGroup: isLastGroupReducer,
  appointmentsGroup: appointmentsGroupReducer,
  appointments: appointmentsReducer,
  isAppointmentsLastGroup: isAppointmentsLastGroupReducer,
});

export default mainReducer;
