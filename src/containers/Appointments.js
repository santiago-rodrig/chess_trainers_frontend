import React, { useEffect } from 'react';
import alertify from 'alertifyjs/build/alertify';
import AppointmentsList from '../components/Appointments/AppointmentsList';
import CurrentPage from '../components/CurrentPage';

const Appointments = () => {
  useEffect(() => {
    alertify.warning('This is a test');
  }, []);

  return (
    <>
      <AppointmentsList />
      <CurrentPage page={1} />
    </>
  );
};

export default Appointments;
