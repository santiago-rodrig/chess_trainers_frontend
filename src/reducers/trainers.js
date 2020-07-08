// src/reducers/trainers.js

const trainersReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TRAINERS':
      return action.trainers;
    default:
      return state;
  }
};

export default trainersReducer;
