const trainerNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TRAINER_NAME_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default trainerNameReducer;
