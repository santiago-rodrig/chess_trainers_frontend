const isAppointmentsLastGroupReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_APPOINTMENTS_LAST_GROUP':
      return action.value;
    default:
      return state;
  }
};

export default isAppointmentsLastGroupReducer;
