// src/actions/index.js

const updateGroup = group => ({ type: 'UPDATE_GROUP', group });
const updateTrainers = trainers => ({ type: 'UPDATE_TRAINERS', trainers });
const toggleIsLastGroup = () => ({ type: 'TOGGLE_IS_LAST_GROUP' });

export { updateGroup, updateTrainers, toggleIsLastGroup };
