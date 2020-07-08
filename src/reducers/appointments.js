const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_APPOINTMENTS':
      return action.appointments;
    default:
      return state;
  }
};

export default appointmentsReducer;
