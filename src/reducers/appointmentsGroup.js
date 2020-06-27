const appointmentsGroupReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_APPOINTMENTS_GROUP':
      return action.group;
    default:
      return state;
  }
};

export default appointmentsGroupReducer;
