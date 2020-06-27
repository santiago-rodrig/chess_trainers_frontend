const isAppointmentsLastGroupReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_APPOINTMENTS_LAST_GROUP':
      return !state;
    default:
      return state;
  }
};

export default isAppointmentsLastGroupReducer;
