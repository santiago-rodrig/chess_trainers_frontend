import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentsList from '../components/Appointments/AppointmentsList';
import CurrentPage from '../components/CurrentPage';
import Filter from '../components/Appointments/Filter';

import {
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
  setTrainerNameFilter,
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
  setTrainerNameFilter: filter => dispatch(setTrainerNameFilter(filter)),
});

const mapStateToProps = state => ({
  group: state.appointmentsGroup,
  appointments: state.appointments,
  isLastGroup: state.isAppointmentsLastGroup,
  trainerNameFilter: state.trainerNameFilter,
});

const filtersBuilder = trainerNameFilter => (
  [
    '?',
    [
      `tname=${trainerNameFilter}`,
    ].join('&'),
  ].join('')
);

const Appointments = ({
  updateAppointments,
  updateAppointmentsGroup,
  setAppointmentsLastGroup,
  group,
  appointments,
  isLastGroup,
  trainerNameFilter,
  setTrainerNameFilter,
}) => {
  const [fetching, setFetching] = useState(true);

  const resetCallback = useCallback(() => {
    setFetching(true);
    updateAppointmentsGroup(0);
    setAppointmentsLastGroup(false);
  }, [updateAppointmentsGroup, setFetching, setAppointmentsLastGroup]);

  useEffect(() => {
    resetCallback();
  }, [resetCallback]);

  useEffect(() => {
    setTrainerNameFilter('');
  }, [setTrainerNameFilter]);

  const fetchAppointments = useCallback(
    () => {
      const filters = filtersBuilder(trainerNameFilter);

      window.fetch(`${APIURL}${group}${filters}`, GETOptions(window.sessionStorage.getItem('user_token')))
        .then(response => response.json())
        .then(data => {
          setAppointmentsLastGroup(Boolean(data.last_group));
          updateAppointments(data.appointments);
          window.setTimeout(() => setFetching(false), 300, setFetching);
        });
    },
    [
      group,
      setAppointmentsLastGroup,
      updateAppointments,
      setFetching,
      trainerNameFilter,
    ],
  );

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
        <Filter
          resetCallback={resetCallback}
          trainerNameFilter={trainerNameFilter}
          setTrainerNameFilter={setTrainerNameFilter}
        />
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
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

const AppointmentsContainer = connect(mapStateToProps, mapDispatchToProps)(Appointments);

export default AppointmentsContainer;
