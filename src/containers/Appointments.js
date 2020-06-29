import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentsList from '../components/Appointments/AppointmentsList';
import CurrentPage from '../components/CurrentPage';
import {
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
} from '../actions';
import Loading from '../components/Loading';
import SliderButtons from '../components/Appointments/SliderButtons';
import EmptyList from '../components/EmptyList';

const APIURL = 'http://localhost:4000/appointments/group/';

const GETOptions = token => ({
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

const mapDispatchToProps = dispatch => ({
  updateAppointments: appointments => dispatch(updateAppointments(appointments)),
  updateAppointmentsGroup: group => dispatch(updateAppointmentsGroup(group)),
  setAppointmentsLastGroup: value => dispatch(setAppointmentsLastGroup(value)),
});

const mapStateToProps = state => ({
  group: state.appointmentsGroup,
  appointments: state.appointments,
  isLastGroup: state.isAppointmentsLastGroup,
});

const Appointments = ({
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
  group,
  appointments,
  isLastGroup,
}) => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    updateAppointmentsGroup(0);
    setAppointmentsLastGroup(false);
  }, [updateAppointmentsGroup, setFetching, setAppointmentsLastGroup]);

  const fetchAppointments = useCallback(() => {
    window.fetch(`${APIURL}${group}`, GETOptions(window.sessionStorage.getItem('user_token')))
      .then(response => response.json())
      .then(data => {
        setAppointmentsLastGroup(Boolean(data.last_group));
        updateAppointments(data.appointments);
        window.setTimeout(() => setFetching(false), 300, setFetching);
      });
  }, [group, setAppointmentsLastGroup, updateAppointments]);

  useEffect(() => {
    if (fetching) {
      fetchAppointments();
    }
  }, [fetching, fetchAppointments]);

  let renderedJSX = null;

  const startFetching = () => setFetching(true);

  if (fetching) {
    renderedJSX = <Loading />;
  } else if (appointments.length === 0) {
    renderedJSX = (
      <EmptyList>
        You don&apos;t have any appointments
      </EmptyList>
    );
  } else {
    renderedJSX = (
      <>
        <SliderButtons
          startFetching={startFetching}
          group={group}
          updateGroup={updateAppointmentsGroup}
          isLastGroup={isLastGroup}
          setIsLastGroup={setAppointmentsLastGroup}
        />
        <AppointmentsList appointments={appointments} />
        <CurrentPage page={group + 1} />
      </>
    );
  }

  return renderedJSX;
};

Appointments.propTypes = {
  updateAppointments: PropTypes.func.isRequired,
  updateAppointmentsGroup: PropTypes.func.isRequired,
  setAppointmentsLastGroup: PropTypes.func.isRequired,
  group: PropTypes.number.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLastGroup: PropTypes.bool.isRequired,
};

const AppointmentsContainer = connect(mapStateToProps, mapDispatchToProps)(Appointments);

export default AppointmentsContainer;
