// src/reducers/index.js

import { combineReducers } from 'redux';
import groupReducer from './group';
import trainersReducer from './trainers';
import isLastGroupReducer from './isLastGroup';

const mainReducer = combineReducers({
  group: groupReducer,
  trainers: trainersReducer,
  isLastGroup: isLastGroupReducer,
});

export default mainReducer;
