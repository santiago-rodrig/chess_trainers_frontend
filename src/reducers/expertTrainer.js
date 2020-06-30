const expertTrainerReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_EXPERT_TRAINER_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default expertTrainerReducer;

