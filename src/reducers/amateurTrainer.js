const amateurTrainerReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_AMATEUR_TRAINER_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default amateurTrainerReducer;

