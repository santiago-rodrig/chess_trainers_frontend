import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentsList from '../components/Appointments/AppointmentsList';
import CurrentPage from '../components/CurrentPage';
import {
  updateAppointments,
  updateAppointmentsGroup,
  toggleAppointmentsLastGroup,
} from '../actions';
import Loading from '../components/Loading';

const APIURL = 'http://localhost:4000/appointments/group/';

const GETOptions = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mapDispatchToProps = dispatch => ({
  updateAppointments: appointments => dispatch(updateAppointments(appointments)),
  updateAppointmentsGroup: group => dispatch(updateAppointmentsGroup(group)),
  toggleAppointmentsLastGroup: () => dispatch(toggleAppointmentsLastGroup()),
});

const mapStateToProps = state => ({
  group: state.appointmentsGroup,
  appointments: state.appointments,
  isLastGroup: state.isAppointmentsLastGroup,
});

const Appointments = ({
  updateAppointments,
  updateAppointmentsGroup,
  toggleAppointmentsLastGroup,
  group,
  appointments,
  isLastGroup,
}) => {
  const [fetching, setFetching] = useState(true);

  const fetchAppointments = useCallback(() => {
    window.fetch(`${APIURL}${group}`, GETOptions)
      .then(response => response.json())
      .then(data => {
        if (data.last_group) toggleAppointmentsLastGroup();
        updateAppointments(data.appointments);
        setFetching(false);
      });
  }, [group, toggleAppointmentsLastGroup, updateAppointments]);

  useEffect(() => {
    if (fetching) {
      fetchAppointments();
    }
  }, [fetching, fetchAppointments]);

  let renderedJSX = null;

  if (fetching) {
    renderedJSX = <Loading />;
  } else {
    renderedJSX = (
      <>
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
  toggleAppointmentsLastGroup: PropTypes.func.isRequired,
  group: PropTypes.number.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLastGroup: PropTypes.bool.isRequired,
};

const AppointmentsContainer = connect(mapStateToProps, mapDispatchToProps)(Appointments);

export default AppointmentsContainer;
