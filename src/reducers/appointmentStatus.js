const appointmentStatusReducer = (state = '111', action) => {
  const newState = state.split('');

  switch (action.type) {
    case 'SET_APPOINTMENT_PENDING_STATUS':
      newState[0] = action.status;
      return newState.join('');
    case 'SET_APPOINTMENT_SUCCESS_STATUS':
      newState[1] = action.status;
      return newState.join('');
    case 'SET_APPOINTMENT_FAILED_STATUS':
      newState[2] = action.status;
      return newState.join('');
    default:
      return state;
  }
};

export default appointmentStatusReducer;
