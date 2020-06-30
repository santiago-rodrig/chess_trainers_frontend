import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrainerItem from '../components/TrainersIndex/TrainerItem';
import Indicators from '../components/TrainersIndex/Indicators';
import SliderButtons from '../components/TrainersIndex/SliderButtons';
import {
  updateGroup,
  updateTrainers,
  setIsLastGroup,
  setTrainerNameFilter,
  setExpertTrainerFilter,
  setAmateurTrainerFilter,
  setIntermediateTrainerFilter,
} from '../actions';
import CurrentPage from '../components/CurrentPage';
import Loading from '../components/Loading';
import Filter from '../components/TrainersIndex/Filter';

const APIURL = 'http://localhost:4000/trainers/group/';

const filtersBuilder = (
  trainerNameFilter,
  expertTrainerFilter,
  intermediateTrainerFilter,
  amateurTrainerFilter,
) => (
  [
    '?',
    [
      `tname=${trainerNameFilter}`,
      `texpert=${expertTrainerFilter ? 1 : 0}`,
      `tamateur=${amateurTrainerFilter ? 1 : 0}`,
      `tintermediate=${intermediateTrainerFilter ? 1 : 0}`,
    ].join('&'),
  ].join('')
);

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
  setExpertTrainerFilter: filter => dispatch(setExpertTrainerFilter(filter)),
  setAmateurTrainerFilter: filter => dispatch(setAmateurTrainerFilter(filter)),

  setIntermediateTrainerFilter: filter => (
    dispatch(setIntermediateTrainerFilter(filter))
  ),
});

const mapStateToProps = state => ({
  group: state.group,
  isLastGroup: state.isLastGroup,
  trainers: state.trainers,
  trainerNameFilter: state.trainerNameFilter,
  expertTrainerFilter: state.expertTrainerFilter,
  amateurTrainerFilter: state.amateurTrainerFilter,
  intermediateTrainerFilter: state.intermediateTrainerFilter,
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
  expertTrainerFilter,
  setExpertTrainerFilter,
  amateurTrainerFilter,
  setAmateurTrainerFilter,
  intermediateTrainerFilter,
  setIntermediateTrainerFilter,
}) => {
  const [fetching, setFetching] = useState(true);
  const [currentTrainer, setCurrentTrainer] = useState(-1);

  const fetchTrainers = useCallback(() => {
    const filters = filtersBuilder(
      trainerNameFilter,
      expertTrainerFilter,
      intermediateTrainerFilter,
      amateurTrainerFilter,
    );

    window.fetch(`${APIURL}${group}${filters}`, GETOptions)
      .then(response => response.json())
      .then(data => {
        updateTrainers(data.trainers);
        setIsLastGroup(Boolean(data.last_group));
        setCurrentTrainer(0);
        window.setTimeout(() => setFetching(false), 500, setFetching);
      });
  },
    [
      group,
      setFetching,
      updateTrainers,
      setIsLastGroup,
      setCurrentTrainer,
      trainerNameFilter,
      expertTrainerFilter,
      amateurTrainerFilter,
      intermediateTrainerFilter,
    ],
  );

  useEffect(() => {
    if (fetching) {
      fetchTrainers();
    }
  }, [fetching, fetchTrainers]);

  const resetCallback = useCallback(() => {
    updateGroup(0);
    setIsLastGroup(false);
    setFetching(true);
  }, [setFetching, updateGroup, setIsLastGroup]);

  useEffect(() => {
    resetCallback();
  }, [resetCallback]);

  const startFetching = () => {
    setFetching(true);
  };

  let renderedJSX = null;

  if (fetching) {
    renderedJSX = <Loading />;
  } else {
    renderedJSX = (
      <>
        <CurrentPage page={group + 1} />
        <Indicators />
        <Filter
          amateurTrainerFilter={amateurTrainerFilter}
          setAmateurTrainerFilter={setAmateurTrainerFilter}
          intermediateTrainerFilter={intermediateTrainerFilter}
          setIntermediateTrainerFilter={setIntermediateTrainerFilter}
          expertTrainerFilter={expertTrainerFilter}
          setExpertTrainerFilter={setExpertTrainerFilter}
          trainerNameFilter={trainerNameFilter}
          setTrainerNameFilter={setTrainerNameFilter}
          resetCallback={resetCallback}
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
  expertTrainerFilter: PropTypes.bool.isRequired,
  setExpertTrainerFilter: PropTypes.func.isRequired,
  amateurTrainerFilter: PropTypes.bool.isRequired,
  setAmateurTrainerFilter: PropTypes.func.isRequired,
  intermediateTrainerFilter: PropTypes.bool.isRequired,
  setIntermediateTrainerFilter: PropTypes.func.isRequired,
};

const TrainersIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(TrainersIndex);

export default TrainersIndexContainer;

