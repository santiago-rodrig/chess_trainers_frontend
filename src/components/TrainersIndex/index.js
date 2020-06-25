import React from 'react';
import TrainerItem from './TrainerItem';
import SearchForm from './SearchForm';
import Indicators from './Indicators';
import SliderButtons from './SliderButtons';

const TrainersIndex = () => (
  <div className="trainersContainer">
    <SearchForm />
    <Indicators />
    <SliderButtons />
    <main style={{ maxWidth: '86%', marginLeft: 'auto', marginRight: 'auto' }}>
      <TrainerItem />
    </main>
  </div>
);

export default TrainersIndex;
