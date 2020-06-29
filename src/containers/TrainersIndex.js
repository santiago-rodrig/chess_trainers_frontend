import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrainerItem from '../components/TrainersIndex/TrainerItem';
import SearchForm from '../components/TrainersIndex/SearchForm';
import Indicators from '../components/TrainersIndex/Indicators';
import SliderButtons from '../components/TrainersIndex/SliderButtons';
import {
  updateGroup,
  updateTrainers,
  setIsLastGroup,
  setTrainerNameFilter,
} from '../actions';
import CurrentPage from '../components/CurrentPage';
import Loading from '../components/Loading';
import Filter from '../components/TrainersIndex/Filter';

const APIURL = 'http://localhost:4000/trainers/group/';
const GETOptions = {
  mode: 'cors',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
};

const mapDispatchToProps = dispatch => ({
  updateGroup: group => dispatch(updateGroup(group)),
  updateTrainers: trainers => dispatch(updateTrainers(trainers)),
  setIsLastGroup: value => dispatch(setIsLastGroup(value)),
  setTrainerNameFilter: filter => dispatch(setTrainerNameFilter(filter)),
});

const mapStateToProps = state => ({
  group: state.group,
  isLastGroup: state.isLastGroup,
  trainers: state.trainers,
  trainerNameFilter: state.trainerNameFilter,
});

const TrainersIndex = ({
  group,
  trainers,
  updateGroup,
  updateTrainers,
  isLastGroup,
  setIsLastGroup,
  trainerNameFilter,
  setTrainerNameFilter,
}) => {
  const [fetching, setFetching] = useState(true);
  const [currentTrainer, setCurrentTrainer] = useState(-1);

  const fetchTrainers = useCallback(() => {
    window.fetch(`${APIURL}${group}`, GETOptions)
      .then(response => response.json())
      .then(data => {
        updateTrainers(data.trainers);
        setIsLastGroup(Boolean(data.last_group));
        setCurrentTrainer(0);
        window.setTimeout(() => setFetching(false), 500, setFetching);
      });
  }, [updateTrainers, setFetching, setCurrentTrainer, group, setIsLastGroup]);

  useEffect(() => {
    if (fetching) {
      fetchTrainers();
    }
  }, [fetching, fetchTrainers]);

  useEffect(() => {
    updateGroup(0);
    setIsLastGroup(false);
    setFetching(true);
  }, [setFetching, updateGroup, setIsLastGroup]);

  const startFetching = () => {
    setFetching(true);
  };

  let renderedJSX = null;

  if (fetching) {
    renderedJSX = <Loading />;
  } else {
    renderedJSX = (
      <>
        <SearchForm />
        <CurrentPage page={group + 1} />
        <Indicators />
        <Filter
          trainerNameFilter={trainerNameFilter}
          setTrainerNameFilter={setTrainerNameFilter}
        />
        <SliderButtons
          startFetching={startFetching}
          updateGroup={updateGroup}
          setCurrentTrainer={setCurrentTrainer}
          group={group}
          isLastGroup={isLastGroup}
          trainersCount={trainers.length}
          setIsLastGroup={setIsLastGroup}
        />
        <main style={{ maxWidth: '86%', marginLeft: 'auto', marginRight: 'auto' }}>
          <TrainerItem trainer={trainers[currentTrainer]} />
        </main>
      </>
    );
  }

  return (
    <div className="trainersContainer">
      {renderedJSX}
    </div>
  );
};

TrainersIndex.propTypes = {
  group: PropTypes.number.isRequired,
  trainers: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateGroup: PropTypes.func.isRequired,
  updateTrainers: PropTypes.func.isRequired,
  isLastGroup: PropTypes.bool.isRequired,
  setIsLastGroup: PropTypes.func.isRequired,
  trainerNameFilter: PropTypes.string.isRequired,
  setTrainerNameFilter: PropTypes.func.isRequired,
};

const TrainersIndexContainer = connect(mapStateToProps, mapDispatchToProps)(TrainersIndex);

export default TrainersIndexContainer;
