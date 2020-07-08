// src/reducers/group.js

const groupReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_GROUP':
      return action.group;
    default:
      return state;
  }
};

export default groupReducer;
