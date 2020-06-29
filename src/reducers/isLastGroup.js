// src/reducers/isLastGroup.js

const isLastGroupReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LAST_GROUP':
      return action.value;
    default:
      return state;
  }
};

export default isLastGroupReducer;
