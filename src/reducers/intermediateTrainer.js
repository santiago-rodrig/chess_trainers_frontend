const intermediateTrainerReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_INTERMEDIATE_TRAINER_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default intermediateTrainerReducer;

