// src/reducers/isLastGroup.js

const isLastGroupReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_LAST_GROUP':
      return !state;
    default:
      return state;
  }
};

export default isLastGroupReducer;
